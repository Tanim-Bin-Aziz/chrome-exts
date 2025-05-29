/* eslint-disable no-undef */
import { useCallback } from "react";
import "./App.css";

function App() {
  const playActions = useCallback((func) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: func,
        });
      }
    });
  }, []);

  const handlePlayPause = () => {
    playActions(() => {
      const video = document.querySelector("video");
      if (video) video.paused ? video.play() : video.pause();
    });
  };

  const handleMuteUnmute = () => {
    playActions(() => {
      const video = document.querySelector("video");
      if (video) video.muted = !video.muted;
    });
  };

  const handleRewind = () => {
    playActions(() => {
      const video = document.querySelector("video");
      if (video) video.currentTime -= 10;
    });
  };

  const handleForward = () => {
    playActions(() => {
      const video = document.querySelector("video");
      if (video) video.currentTime += 10;
    });
  };
  return (
    <>
      <div className="text-center p-10">
        <h1 className="text-2xl font-bold mb-5">Youtube Controller</h1>
        <div>
          <button
            className="btn btn-soft btn-secondary m-2"
            onClick={handlePlayPause}
          >
            Play / Pause
          </button>
          <button
            className="btn btn-soft btn-secondary m-2"
            onClick={handleMuteUnmute}
          >
            Mute / Unmute
          </button>
          <button
            className="btn btn-soft btn-secondary m-2"
            onClick={handleRewind}
          >
            Rewind 10s
          </button>
          <button
            className="btn btn-soft btn-secondary m-2"
            onClick={handleForward}
          >
            Forward 10s
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
