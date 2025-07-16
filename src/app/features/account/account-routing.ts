import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { Chat} from "./components/chat/chat.component";

const routes:Routes = [
   {path: '', component: HomeComponent, children: [
      {path: '', redirectTo: 'chat', pathMatch: 'full'},
      {path: 'chat', component: Chat}
   ]}
]


@NgModule({
   declarations: [],
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],

})

export class AccountRoutingModule {}