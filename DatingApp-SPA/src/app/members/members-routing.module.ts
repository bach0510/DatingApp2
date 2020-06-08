import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsComponent } from '../lists/lists.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberListResolver } from '../_resolvers/member-list.resolver';
import { ListsResolver } from '../_resolvers/lists.resolver';

const routes: Routes = [
      {
        path: 'matches',
        component: MemberListComponent,
        resolve: {users: MemberListResolver}
      },
      {
        path: 'lists',
        component: ListsComponent,
        resolve: {users: ListsResolver},
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
