import { useEffect, useRef } from 'react'
import Message from './Message'

const SUGGESTIONS = [
  'Explain recursion like I’m 12',
  'What ',
  'Quiz me on the French Revolution',
]

export default function MessageList({ messages, isLoading, error, onRetry, onSuggest }) {
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, isLoading, error])

  if (messages.length === 0) {
    return (
      <div className="empty">
        <h2 className="empty-title">What are you working on?</h2>
        <div className="suggestions">
          {SUGGESTIONS.map((text) => (
            <button key={text} className="suggestion" onClick={() => onSuggest(text)}>
              {text}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="messages" role="log" aria-live="polite">
      {messages.map((m) => (
        <Message key={m.id} role={m.role} content={m.content} />
      ))}

      {isLoading && (
        <div className="typing" aria-label="Assistant is typing">
          <span /><span /><span />
        </div>
      )}

      {error && (
        <div className="error" role="alert">
          <span>{error}</span>
          <button onClick={onRetry}>Try again</button>
        </div>
      )}

      <div ref={endRef} className="scroll-anchor" />
    </div>
  )
}
