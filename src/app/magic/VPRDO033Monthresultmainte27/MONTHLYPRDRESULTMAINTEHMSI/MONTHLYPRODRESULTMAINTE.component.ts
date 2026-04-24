import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./MONTHLYPRODRESULTMAINTE.mg.controls.g";
import { MgDisplayedColumns } from "./MONTHLYPRODRESULTMAINTE.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VPRDO033Monthresultmainte27_MONTHLYPRDRESULTMAINTEHMSI_MONTHLYPRODRESULTMAINTE',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './MONTHLYPRODRESULTMAINTE.component.html'
})
export class MONTHLYPRODRESULTMAINTE extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}