import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./MODELTABLEMAINTENANCE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO012_MODEL_TABLE_MAINTE_MODELTABLEMAINTENANCE',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './MODELTABLEMAINTENANCE.component.html',
    styleUrl: './MODELTABLEMAINTENANCE.component.css',
})
export class MODELTABLEMAINTENANCE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "MODEL TABLE MAINTENANCE";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1250px";
    private static readonly height: string = "720px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return MODELTABLEMAINTENANCE.x;
    }
    Y() {
        return MODELTABLEMAINTENANCE.y;
    }
    Width(): string {
        return MODELTABLEMAINTENANCE.width;
    }
    Height(): string {
        return MODELTABLEMAINTENANCE.height;
    }
    IsCenteredToWindow() {
        return MODELTABLEMAINTENANCE.isCenteredToWindow;
    }
    FormName() {
        return MODELTABLEMAINTENANCE.formName;
    }
    ShowTitleBar() {
        return MODELTABLEMAINTENANCE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return MODELTABLEMAINTENANCE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return MODELTABLEMAINTENANCE.isResizable;
    }
    IsMovable() {
        return MODELTABLEMAINTENANCE.isMovable;
    }
}