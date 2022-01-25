import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page404Component} from "./page404/page404.component";

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule),
        data: {preload: true},
    },
    {
        path: 'about',
        loadChildren: () => import(`./about/about.module`).then(m => m.AboutModule),
        data: {preload: true},
    },
    {
        path: 'contact',
        loadChildren: () => import(`./contact/contact.module`).then(m => m.ContactModule),
        data: {preload: true},
    },
    {
        path: 'auth',
        loadChildren: () => import(`./auth/auth.module`).then(m => m.AuthModule),
        data: {
            title: 'Authentication', breadcrumb: 'Authentication',
        },
    },
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: Page404Component}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
