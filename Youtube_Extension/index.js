// function for current tab play actions
function playActions(func) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
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
  playActions(() => {
    const video = document.querySelector("video");
    if (video) video.muted = !video.muted;
  });
});

// forward backward button function
document.getElementById("rewind").addEventListener("click", () => {
  playActions(() => {
    const video = document.querySelector("video");
    if (video) video.currentTime -= 10;
  });
});

document.getElementById("forward").addEventListener("click", () => {
  playActions(() => {
    const video = document.querySelector("video");
    if (video) video.currentTime += 10;
  });
});
