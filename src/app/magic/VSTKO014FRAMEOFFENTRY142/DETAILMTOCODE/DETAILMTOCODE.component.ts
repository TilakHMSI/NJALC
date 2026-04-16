import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DETAILMTOCODE.mg.controls.g";
import { MgDisplayedColumns } from "./DETAILMTOCODE.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VSTKO014FRAMEOFFENTRY142_DETAILMTOCODE_DETAILMTOCODE',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './DETAILMTOCODE.component.html'
})
export class DETAILMTOCODE extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}