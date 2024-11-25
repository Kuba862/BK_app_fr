export const theme = {
    dark: {
      mode: 'dark',
      background: {
        primary: '#1a1a1a',
        gradient: `
          radial-gradient(at 40% 20%, rgba(78,205,196,0.1) 0px, transparent 50%),
          radial-gradient(at 80% 0%, rgba(255,107,107,0.1) 0px, transparent 50%),
          radial-gradient(at 0% 50%, rgba(255,206,84,0.1) 0px, transparent 50%)
        `
      },
      text: {
        // primary: 'rgba(255, 255, 255, 0.9)',
        // secondary: 'rgba(255, 255, 255, 0.7)',
        muted: 'rgba(255, 255, 255, 0.5)',
        accent: '#4ecdc4'
      },
      border: 'rgba(255, 255, 255, 0.1)'
    },
    light: {
      mode: 'light',
      background: {
        primary: '#ffffff',
        gradient: `
          radial-gradient(at 40% 20%, rgba(78,205,196,0.05) 0px, transparent 50%),
          radial-gradient(at 80% 0%, rgba(255,107,107,0.05) 0px, transparent 50%),
          radial-gradient(at 0% 50%, rgba(255,206,84,0.05) 0px, transparent 50%)
        `
      },
      text: {
        primary: 'rgba(26, 26, 26, 0.9)',
        secondary: 'rgba(26, 26, 26, 0.7)',
        muted: 'rgba(26, 26, 26, 0.5)',
        accent: '#3da399'
      },
      border: 'rgba(0, 0, 0, 0.1)'
    }
  } as const;
  
  export type ThemeMode = keyof typeof theme;
  export type Theme = typeof theme[ThemeMode];