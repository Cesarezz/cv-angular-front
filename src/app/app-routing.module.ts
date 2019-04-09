import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnowledgeTypeComponent } from './knowledge-type/knowledge-type.component'

const routes: Routes = [ 
    { 	
      path: 'home',  
      component: KnowledgeTypeComponent
    },
    { 	
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
