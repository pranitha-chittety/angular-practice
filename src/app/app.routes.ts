import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadChildren: () => import('./Registration/registration.module').then(m => m.RegistrationModule)
    }
];
