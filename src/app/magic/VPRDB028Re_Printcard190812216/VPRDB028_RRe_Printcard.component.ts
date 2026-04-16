import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB028_RRe_Printcard.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-VPRDB028Re_Printcard190812216_VPRDB028_RRe_Printcard',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB028_RRe_Printcard.component.html'
})
export class VPRDB028_RRe_Printcard extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
}