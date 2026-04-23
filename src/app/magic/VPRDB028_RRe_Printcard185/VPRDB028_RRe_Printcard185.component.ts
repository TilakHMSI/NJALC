import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB028_RRe_Printcard185.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-VPRDB028_RRe_Printcard185_VPRDB028_RRe_Printcard185',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB028_RRe_Printcard185.component.html'
})
export class VPRDB028_RRe_Printcard185 extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
            this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
        }
         
            private static readonly formName: string = "VPRDB028_RRe_Printcard185";
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
                return VPRDB028_RRe_Printcard185.x;
            }
            Y() {
                return VPRDB028_RRe_Printcard185.y;
            }
            Width(): string {
                return VPRDB028_RRe_Printcard185.width;
            }
            Height(): string {
                return VPRDB028_RRe_Printcard185.height;
            }
            IsCenteredToWindow() {
                return VPRDB028_RRe_Printcard185.isCenteredToWindow;
            }
            FormName() {
                return VPRDB028_RRe_Printcard185.formName;
            }
            ShowTitleBar() {
                return VPRDB028_RRe_Printcard185.showTitleBar;
            }
            ShouldCloseOnBackgroundClick() {
                return VPRDB028_RRe_Printcard185.shouldCloseOnBackgroundClick;
            }
            IsResizable() {
                return VPRDB028_RRe_Printcard185.isResizable;
            }
            IsMovable() {
                return VPRDB028_RRe_Printcard185.isMovable;
            }
    }