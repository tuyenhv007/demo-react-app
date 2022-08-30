import {  forwardRef, useImperativeHandle,  useRef } from "react"
import video1 from "./videos/video1.mp4"

function Video(props, ref) {
    const videoRef = useRef()

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
     }))

    return (
        <div>
            <h1>
                Play and Pause A Video
            </h1>
            <video 
                ref={videoRef}
                src={video1}
                width={180}
            >
            </video>
        </div>
    )
}

export default forwardRef(Video)