import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ShiftTimesLine.mg.controls.g";
import { MgDisplayedColumns } from "./ShiftTimesLine.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-AEShiftTimesLine232_ShiftTimesLine_ShiftTimesLine',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./ShiftTimesLine.component.css'],
    templateUrl: './ShiftTimesLine.component.html'
})
export class ShiftTimesLine extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}