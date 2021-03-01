import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // this is needed!
import { LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { ExamplesModule } from "./examples/examples.module";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { registerLocaleData } from "@angular/common";
import localeGr from "@angular/common/locales/fr";
registerLocaleData(localeGr, "gr");

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    ExamplesModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "gr", //
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
