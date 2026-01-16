import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./LINECALENDERMAINTENANCE_EDIT.mg.controls.g";
import { MgDisplayedColumns } from "./LINECALENDERMAINTENANCE_EDIT.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VPRDO021_Line_Calendar_Maint_LINECALENDERMAINTENANCE_EDIT_LINECALENDERMAINTENANCE_EDIT',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './LINECALENDERMAINTENANCE_EDIT.component.html'
})
export class LINECALENDERMAINTENANCE_EDIT extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}