import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB067_RRe_Printcard.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-VPRDB067_R_FIVSRE_PRINT_HMSI_186_VPRDB067_RRe_Printcard',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB067_RRe_Printcard.component.html'
})
export class VPRDB067_RRe_Printcard extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
}