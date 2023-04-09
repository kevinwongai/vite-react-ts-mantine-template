import { FC } from 'react';

export type IRoute = {
  // Path
  pathname: string;
  // Name
  name: string;
  // Description, can be used for sidebar list
  title: string;
  // React component function
  component: FC;
  // Hook executed when page component is created
  beforeCreate: (route: IRoute) => void;
  // Hook executed when page component is destroyed
  beforeDestroy: (route: IRoute) => void;
  // Properties
  meta: {
    navigation: string;
    requireAuth: boolean;
  };
}
