import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VSHPB092RePRINTENGINECARD.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-VSHPB092OEM_ENGRE_PRINTHSC153_VSHPB092RePRINTENGINECARD',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VSHPB092RePRINTENGINECARD.component.html'
})
export class VSHPB092RePRINTENGINECARD extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
 override createFormControlsAccessor(formGroup: FormGroup) {
                     this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
                 }
                  
                     private static readonly formName: string = "VSHPB092RePRINTENGINECARD";
                     private static readonly showTitleBar: boolean = false;
                     private static readonly x: number = 0;
                     private static readonly y: number = 0;
                     private static readonly width: string = "600px";
                     private static readonly height: string = "500px";
                     private static readonly isCenteredToWindow: boolean = true;
                     private static readonly shouldCloseOnBackgroundClick: boolean = false;
                     private static readonly isResizable: boolean = true;
                     private static readonly isMovable: boolean = true;
                     X() {
                         return VSHPB092RePRINTENGINECARD.x;
                     }
                     Y() {
                         return VSHPB092RePRINTENGINECARD.y;
                     }
                     Width(): string {
                         return VSHPB092RePRINTENGINECARD.width;
                     }
                     Height(): string {
                         return VSHPB092RePRINTENGINECARD.height;
                     }
                     IsCenteredToWindow() {
                         return VSHPB092RePRINTENGINECARD.isCenteredToWindow;
                     }
                     FormName() {
                         return VSHPB092RePRINTENGINECARD.formName;
                     }
                     ShowTitleBar() {
                         return VSHPB092RePRINTENGINECARD.showTitleBar;
                     }
                     ShouldCloseOnBackgroundClick() {
                         return VSHPB092RePRINTENGINECARD.shouldCloseOnBackgroundClick;
                     }
                     IsResizable() {
                         return VSHPB092RePRINTENGINECARD.isResizable;
                     }
                     IsMovable() {
                         return VSHPB092RePRINTENGINECARD.isMovable;
                     }
}