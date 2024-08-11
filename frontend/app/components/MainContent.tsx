export default function MainContent() {
  return (
    <div className="bg-twitchGray-500 h-full flex flex-col">
      <iframe
        src="https://player.twitch.tv/?channel=hoothouselivestream&parent=localhost"
        height="600"
        width="1000"
        allowFullScreen
      />
      <p className="m-auto">
        Content
      </p>
    </div>
  )
}