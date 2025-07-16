import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { SuccessPayementComponent } from "./components/success-payement-component/success-payement.component";



const routes: Routes = [

   {path:'',component: HomeComponent },
   {path:'success-payement',component: SuccessPayementComponent }

];
@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class GuestRoutingModule {}