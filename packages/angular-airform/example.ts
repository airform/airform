import 'core-js/es7/reflect'
import 'zone.js/dist/zone'
import { Component, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AirformComponent } from './'

@Component({
  selector: 'root',
  template: `
    <airform email="cjpatoilo@email.com">
      <input type="text" name="name" />
      <textarea name="message"></textarea>
      <button>Send</button>
    </airform>
  `,
})
class AppComponent {}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, AirformComponent],
  imports: [BrowserModule],
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
