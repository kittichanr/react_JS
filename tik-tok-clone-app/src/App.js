import "./App.css"
import React, { useEffect, useState } from "react"
import Video from "./component/Video"
import db from "./api/firebase"

function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) => {
      console.log(snapshot);
      setVideos(snapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ channel, description, song, likes, shares, messages, url }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              shares={shares}
              messages={messages}
            />
          )
        )}
      </div>
    </div>
  )
}

export default App
