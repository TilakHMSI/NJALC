import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./AE_OFF_RESULT_ENTRY2.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-VPRDO041DISPAE_OFF_ENTRY_AEOFF_RESULT_ENTRY_HMSI2_AE_OFF_RESULT_ENTRY2_AE_OFF_RESULT_ENTRY2',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './AE_OFF_RESULT_ENTRY2.component.html'
})
export class AE_OFF_RESULT_ENTRY2 extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
}