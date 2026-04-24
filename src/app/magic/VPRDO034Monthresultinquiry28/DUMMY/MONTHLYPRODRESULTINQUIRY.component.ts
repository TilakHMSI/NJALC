import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./MONTHLYPRODRESULTINQUIRY.mg.controls.g";
import { MgDisplayedColumns } from "./MONTHLYPRODRESULTINQUIRY.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VPRDO034Monthresultinquiry28_DUMMY_MONTHLYPRODRESULTINQUIRY',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './MONTHLYPRODRESULTINQUIRY.component.html'
})
export class MONTHLYPRODRESULTINQUIRY extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}