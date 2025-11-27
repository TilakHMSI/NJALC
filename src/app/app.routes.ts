import { Routes, RouterModule } from '@angular/router';
import { RouterContainerMagicComponent } from "@magic-xpa/angular";
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
export const routes: Routes = [

    {
        path: 'Login',
        component: RouterContainerMagicComponent,

    },
    {
        path: 'Home',
        component: RouterContainerMagicComponent,


        children: [{
            path: 'VMNUO001',
            component: RouterContainerMagicComponent,

        }, ]
    },

];

@NgModule({
    imports: [CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class MagicRoutingModule {}