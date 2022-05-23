import React from 'react'
import { useReactMediaRecorder } from 'react-media-recorder'
import { Button } from 'antd'
 
const RecordView = () => {
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl
  } = useReactMediaRecorder({ video: true })
 
  return (
    <>
      <div>
        {status && status !== "recording" && (
          <Button
            size="small"
            onClick={startRecording}
            type="primary"
            icon="play-circle"
            className="margin-left-sm"
            ghost
          >
            {mediaBlobUrl ? "Record again" : "Record your Problem"}
          </Button>
        )}
        {status && status === "recording" && (
          <Button
            size="small"
            onClick={stopRecording}
            type="danger"
            icon="stop"
            className="margin-left-sm"
            ghost
          >
            Stop Recording
          </Button>
        )}
      </div>
      <div>
        <video src={mediaBlobUrl} controls autoPlay loop width={520} height={480} />
      </div>
    </>
  )
}

export default RecordView
