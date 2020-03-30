import {NgModule} from "@angular/core";
import {NavMenuComponent} from "./components/nav-menu/nav-menu.component";
import {RouterModule} from "@angular/router";

@NgModule({
  exports: [
    NavMenuComponent
  ],
  imports: [
    RouterModule
  ],
  declarations: [NavMenuComponent]
})
export class MainModule {
}
