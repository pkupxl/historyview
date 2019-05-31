import {
  Home,
  Dashboard,
} from 'material-ui-icons';
import { SvgIconProps } from 'material-ui/SvgIcon';
import HomePage from '../pages/HomePage';
import DemoPage from '../pages/DemoPage/DemoPage';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export interface AppRoute {
  path: string;
  sidebarName: string;
  navbarName: string;
  icon: React.ComponentType<SvgIconProps>;
  exact: boolean;
  component: React.ComponentType<RouteComponentProps<{}>> | React.ComponentType<{}>;
}

const appRoutes: AppRoute[] = [
  {
    path: '/',
    sidebarName: 'Intro',
    navbarName: 'Intro',
    icon: Home,
    exact: true,
    component: HomePage
  },
  {
    path: '/demo',
    sidebarName: 'Use It',
    navbarName: 'Use It',
    icon: Dashboard,
    exact: false,
    component: DemoPage
  },
];

export default appRoutes;