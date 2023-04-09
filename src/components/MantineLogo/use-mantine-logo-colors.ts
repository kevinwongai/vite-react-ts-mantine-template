import { MantineColor, useMantineTheme } from '@mantine/core';

export type MantineLogoVariant = 'DefineConfig' | 'MatchTheme';

export interface LogoProps extends React.ComponentPropsWithoutRef<'svg'> {
  color?: MantineColor;
  variant?: MantineLogoVariant;
  size?: number | string;
  inverted?: boolean;
}

export function useMantineLogoColors(
  color?: MantineColor,
  variant: MantineLogoVariant = 'DefineConfig',
  inverted: boolean = false
) {
  const theme = useMantineTheme();

  if (variant === 'DefineConfig') {
    return {
      background: inverted ? theme.white : theme.fn.themeColor(color || theme.primaryColor, 5),
      color: inverted ? theme.fn.themeColor(color || theme.primaryColor, 5) : theme.white,
    };
  }

  return {
    background: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.cyan[6],
    color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white,
  };
}
