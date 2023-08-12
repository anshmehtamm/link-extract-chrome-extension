importScripts("scripts/tessaract-min.js")

chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
      text: "ON",
    });
  });

  
chrome.action.onClicked.addListener(process)


  // This function displays the screenshot of the active page in an alert.
async function showScreenshot(tab) {
    
    chrome.tabs.captureVisibleTab(null,sendToTop );
  }

  async function process(tab){
    // Do something in your background script
    console.log("Extension clicked")
    showScreenshot(tab)
  }

  async function sendToTop(screenshotData) {
    let tabs = await chrome.tabs.query({active: true})
    const blob = new Blob([screenshotData], {type: "image/png"});
    const response = await chrome.tabs.sendMessage(tabs[0].id, {image:screenshotData}) 
  }