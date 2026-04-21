import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./EVSM_BOMCODE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-EVSM_BOMCODE_EVSM_BOMCODE_MODIFY_EVSM_BOMCODE',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './EVSM_BOMCODE.component.html'
})
export class EVSM_BOMCODE extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
}