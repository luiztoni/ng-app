import { Routes } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { inject } from '@angular/core';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: 'profile/:id', component: ProfilePageComponent, canActivate: [() => inject(AuthGuard).canActivate()] },
    { path: 'home', component: HomePageComponent},
];
