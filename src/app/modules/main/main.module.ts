import {NgModule} from "@angular/core";
import {NavMenuComponent} from "./components/nav-menu/nav-menu.component";

@NgModule({
  exports: [
    NavMenuComponent
  ],
  declarations: [NavMenuComponent]
})
export class MainModule {
}
