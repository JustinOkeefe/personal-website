import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './blog/data/data.service';
import { BlogComponent } from './blog/blog/blog.component'
import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples/examples.component';
import { MaterialModule } from './../../app/material.module'
import { FlexLayoutModule } from '@angular/flex-layout';
import { PostDialogComponent } from './blog/post-dialog/post-dialog.component';
import { FormsModule } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { D3Component } from './d3/d3.component';
import { HttpModule } from '@angular/http'
import { D3Service } from './d3/d3/d3.service.service';
import { D3_DIRECTIVES } from './d3/d3/directives'
import { GraphComponent } from './d3/d3/visuals/graph/graph.component'
import { SHARED_VISUALS } from './d3/d3/visuals/shared'
import { Title } from '@angular/platform-browser'
@NgModule({
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule

  ],
  declarations: [
    ExamplesComponent,
    BlogComponent,
    PostDialogComponent,
    D3Component,
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES

  ],
  providers: [DataService, D3Service, Title],

  entryComponents: [
    PostDialogComponent
  ],
})
export class ExamplesModule {
  constructor() { }
}
