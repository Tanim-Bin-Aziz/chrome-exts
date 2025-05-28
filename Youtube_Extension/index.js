// function for current tab play actions
function playActions(func) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.script.executeScript({
      target: { tabId: tabs.id },
      func: func,
    });
  });
}

// video pause and play button work

document.getElementById("playpause").addEventListener("click", () => {
  playActions(() => {
    const video = document.querySelector("video");
    if (video) video.paused ? video.play() : video.pause();
  });
});

document.getElementById("muteUnmute").addEventListener("click", () => {
  playActions(() => {});
});
