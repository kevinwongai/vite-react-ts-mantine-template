import { useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
  createEmotionCache,
} from '@mantine/core';
import { useLocalStorage, useHotkeys } from '@mantine/hooks';
import rtlPlugin from 'stylis-plugin-rtl';
import { SpotlightAction, SpotlightProvider } from '@mantine/spotlight';
import { useNavigate } from 'react-router-dom';
import RouterComponent from '../routes';
import { useIntl } from 'react-intl'
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { HEADER_HEIGHT } from './Header/Header.styles';

interface LayoutProps {
  noHeader?: boolean;
}

const THEME_KEY = 'mantine-color-scheme';

const rtlCache = createEmotionCache({
  key: 'mantine-rtl',
  prepend: true,
  stylisPlugins: [rtlPlugin],
});

export default function LayoutWrapper({ noHeader = false }: LayoutProps) {
  const navigate = useNavigate()
  const intl = useIntl()
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: THEME_KEY,
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const [dir, setDir] = useState<'rtl' | 'ltr'>('ltr');

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const toggleDir = () => {
    const nextDir = dir === 'ltr' ? 'rtl' : 'ltr';
    setDir(nextDir);
    document.querySelector('html')!.setAttribute('dir', nextDir);
  };

  const footLinks = [
    {
      "title": "About",
      "links": [
        { "label": "Features", "link": "#" },
        { "label": "Pricing", "link": "#" },
        { "label": "Support", "link": "#" },
        { "label": "Forums", "link": "#" }
      ]
    },
    {
      "title": "Project",
      "links": [
        { "label": "Contribute", "link": "#" },
        { "label": "Media assets", "link": "#" },
        { "label": "Changelog", "link": "#" },
        { "label": "Releases", "link": "#" }
      ]
    },
    {
      "title": "Community",
      "links": [
        { "label": "Join Discord", "link": "#" },
        { "label": "Follow on Twitter", "link": "#" },
        { "label": "Email newsletter", "link": "#" },
        { "label": "GitHub discussions", "link": "#" }
      ]
    }
  ]

  useHotkeys([
    ['mod+J', () => toggleColorScheme()],
    ['mod+L', toggleDir],
  ]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{ colorScheme, dir, colors: {
          // override dark colors to change them for all components
          dark: [
            '#f8fafc',
            '#f1f5f9',
            '#94a3b8',
            '#666980',
            '#4d4f66',
            '#34354a',
            '#1E293B',
            '#0f172a',
            '#0f172a',
            '#0f172a',
          ],
        }, }}
        withGlobalStyles
        withNormalizeCSS
        emotionCache={dir === 'rtl' ? rtlCache : undefined}
      >
        <SpotlightProvider
          actions={[]}
          searchIcon={<IconSearch size="1.1rem" />}
          searchPlaceholder="Search components"
          shortcut={['mod + K', 'mod + P', '/']}
          highlightQuery
          zIndex={10000000}
        >
          {!noHeader && <Header toggleDir={toggleDir} dir={dir} />}
          <main style={{ paddingTop: !noHeader ? HEADER_HEIGHT : 0 }}><RouterComponent /></main>
          {!noHeader && <Footer data={footLinks}/>}
        </SpotlightProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
