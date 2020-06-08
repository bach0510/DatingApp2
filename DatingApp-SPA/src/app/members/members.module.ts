import { RouterModule } from '@angular/router';

import { ListsComponent } from './../lists/lists.component';
import { PaginationModule } from 'ngx-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MemberCardComponent } from './member-card/member-card.component';
import { MemberListComponent } from './member-list/member-list.component';

@NgModule({
  imports: [
    CommonModule,
    MembersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PaginationModule,
  ],
  declarations: [
    // MemberListComponent,
    // MemberCardComponent,
    // ListsComponent,
  ]
})
export class MembersModule { }
