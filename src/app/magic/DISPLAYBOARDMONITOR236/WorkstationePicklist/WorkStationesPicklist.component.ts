import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./WorkStationesPicklist.mg.controls.g";
import { MgDisplayedColumns } from "./WorkStationesPicklist.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-DISPLAYBOARDMONITOR236_WorkstationePicklist_WorkStationesPicklist',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './WorkStationesPicklist.component.html'
})
export class WorkStationesPicklist extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "WorkStationesPicklist";
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
        return WorkStationesPicklist.x;
    }
    Y() {
        return WorkStationesPicklist.y;
    }
    Width(): string {
        return WorkStationesPicklist.width;
    }
    Height(): string {
        return WorkStationesPicklist.height;
    }
    IsCenteredToWindow() {
        return WorkStationesPicklist.isCenteredToWindow;
    }
    FormName() {
        return WorkStationesPicklist.formName;
    }
    ShowTitleBar() {
        return WorkStationesPicklist.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return WorkStationesPicklist.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return WorkStationesPicklist.isResizable;
    }
    IsMovable() {
        return WorkStationesPicklist.isMovable;
    }
    override displayedColumns = this.mgdp;
}