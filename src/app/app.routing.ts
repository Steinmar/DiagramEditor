import { RouterModule, Routes } from '@angular/router';

import { EditorComponent } from './editor/editor.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: '', redirectTo: 'editor', pathMatch: 'full' },
    { path: 'editor', component: EditorComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'about', component: AboutComponent }
];

export const routing = RouterModule.forRoot(routes);
