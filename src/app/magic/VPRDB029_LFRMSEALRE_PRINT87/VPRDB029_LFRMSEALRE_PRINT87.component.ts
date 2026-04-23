import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB029_LFRMSEALRE_PRINT87.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-VPRDB029_LFRMSEALRE_PRINT87_VPRDB029_LFRMSEALRE_PRINT87',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB029_LFRMSEALRE_PRINT87.component.html'
})
export class VPRDB029_LFRMSEALRE_PRINT87 extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
 override createFormControlsAccessor(formGroup: FormGroup) {
                 this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
             }
              
                 private static readonly formName: string = "VPRDB029_LFRMSEALRE_PRINT87";
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
                     return VPRDB029_LFRMSEALRE_PRINT87.x;
                 }
                 Y() {
                     return VPRDB029_LFRMSEALRE_PRINT87.y;
                 }
                 Width(): string {
                     return VPRDB029_LFRMSEALRE_PRINT87.width;
                 }
                 Height(): string {
                     return VPRDB029_LFRMSEALRE_PRINT87.height;
                 }
                 IsCenteredToWindow() {
                     return VPRDB029_LFRMSEALRE_PRINT87.isCenteredToWindow;
                 }
                 FormName() {
                     return VPRDB029_LFRMSEALRE_PRINT87.formName;
                 }
                 ShowTitleBar() {
                     return VPRDB029_LFRMSEALRE_PRINT87.showTitleBar;
                 }
                 ShouldCloseOnBackgroundClick() {
                     return VPRDB029_LFRMSEALRE_PRINT87.shouldCloseOnBackgroundClick;
                 }
                 IsResizable() {
                     return VPRDB029_LFRMSEALRE_PRINT87.isResizable;
                 }
                 IsMovable() {
                     return VPRDB029_LFRMSEALRE_PRINT87.isMovable;
                 }
          
   }