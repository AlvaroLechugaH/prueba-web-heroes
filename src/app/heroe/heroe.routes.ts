import { Routes } from "@angular/router";
import { HeroeCreateComponent } from "./heroe-create/heroe-create.component";
import { HeroeListComponent } from "./heroe-list/heroe-list.component";
import { HeroeModifyComponent } from "./heroe-modify/heroe-modify.component";

export const HEROE_ROUTES: Routes = [
    { path: '', component: HeroeListComponent },
    { path: 'create', component: HeroeCreateComponent },
    { path: 'modify/:id', component: HeroeModifyComponent }
]