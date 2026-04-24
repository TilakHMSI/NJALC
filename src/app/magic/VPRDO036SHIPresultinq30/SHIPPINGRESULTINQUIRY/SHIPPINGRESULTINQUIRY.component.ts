import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SHIPPINGRESULTINQUIRY.mg.controls.g";
import { MgDisplayedColumns } from "./SHIPPINGRESULTINQUIRY.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VPRDO036SHIPresultinq30_SHIPPINGRESULTINQUIRY_SHIPPINGRESULTINQUIRY',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './SHIPPINGRESULTINQUIRY.component.html'
})
export class SHIPPINGRESULTINQUIRY extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}