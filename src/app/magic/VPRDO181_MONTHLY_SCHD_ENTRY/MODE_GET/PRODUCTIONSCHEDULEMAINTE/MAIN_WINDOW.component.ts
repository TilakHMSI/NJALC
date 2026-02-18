import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./MAIN_WINDOW.mg.controls.g";
import { MgDisplayedColumns } from "./MAIN_WINDOW.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VPRDO181_MONTHLY_SCHD_ENTRY_MODE_GET_PRODUCTIONSCHEDULEMAINTE_MAIN_WINDOW',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrl: './MAIN_WINDOW.component.css',
    templateUrl: './MAIN_WINDOW.component.html'
})
export class MAIN_WINDOW extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}