import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./EVSM_BOMCODE.mg.controls.g";
import { MgDisplayedColumns } from "./EVSM_BOMCODE.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-EVSM_BOMCODE_EVSM_BOMCODE',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './EVSM_BOMCODE.component.html'
})
export class EVSM_BOMCODE extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}