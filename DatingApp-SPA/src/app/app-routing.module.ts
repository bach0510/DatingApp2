
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { MessagesComponent } from './messages/messages.component';
import { MessagesResolver } from './_resolvers/messages.resolver';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { ListsComponent } from './lists/lists.component';
import { ListsResolver } from './_resolvers/lists.resolver';


const routes: Routes = [
  { path: '', component: HomeComponent},
    {
        path: '',
        // runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
            { path: 'member/edit', component: MemberEditComponent, resolve: {user: MemberEditResolver},
                canDeactivate: [PreventUnsavedChanges] },
            { path: 'messages', component: MessagesComponent, resolve: {messages: MessagesResolver}},
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
        ]
    },
    // {
    //   path: '',
    //   loadChildren: './members/members.module#MembersModule'
    // },
    {path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
