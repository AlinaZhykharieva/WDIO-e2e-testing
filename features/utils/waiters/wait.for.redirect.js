export default function waitForRedirect(partOfWaitingUrl) {
   browser.waitUntil(() => browser.getUrl().then((pageUrl) => pageUrl.indexOf(partOfWaitingUrl) > -1), 5000);
}
