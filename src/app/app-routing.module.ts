import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./layout/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./authentication/authentication.module").then(
        (a) => a.AuthenticationModule
      ),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./layout/layout.module").then((l) => l.LayoutModule),
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
