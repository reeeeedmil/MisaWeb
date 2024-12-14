import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        'gunmetal': '#1E3231',
        'paynes-gray': '#485665',
        'pink-mountbatten': '#8E7C93',
        'pink-lavender': '#D0A5C0',
        'pink-orchid': '#F6C0D0',
      }
    }
  },

  plugins: []
} satisfies Config;
