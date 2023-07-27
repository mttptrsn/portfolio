// utils/darkModeUtils.js
export function isDarkModeSupported() {
    if (typeof window === 'undefined' || !window.matchMedia) {
      // If window or window.matchMedia is not available (e.g., during server-side rendering)
      return false;
    }
  
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    return darkModeQuery.matches;
  }
  