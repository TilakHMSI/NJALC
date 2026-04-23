import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB028_RRe_Printcard.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-VPRDB028Re_Printcard190812216_VPRDB028_RRe_Printcard',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB028_RRe_Printcard.component.html'
})
export class VPRDB028_RRe_Printcard extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
             this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
         }
          
             private static readonly formName: string = "VPRDB028_RRe_Printcard";
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
                 return VPRDB028_RRe_Printcard.x;
             }
             Y() {
                 return VPRDB028_RRe_Printcard.y;
             }
             Width(): string {
                 return VPRDB028_RRe_Printcard.width;
             }
             Height(): string {
                 return VPRDB028_RRe_Printcard.height;
             }
             IsCenteredToWindow() {
                 return VPRDB028_RRe_Printcard.isCenteredToWindow;
             }
             FormName() {
                 return VPRDB028_RRe_Printcard.formName;
             }
             ShowTitleBar() {
                 return VPRDB028_RRe_Printcard.showTitleBar;
             }
             ShouldCloseOnBackgroundClick() {
                 return VPRDB028_RRe_Printcard.shouldCloseOnBackgroundClick;
             }
             IsResizable() {
                 return VPRDB028_RRe_Printcard.isResizable;
             }
             IsMovable() {
                 return VPRDB028_RRe_Printcard.isMovable;
             }
     }