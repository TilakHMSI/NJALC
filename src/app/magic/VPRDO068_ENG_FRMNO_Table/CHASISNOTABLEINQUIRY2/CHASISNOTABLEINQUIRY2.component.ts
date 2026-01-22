import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CHASISNOTABLEINQUIRY2.mg.controls.g";
import { MgDisplayedColumns } from "./CHASISNOTABLEINQUIRY2.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VPRDO068_ENG_FRMNO_Table_CHASISNOTABLEINQUIRY2_CHASISNOTABLEINQUIRY2',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './CHASISNOTABLEINQUIRY2.component.html'
})
export class CHASISNOTABLEINQUIRY2 extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}