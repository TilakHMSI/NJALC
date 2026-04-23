import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ListoutModelCode.mg.controls.g";
import { MgDisplayedColumns } from "./ListoutModelCode.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VEHICLEAEOFFNEWREADY215_RoutetoProcess_ListoutModelCode_ListoutModelCode',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './ListoutModelCode.component.html'
})
export class ListoutModelCode extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "ListoutModelCode";
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
        return ListoutModelCode.x;
    }
    Y() {
        return ListoutModelCode.y;
    }
    Width(): string {
        return ListoutModelCode.width;
    }
    Height(): string {
        return ListoutModelCode.height;
    }
    IsCenteredToWindow() {
        return ListoutModelCode.isCenteredToWindow;
    }
    FormName() {
        return ListoutModelCode.formName;
    }
    ShowTitleBar() {
        return ListoutModelCode.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return ListoutModelCode.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return ListoutModelCode.isResizable;
    }
    IsMovable() {
        return ListoutModelCode.isMovable;
    }
    override displayedColumns = this.mgdp;
}