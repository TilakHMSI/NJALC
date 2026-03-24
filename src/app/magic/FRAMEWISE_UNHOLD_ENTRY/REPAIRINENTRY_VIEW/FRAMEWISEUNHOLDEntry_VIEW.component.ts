import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./FRAMEWISEUNHOLDEntry_VIEW.mg.controls.g";
import { MgDisplayedColumns } from "./FRAMEWISEUNHOLDEntry_VIEW.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-FRAMEWISE_UNHOLD_ENTRY_REPAIRINENTRY_VIEW_FRAMEWISEUNHOLDEntry_VIEW',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './FRAMEWISEUNHOLDEntry_VIEW.component.html'
})
export class FRAMEWISEUNHOLDEntry_VIEW extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}