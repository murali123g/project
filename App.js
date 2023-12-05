import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const App = () => {
  const commands=[
    {
      command:'Reset *',
      callback:({resetTranscript}) => resetTranscript()
    },
    {
      command:'open *',
      callback:(site) => {
        window.open('http://'+site)
      }
      },
      {
        command:'Change backgroud colour to *',
        callback:(color) => {
          document.body.style.background=color;
        }
      
    }
  ]
  const { transcript, resetTranscript } = useSpeechRecognition({commands})

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  return (
    <div>
      
      <button  onClick={SpeechRecognition.startListening({continuous:true,language:'en-IN'})}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  )
}
export default App