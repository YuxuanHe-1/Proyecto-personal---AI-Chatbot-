import { useLayoutEffect, useRef, useState } from 'react'

const MAX_HEIGHT = 164

export default function PromptInput({ onSubmit, onStop, isLoading }) {
  const [value, setValue] = useState('')
  const textareaRef = useRef(null)
  const canSend = value.trim().length > 0

  useLayoutEffect(() => {
    const el = textareaRef.current
    el.style.height = 'auto'
    const borders = el.offsetHeight - el.clientHeight
    el.style.height = `${Math.min(el.scrollHeight + borders, MAX_HEIGHT)}px`
  }, [value])

  const submit = () => {
    if (!canSend || isLoading) return
    onSubmit(value)
    setValue('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault()
      submit()
    }
  }

  return (
    <div className="prompt-container">
      <textarea
        ref={textareaRef}
        className="prompt"
        placeholder="Ask anything"
        aria-label="Message"
        rows={1}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {isLoading ? (
        <button className="submit-prompt" onClick={onStop} aria-label="Stop generating">
          ■
        </button>
      ) : (
        <button className="submit-prompt" onClick={submit} disabled={!canSend} aria-label="Send message">
          ↑
        </button>
      )}
    </div>
  )
}
