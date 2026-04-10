import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./NewProductionMenu.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VHMSOMNU7604_NewProductionMENU_NewProductionMenu',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './NewProductionMenu.component.html'
})
export class NewProductionMenu extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "NewProductionMenu";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "300px";
    private static readonly height: string = "300px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return NewProductionMenu.x;
    }
    Y() {
        return NewProductionMenu.y;
    }
    Width(): string {
        return NewProductionMenu.width;
    }
    Height(): string {
        return NewProductionMenu.height;
    }
    IsCenteredToWindow() {
        return NewProductionMenu.isCenteredToWindow;
    }
    FormName() {
        return NewProductionMenu.formName;
    }
    ShowTitleBar() {
        return NewProductionMenu.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return NewProductionMenu.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return NewProductionMenu.isResizable;
    }
    IsMovable() {
        return NewProductionMenu.isMovable;
    }
}