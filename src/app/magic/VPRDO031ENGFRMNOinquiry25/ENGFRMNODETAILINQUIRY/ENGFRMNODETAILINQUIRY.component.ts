import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ENGFRMNODETAILINQUIRY.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-VPRDO031ENGFRMNOinquiry25_ENGFRMNODETAILINQUIRY_ENGFRMNODETAILINQUIRY',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './ENGFRMNODETAILINQUIRY.component.html'
})
export class ENGFRMNODETAILINQUIRY extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
}