export default function Message({ role, content }) {
  return (
    <div className={role}>
      <p>{content}</p>
    </div>
  )
}