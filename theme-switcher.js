// Theme Switcher JavaScript
class ThemeSwitcher {
  constructor() {
    this.themeToggle = document.getElementById('theme-toggle');
    this.html = document.documentElement;
    this.currentTheme = this.getStoredTheme() || this.getSystemTheme();
    
    this.init();
  }

  init() {
    // Set initial theme
    this.setTheme(this.currentTheme);
    
    // Add event listener
    this.themeToggle.addEventListener('click', () => {
      this.toggleTheme();
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!this.getStoredTheme()) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  getStoredTheme() {
    return localStorage.getItem('theme');
  }

  setStoredTheme(theme) {
    localStorage.setItem('theme', theme);
  }

  setTheme(theme) {
    this.currentTheme = theme;
    this.html.setAttribute('data-theme', theme);
    this.themeToggle.setAttribute('data-theme', theme);
    this.setStoredTheme(theme);
    
    // Update aria-label for accessibility
    this.themeToggle.setAttribute('aria-label', 
      theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
    );

    // Add smooth transition class
    this.html.classList.add('theme-transitioning');
    
    // Remove transition class after animation completes
    setTimeout(() => {
      this.html.classList.remove('theme-transitioning');
    }, 300);
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
    
    // Add click animation
    this.themeToggle.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.themeToggle.style.transform = '';
    }, 150);
  }
}

// Initialize theme switcher when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ThemeSwitcher();
});

// Add CSS for smooth theme transitions
const style = document.createElement('style');
style.textContent = `
  .theme-transitioning * {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease !important;
  }
  
  .theme-toggle:active {
    transform: scale(0.95) !important;
  }
`;
document.head.appendChild(style);
