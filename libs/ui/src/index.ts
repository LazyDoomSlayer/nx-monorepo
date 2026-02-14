export * from './lib/ui.js';


// Composable
import { createVuetify } from 'vuetify'
// Styles
import 'vuetify/styles'
import { aliases, md } from 'vuetify/iconsets/md'

export const vuetify = createVuetify({
  icons: {
    defaultSet: 'md',
    aliases,
    sets: {
      md,
    },
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
          black: '#000000',
          white: '#FFFFFF',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
          black: '#000000',
          white: '#FFFFFF',
        },
      },
    },
  },
});
