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
          DEFAULT: '#065F46', // Al-Fuad Emerald Brand (7.68:1 white text AAA)
          dark: '#064E3B',    // Deep Forest / Hero, Visi-Misi & FAQ Open (9.72:1)
          medium: '#047857',  // Emerald Medium / WhatsApp FAB (5.48:1 white text)
          light: '#10B981',   // Emerald Glow
          surface: '#ECFDF5', // Soft Mint Surface
        },
        accent: {
          DEFAULT: '#0F766E', // Islamic Jade Teal (5.47:1 white, 5.16:1 alabaster)
          bright: '#0D9488',  // Bright Jade (progress highlights)
          surface: '#E6F7F4', // Soft Jade Tint
        },
        gold: {
          DEFAULT: '#F59E0B', // Luminous Gold CTA / Pill (8.31:1 dark text AAA)
          hover: '#D97706',   // Rich Gold Hover (5.60:1 dark text AA)
          medium: '#F59E0B',  // Alias Luminous Gold
          text: '#B45309',    // High-contrast Gold Text on light (4.74:1–5.02:1 AA)
          light: '#FEF3C7',   // Soft Gold Tint
        },
        surface: {
          DEFAULT: '#FAF8F5',   // Warm Alabaster
          alabaster: '#FAF8F5', // Primary Page Alternation
          sage: '#F2F6F4',      // Soft Sage Mist (replaces cool #F4F7F6)
          sand: '#EFECE6',      // Warm Sand (replaces cool #EAECEF FAQ closed)
          cream: '#F3EFEA',
          white: '#FFFFFF',
        },
        line: {
          subtle: '#E6E2DA', // Unified Warm Hairline Border
          muted: '#D6D1C7',  // Inactive Dot / Muted Border
        },
        status: {
          successBg: '#E6F7F4',
          successText: '#0F766E',
          warningBg: '#FEF3C7',
          warningText: '#92400E',
        },
        ink: {
          heading: '#0F172A',    // Deep Charcoal
          subheading: '#334155', // Slate Subheading
          body: '#475569',       // Readable Slate Body
          caption: '#64748B',    // Muted Caption
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
