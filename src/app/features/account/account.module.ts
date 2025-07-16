
import { NgModule } from "@angular/core";
import { AccountRoutingModule } from "./account-routing";
import { HomeComponent } from "./pages/home/home.component";
import { RouterModule } from "@angular/router";

import { ChatComponent } from './components/chat/components/chat/chat.component';
import { ControleComponent } from './components/chat/components/controle/controle.component';
import { HeaderComponent } from './components/chat/components/header/header.component';
import { VideoComponent } from './components/chat/components/video/video.component';
import { Chat } from "./components/chat/chat.component";

@NgModule({
   declarations: [
      HomeComponent,
      ChatComponent,
      ControleComponent,
      HeaderComponent,
      VideoComponent,
      Chat
   ],
   imports: [AccountRoutingModule, RouterModule],
   exports: [
       ChatComponent,
      ControleComponent,
      HeaderComponent,
      VideoComponent,
      Chat
   ],

})

export class AccountModule {}