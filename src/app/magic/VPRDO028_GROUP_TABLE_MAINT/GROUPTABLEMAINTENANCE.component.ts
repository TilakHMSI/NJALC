import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./GROUPTABLEMAINTENANCE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDO028_GROUP_TABLE_MAINT_GROUPTABLEMAINTENANCE',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './GROUPTABLEMAINTENANCE.component.html'
})
export class GROUPTABLEMAINTENANCE extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "GROUPTABLEMAINTENANCE";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1100px";
    private static readonly height: string = "650px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return GROUPTABLEMAINTENANCE.x;
    }
    Y() {
        return GROUPTABLEMAINTENANCE.y;
    }
    Width(): string {
        return GROUPTABLEMAINTENANCE.width;
    }
    Height(): string {
        return GROUPTABLEMAINTENANCE.height;
    }
    IsCenteredToWindow() {
        return GROUPTABLEMAINTENANCE.isCenteredToWindow;
    }
    FormName() {
        return GROUPTABLEMAINTENANCE.formName;
    }
    ShowTitleBar() {
        return GROUPTABLEMAINTENANCE.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return GROUPTABLEMAINTENANCE.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return GROUPTABLEMAINTENANCE.isResizable;
    }
    IsMovable() {
        return GROUPTABLEMAINTENANCE.isMovable;
    }
}