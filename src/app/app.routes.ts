import { Routes } from '@angular/router';
import { ContactComponent } from './shared/contact.component';
import { AdminComponent } from './shared/admin.component';
import { ErrorComponent } from './shared/error.component';
import { HomeComponent } from './shared/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'products', loadChildren: () => import('./products/products.routes').then(r => r.productsRoutes)},
    { path: '**', component: ErrorComponent },
];