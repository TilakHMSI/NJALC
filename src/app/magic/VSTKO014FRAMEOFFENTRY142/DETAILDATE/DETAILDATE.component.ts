import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DETAILDATE.mg.controls.g";
import { MgDisplayedColumns } from "./DETAILDATE.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VSTKO014FRAMEOFFENTRY142_DETAILDATE_DETAILDATE',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './DETAILDATE.component.html'
})
export class DETAILDATE extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}