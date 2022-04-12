import axios from "./axios";
import { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return response;
    }
    fetchPost();
  }, []);

  console.log(videos);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, messages, shares, likes, song, description }) => (
            <Video
              url={url}
              channel={channel}
              shares={shares}
              likes={likes}
              song={song}
              description={description}
              messages={messages}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
