import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { TableComponent } from './components/table/table.component';
import { LoadingComponent } from './components/loading/loading.component';
import {} from '@angular/material';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TableComponent,
    LoadingComponent,
    SnackBarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TableComponent,
    LoadingComponent,
    SnackBarComponent
  ],
  entryComponents: [SnackBarComponent]
})
export class SharedModule { }
