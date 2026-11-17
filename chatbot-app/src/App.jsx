import './App.css'
import MessageList from './components/MessageList'
import PromptInput from './components/PromptInput'
import { useChat } from './hooks/useChat'

function App() {
  const { messages, isLoading, error, send, retry, stop, clear } = useChat()

  return (
    <div className="app">
      <button className="new-chat" onClick={clear} disabled={messages.length === 0}>
        New chat
      </button>

      <MessageList
        messages={messages}
        isLoading={isLoading}
        error={error}
        onRetry={retry}
        onSuggest={send}
      />

      <PromptInput onSubmit={send} onStop={stop} isLoading={isLoading} />
    </div>
  )
}

export default App
