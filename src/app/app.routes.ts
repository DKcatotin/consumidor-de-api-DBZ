import { Route } from '@angular/router';
import { DragonBallComponent } from './dragon-ball/dragon-ball.component';  // Importa el componente

export const appRoutes: Route[] = [
  { path: '', component: DragonBallComponent }  // Ruta por defecto que carga el componente DragonBallComponent
];
