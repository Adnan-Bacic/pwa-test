//npx pwa-asset-generator logo.png icons

window.addEventListener('load', async () => {
  try {
    await navigator.serviceWorker.register('./service-worker.js');
  } catch (e) {
    console.log(`SW registration failed: ${e}`);
  }
})
