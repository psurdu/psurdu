import { Home } from '../components/Home';
import { Tareas } from '../components/Tareas';
import { Perfil } from '../components/Perfil';

export const MenuItems = [
  {
    id: 1,
    path: '/Home',
    title: 'Home',
    component: Home,
  },
  {
    id: 2,
    path: '/Tareas',
    title: 'Lista de Tareas',
    component: Tareas,
  },
  {
    id: 3,
    path: '/Perfil',
    title: 'Perfil',
    component: Perfil,
  },
];
