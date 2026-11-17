const API_URL = import.meta.env.VITE_API_URL

const wait = (ms, signal) =>
  new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, ms)
    signal?.addEventListener('abort', () => {
      clearTimeout(timer)
      reject(new DOMException('Aborted', 'AbortError'))
    })
  })

/**
 * Sends the conversation to the backend and returns the assistant's reply text.
 * Contract:  POST VITE_API_URL  { messages: [{ role, content }] }  ->  { reply: string }
 */
export async function sendChat(messages, { signal } = {}) {
  const payload = messages.map(({ role, content }) => ({ role, content }))

  if (!API_URL) {
    await wait(900, signal)
    return `Demo mode: no backend is connected yet. You said: “${payload.at(-1).content}”`
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages: payload }),
    signal,
  })
  if (!res.ok) throw new Error(`The server responded with an error (${res.status}).`)

  const data = await res.json()
  if (typeof data.reply !== 'string') throw new Error('The server sent an unexpected response.')
  return data.reply
}
