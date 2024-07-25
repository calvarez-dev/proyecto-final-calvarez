import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaftaComponent } from './pages/cafta/cafta.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { OrganizacionComponent } from './pages/organizacion/organizacion.component';

const routes: Routes = [
  {path: 'cafta', component: CaftaComponent},
  {path: "contacto",component:ContactoComponent},
  {path: "organizacion",component:OrganizacionComponent},

  {
    path: '**',
    redirectTo: '/cafta',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
