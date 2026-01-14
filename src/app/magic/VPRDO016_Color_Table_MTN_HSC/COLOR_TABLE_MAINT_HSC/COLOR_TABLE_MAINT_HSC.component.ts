import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./COLOR_TABLE_MAINT_HSC.mg.controls.g";
import { MgDisplayedColumns } from "./COLOR_TABLE_MAINT_HSC.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VPRDO016_Color_Table_MTN_HSC_COLOR_TABLE_MAINT_HSC_COLOR_TABLE_MAINT_HSC',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './COLOR_TABLE_MAINT_HSC.component.html'
})
export class COLOR_TABLE_MAINT_HSC extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}