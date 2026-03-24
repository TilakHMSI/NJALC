import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PICKLISTCATEGORY.mg.controls.g";
import { MgDisplayedColumns } from "./PICKLISTCATEGORY.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-VQMS006_DefectMaster_DETAIL_PICKLISTCATEGORY_PICKLISTCATEGORY',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './PICKLISTCATEGORY.component.html'
})
export class PICKLISTCATEGORY extends BaseMatTableMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "PICKLISTCATEGORY";
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
        return PICKLISTCATEGORY.x;
    }
    Y() {
        return PICKLISTCATEGORY.y;
    }
    Width(): string {
        return PICKLISTCATEGORY.width;
    }
    Height(): string {
        return PICKLISTCATEGORY.height;
    }
    IsCenteredToWindow() {
        return PICKLISTCATEGORY.isCenteredToWindow;
    }
    FormName() {
        return PICKLISTCATEGORY.formName;
    }
    ShowTitleBar() {
        return PICKLISTCATEGORY.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return PICKLISTCATEGORY.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return PICKLISTCATEGORY.isResizable;
    }
    IsMovable() {
        return PICKLISTCATEGORY.isMovable;
    }
    override displayedColumns = this.mgdp;
}