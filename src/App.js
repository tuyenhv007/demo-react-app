
import { useRef } from "react"
import Video from "./Video"

function App() {
  const videoRef = useRef()

  const handlePlayVideo = () => {
    videoRef.current.play()
  }

  const handlePauseVideo = () => {
    videoRef.current.pause()
  }

  return (
    <div style={{padding: 50}}>
      <Video 
        ref={videoRef}
      />
      <button onClick={handlePlayVideo}>Play video</button>
      <button onClick={handlePauseVideo}>Pause video</button>
    </div>
  )
}

export default App