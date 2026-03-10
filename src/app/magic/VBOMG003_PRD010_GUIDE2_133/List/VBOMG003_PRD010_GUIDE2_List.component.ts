import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VBOMG003_PRD010_GUIDE2_List.mg.controls.g";
import { MgDisplayedColumns } from "./VBOMG003_PRD010_GUIDE2_List.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VBOMG003_PRD010_GUIDE2_133_List_VBOMG003_PRD010_GUIDE2_List',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './VBOMG003_PRD010_GUIDE2_List.component.html'
})
export class VBOMG003_PRD010_GUIDE2_List extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "VBOMG003_PRD010_GUIDE2_List";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "300px";
    private static readonly height: string = "300px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = true;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = true;
    X() {
        return VBOMG003_PRD010_GUIDE2_List.x;
    }
    Y() {
        return VBOMG003_PRD010_GUIDE2_List.y;
    }
    Width(): string {
        return VBOMG003_PRD010_GUIDE2_List.width;
    }
    Height(): string {
        return VBOMG003_PRD010_GUIDE2_List.height;
    }
    IsCenteredToWindow() {
        return VBOMG003_PRD010_GUIDE2_List.isCenteredToWindow;
    }
    FormName() {
        return VBOMG003_PRD010_GUIDE2_List.formName;
    }
    ShowTitleBar() {
        return VBOMG003_PRD010_GUIDE2_List.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return VBOMG003_PRD010_GUIDE2_List.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return VBOMG003_PRD010_GUIDE2_List.isResizable;
    }
    IsMovable() {
        return VBOMG003_PRD010_GUIDE2_List.isMovable;
    }
    override displayedColumns = this.mgdp;
}