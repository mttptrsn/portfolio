
export  const  getThemePreference = () => {
    if (window.matchMedia) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    }
    // Default to light theme if no preference is detected
    return 'light';
  };

