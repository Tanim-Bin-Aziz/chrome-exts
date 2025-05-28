// function to take a screenshot of the current page
function takeScreenShot() {
  chrome.tabs.captureVisibleTab({ format: "png" }, function (screenshotUrl) {
    const link = document.createElement("a");
    link.href = screenshotUrl;
    link.download = "screenshot.png";
    link.click();
  });
}
// attach the event listener to the button
document.addEventListener("DOMContentLoaded", function () {
  const screenshotBtn = document.getElementById("ssbtn");

  if (screenshotBtn) {
    screenshotBtn.addEventListener("click", takeScreenShot);
  } else {
    console.error("button not founded.");
  }
});
