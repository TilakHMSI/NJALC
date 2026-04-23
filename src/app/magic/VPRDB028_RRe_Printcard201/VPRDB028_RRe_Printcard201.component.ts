import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB028_RRe_Printcard201.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-VPRDB028_RRe_Printcard201_VPRDB028_RRe_Printcard201',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB028_RRe_Printcard201.component.html'
})
export class VPRDB028_RRe_Printcard201 extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
 override createFormControlsAccessor(formGroup: FormGroup) {
         this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
     }
      
         private static readonly formName: string = "VPRDB028_RRe_Printcard201";
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
             return VPRDB028_RRe_Printcard201.x;
         }
         Y() {
             return VPRDB028_RRe_Printcard201.y;
         }
         Width(): string {
             return VPRDB028_RRe_Printcard201.width;
         }
         Height(): string {
             return VPRDB028_RRe_Printcard201.height;
         }
         IsCenteredToWindow() {
             return VPRDB028_RRe_Printcard201.isCenteredToWindow;
         }
         FormName() {
             return VPRDB028_RRe_Printcard201.formName;
         }
         ShowTitleBar() {
             return VPRDB028_RRe_Printcard201.showTitleBar;
         }
         ShouldCloseOnBackgroundClick() {
             return VPRDB028_RRe_Printcard201.shouldCloseOnBackgroundClick;
         }
         IsResizable() {
             return VPRDB028_RRe_Printcard201.isResizable;
         }
         IsMovable() {
             return VPRDB028_RRe_Printcard201.isMovable;
         }
 }