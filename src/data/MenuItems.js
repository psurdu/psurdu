import Home from '../components/Home';
import { Tareas } from '../components/Tareas';
import { TablaJuegos } from '../components/TablaJuegos';
import Perfil from '../components/Perfil';
import PelisGhibli from '../components/PelisGhibli';

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
    path: '/TablaJuegos',
    title: 'Tabla de juegos',
    component: TablaJuegos,
  },
  {
    id: 4,
    path: '/Perfil',
    title: 'Perfil',
    component: Perfil,
  },
  {
    id: 5,
    path: '/PelisGhibli',
    title: 'Pelis Ghibli',
    component: PelisGhibli,
  },
];
