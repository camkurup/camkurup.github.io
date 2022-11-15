import { NgModule } from '@angular/core';
import { TableDataComponent } from './components/table-data/table-data.component'; 
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'TableDataComponent', component:TableDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
  
})
export class AppRoutingModule { }
