import Dashboard from '../pages/Dashboard/Dashboard';
import Models from '../pages/Models/Models';
import DetailModel from '../pages/DetailModel/DetailModel';

export const publicRoutes = [
  { path: '/', component: Dashboard },
  { path: '/models', component: Models },
  { path: '/models/:id', component: DetailModel },
];
