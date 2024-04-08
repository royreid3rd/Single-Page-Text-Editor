import { getDb, putDb } from './database';
import { header } from './header';
import { Workbox } from 'workbox-window';


const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('Install prompt fired');
// Prevent Chrome 76 and later versions from showing the mini-infobar
event.preventDefault();
// Stash the event so it can be triggered later
window.deferredPrompt = event;
// Update UI to notify the user to install the app
butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const deferredPrompt = window.deferredPrompt;
    if (!deferredPrompt) {
      return;
    }
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const choiceResult = await deferredPrompt.userChoice;
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
    // Reset the deferredPrompt variable as the prompt can only be used once
    window.deferredPrompt = null;
  });
 
// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App installed successfully');
  });
