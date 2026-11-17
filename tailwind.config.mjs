/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#065F46', // Al-Fuad Emerald Brand
          dark: '#064E3B',    // Deep Forest / Emerald Islamic Primary Dark
          medium: '#047857',  // Emerald Islamic Primary Medium
          light: '#10B981',   // Emerald Islamic Primary Light
          surface: '#ECFDF5', // Soft Mint Surface
        },
        gold: {
          DEFAULT: '#D97706', // Warm Gold Accent / Amber CTA
          medium: '#F59E0B',  // Warm Gold Medium
          light: '#FEF3C7',   // Soft Gold Tint
        },
        surface: {
          DEFAULT: '#FAF8F5', // Warm Alabaster
          alabaster: '#FAF8F5',
          cream: '#F3EFEA',
          ivory: '#F8FAFC',
          white: '#FFFFFF',
        },
        ink: {
          heading: '#0F172A',    // Charcoal Slate
          subheading: '#334155', // Dark Slate
          body: '#475569',       // Muted Slate
          caption: '#64748B',    // Subtle Slate
        },
      },
      maxWidth: {
        container: '1280px',
      },
      gridTemplateColumns: {
        12: 'repeat(12, minmax(0, 1fr))',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        arabic: ['"Amiri"', 'serif'],
      },
    },
  },
  plugins: [],
};
