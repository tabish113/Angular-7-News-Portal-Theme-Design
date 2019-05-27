import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { SportComponent } from './sport/sport.component';
import { LifeComponent } from './life/life.component';
import { TechnologyComponent } from './technology/technology.component';
import { ContactComponent } from './contact/contact.component';
import { ViewComponent } from './view/view.component';



const routes: Routes = [
  {
      path:'home',
      component:HomeComponent
    },
    {
        path:'video',
        component:VideoComponent
      },
      {
          path:'sport',
          component:SportComponent
        },
        {
            path:'life',
            component:LifeComponent
          },
          {
              path:'technology',
              component:TechnologyComponent
            },
            {
                path:'contact',
                component:ContactComponent
              },
              {
                  path:'view',
                  component:ViewComponent
                }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
