chrome.browserAction.onClicked.addListener(function(activeTab) {
    var newURL = "http://stackoverflow.com/";
    chrome.tabs.update({
        url: newURL
    });
});