import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CKDCaseOffPackingStatus251.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-CKDCaseOffPackingStatus251_CKDCaseOffPackingStatus251',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './CKDCaseOffPackingStatus251.component.html'
})
export class CKDCaseOffPackingStatus251 extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
}