import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./REPAIROUTENTRY_VIEW.mg.controls.g";
import { MgDisplayedColumns } from "./REPAIROUTENTRY_VIEW.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-REPAIR_OUT_ENTRY_REPAIROUTENTRY_VIEW_REPAIROUTENTRY_VIEW',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './REPAIROUTENTRY_VIEW.component.html'
})
export class REPAIROUTENTRY_VIEW extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}