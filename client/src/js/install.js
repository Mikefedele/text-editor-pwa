const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
const CACHE_VERSION = 1;
const CURRENT_CACHE = {
prefetch: 'jate' + CACHE_VERSION
};


  // event.preventDefault();
  // butInstall.style.visibility = 'visible';
  // butInstall.textContent = 'Install Me!'

// // Store the triggered events
// window.deferredPrompt = event;

// // Remove the hidden class from the button.
// butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    
  
  // event.prompt();
    // butInstall.setAttribute('disabled', true);
    // butInstall.textContent = 'Installed!'
    const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
   return;
  }
  // Show prompt
  promptEvent.prompt();  
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;  
  butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});;
