import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./COLOR_TABLE_MAINT.mg.controls.g";
import { MgDisplayedColumns } from "./COLOR_TABLE_MAINT.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VPRDO011_Color_Table_Maint_COLOR_TABLE_MAINT_COLOR_TABLE_MAINT',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './COLOR_TABLE_MAINT.component.html'
})
export class COLOR_TABLE_MAINT extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}