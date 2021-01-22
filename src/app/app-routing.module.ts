import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule) },
  { path: 'shop-page', loadChildren: () => import('./pages/shop-page/shop-page.module').then(m => m.ShopPageModule) },
  { path: 'cart-page', loadChildren: () => import('./pages/cart-page/cart-page.module').then(m => m.CartPageModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
