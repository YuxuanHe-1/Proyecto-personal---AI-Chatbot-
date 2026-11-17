import { useCallback, useRef, useState } from 'react'
import { sendChat } from '../services/chatApi'

let counter = 0
const makeMessage = (role, content) => ({ id: `${Date.now()}-${counter++}`, role, content })

export function useChat() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const controllerRef = useRef(null)

  const request = useCallback(async (history) => {
    const controller = new AbortController()
    controllerRef.current = controller
    setIsLoading(true)
    setError(null)
    try {
      const reply = await sendChat(history, { signal: controller.signal })
      setMessages((prev) => [...prev, makeMessage('assistant', reply)])
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message || 'Something went wrong. Try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }, [])

  const send = useCallback(
    (text) => {
      const content = text.trim()
      if (!content || isLoading) return
      const history = [...messages, makeMessage('user', content)]
      setMessages(history)
      request(history)
    },
    [messages, isLoading, request],
  )

  const retry = useCallback(() => {
    if (!isLoading && messages.at(-1)?.role === 'user') request(messages)
  }, [messages, isLoading, request])

  const stop = useCallback(() => controllerRef.current?.abort(), [])

  const clear = useCallback(() => {
    controllerRef.current?.abort()
    setMessages([])
    setError(null)
  }, [])

  return { messages, isLoading, error, send, retry, stop, clear }
}
