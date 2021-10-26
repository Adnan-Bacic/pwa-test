//https://www.youtube.com/watch?v=E8BeSSdIUW4

window.addEventListener('load', async () => {
  try {
    await navigator.serviceWorker.register('./service-worker.js');
  } catch (e) {
    console.log(`SW registration failed: ${e}`);
  }
})
