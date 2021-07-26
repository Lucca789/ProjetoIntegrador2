import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Folder } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: Folder
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
