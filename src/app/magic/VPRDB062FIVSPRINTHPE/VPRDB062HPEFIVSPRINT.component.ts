import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB062HPEFIVSPRINT.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB062FIVSPRINTHPE_VPRDB062HPEFIVSPRINT',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB062HPEFIVSPRINT.component.html',
    styleUrl: './VPRDB062.component.css'
})
export class VPRDB062HPEFIVSPRINT extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VPRDB062 HPEFIVS PRINT";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "600px";
    private static readonly height: string = "500px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return VPRDB062HPEFIVSPRINT.x;
    }
    Y() {
        return VPRDB062HPEFIVSPRINT.y;
    }
    Width(): string {
        return VPRDB062HPEFIVSPRINT.width;
    }
    Height(): string {
        return VPRDB062HPEFIVSPRINT.height;
    }
    IsCenteredToWindow() {
        return VPRDB062HPEFIVSPRINT.isCenteredToWindow;
    }
    FormName() {
        return VPRDB062HPEFIVSPRINT.formName;
    }
    ShowTitleBar() {
        return VPRDB062HPEFIVSPRINT.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VPRDB062HPEFIVSPRINT.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VPRDB062HPEFIVSPRINT.isResizable;
    }
    IsMovable() {
        return VPRDB062HPEFIVSPRINT.isMovable;
    }
}