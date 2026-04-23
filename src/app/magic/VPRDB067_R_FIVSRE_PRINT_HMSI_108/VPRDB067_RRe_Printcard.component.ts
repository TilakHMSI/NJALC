import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB067_RRe_Printcard.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-VPRDB067_R_FIVSRE_PRINT_HMSI_108_VPRDB067_RRe_Printcard',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB067_RRe_Printcard.component.html'
})
export class VPRDB067_RRe_Printcard extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
   override createFormControlsAccessor(formGroup: FormGroup) {
           this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
       }
        
           private static readonly formName: string = "VPRDB067_RRe_Printcard";
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
               return VPRDB067_RRe_Printcard.x;
           }
           Y() {
               return VPRDB067_RRe_Printcard.y;
           }
           Width(): string {
               return VPRDB067_RRe_Printcard.width;
           }
           Height(): string {
               return VPRDB067_RRe_Printcard.height;
           }
           IsCenteredToWindow() {
               return VPRDB067_RRe_Printcard.isCenteredToWindow;
           }
           FormName() {
               return VPRDB067_RRe_Printcard.formName;
           }
           ShowTitleBar() {
               return VPRDB067_RRe_Printcard.showTitleBar;
           }
           ShouldCloseOnBackgroundClick() {
               return VPRDB067_RRe_Printcard.shouldCloseOnBackgroundClick;
           }
           IsResizable() {
               return VPRDB067_RRe_Printcard.isResizable;
           }
           IsMovable() {
               return VPRDB067_RRe_Printcard.isMovable;
           }
    
}