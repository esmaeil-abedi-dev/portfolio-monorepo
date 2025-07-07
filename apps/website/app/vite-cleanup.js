// This script prevents any Vite initialization from happening
// if it was cached by the browser
if (window.__vite_plugin_react_preamble_installed__) {
  window.__vite_plugin_react_preamble_installed__ = false;
}

// Clear any potential Vite-related localStorage items
Object.keys(localStorage).forEach(key => {
  if (key.includes('vite') || key.includes('react-refresh')) {
    localStorage.removeItem(key);
  }
});
