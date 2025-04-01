import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appRoutes } from '../src/app/app.routes';
import { DragonBallComponent } from '../src/app/dragon-ball/dragon-ball.component';

bootstrapApplication(DragonBallComponent, {
  providers: [
    provideRouter(appRoutes)
  ]
});
