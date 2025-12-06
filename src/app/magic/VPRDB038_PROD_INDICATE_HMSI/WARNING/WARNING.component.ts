import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./WARNING.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VPRDB038_PROD_INDICATE_HMSI_WARNING_WARNING',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './WARNING.component.html',
    styleUrls: ['./WARNNING.component.css']
})
export class WARNING extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "WARNING";
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
        return WARNING.x;
    }
    Y() {
        return WARNING.y;
    }
    Width(): string {
        return WARNING.width;
    }
    Height(): string {
        return WARNING.height;
    }
    IsCenteredToWindow() {
        return WARNING.isCenteredToWindow;
    }
    FormName() {
        return WARNING.formName;
    }
    ShowTitleBar() {
        return WARNING.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return WARNING.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return WARNING.isResizable;
    }
    IsMovable() {
        return WARNING.isMovable;
    }
}