import { AppRoute } from '@core/common/routes';

import Pwell from '../components/Pwell';
import { getUser } from './effects';
import { CommonPageContainer } from './page';

export const commonRoutes: AppRoute[] = [
  {
    path: '/',
    exact: true,
    component: CommonPageContainer,
    preloadActions: () => getUser('weyheyhey')
  },
  {
    path: '/pwell',
    component: Pwell
  }
];
