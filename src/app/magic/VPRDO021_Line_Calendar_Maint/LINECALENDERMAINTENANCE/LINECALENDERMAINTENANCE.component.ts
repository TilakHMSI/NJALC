import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./LINECALENDERMAINTENANCE.mg.controls.g";
import { MgDisplayedColumns } from "./LINECALENDERMAINTENANCE.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VPRDO021_Line_Calendar_Maint_LINECALENDERMAINTENANCE_LINECALENDERMAINTENANCE',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './LINECALENDERMAINTENANCE.component.html'
})
export class LINECALENDERMAINTENANCE extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}