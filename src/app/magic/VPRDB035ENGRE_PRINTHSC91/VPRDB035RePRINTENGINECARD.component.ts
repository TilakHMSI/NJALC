import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB035RePRINTENGINECARD.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-VPRDB035ENGRE_PRINTHSC91_VPRDB035RePRINTENGINECARD',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB035RePRINTENGINECARD.component.html'
})
export class VPRDB035RePRINTENGINECARD extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
  override createFormControlsAccessor(formGroup: FormGroup) {
                this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
            }
             
                private static readonly formName: string = "VPRDB035RePRINTENGINECARD";
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
                    return VPRDB035RePRINTENGINECARD.x;
                }
                Y() {
                    return VPRDB035RePRINTENGINECARD.y;
                }
                Width(): string {
                    return VPRDB035RePRINTENGINECARD.width;
                }
                Height(): string {
                    return VPRDB035RePRINTENGINECARD.height;
                }
                IsCenteredToWindow() {
                    return VPRDB035RePRINTENGINECARD.isCenteredToWindow;
                }
                FormName() {
                    return VPRDB035RePRINTENGINECARD.formName;
                }
                ShowTitleBar() {
                    return VPRDB035RePRINTENGINECARD.showTitleBar;
                }
                ShouldCloseOnBackgroundClick() {
                    return VPRDB035RePRINTENGINECARD.shouldCloseOnBackgroundClick;
                }
                IsResizable() {
                    return VPRDB035RePRINTENGINECARD.isResizable;
                }
                IsMovable() {
                    return VPRDB035RePRINTENGINECARD.isMovable;
                }
         
  }