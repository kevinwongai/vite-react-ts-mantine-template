import { Container, Center, RemoveScroll } from '@mantine/core';
import { openSpotlight } from '@mantine/spotlight';
import { ColorSchemeControl } from '@mantine/ds';
import { HeaderControls } from '@/components/HeaderControl'
import { MantineLogo } from '@/components/MantineLogo'
import { meta } from '@/components/meta'
import { Link } from 'react-router-dom';
import useStyles from './Header.styles';

interface HeaderProps {
  toggleDir(): void;
  dir: 'rtl' | 'ltr';
}

export function Header({ toggleDir, dir }: HeaderProps) {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.header, RemoveScroll.classNames.zeroRight)}>
      <Container size="xl" px="md" className={classes.inner}>
        <Link to="/">
          <Center  sx={(theme) => theme.fn.focusStyles()}>
            <MantineLogo variant="MatchTheme" size={30} />
          </Center>
        </Link>

        <HeaderControls
          sx={(theme) => ({ [theme.fn.smallerThan('sm')]: { display: 'none' } })}
          onSearch={openSpotlight}
          githubLink={meta.gitHubLinks.mantineUi}
          direction={dir}
          toggleDirection={toggleDir}
        />

        <Center sx={(theme) => ({ [theme.fn.largerThan('sm')]: { display: 'none' } })}>
          <ColorSchemeControl />
        </Center>
      </Container>
    </div>
  );
}
