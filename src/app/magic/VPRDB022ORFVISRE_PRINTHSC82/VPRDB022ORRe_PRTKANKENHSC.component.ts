import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB022ORRe_PRTKANKENHSC.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-VPRDB022ORFVISRE_PRINTHSC82_VPRDB022ORRe_PRTKANKENHSC',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB022ORRe_PRTKANKENHSC.component.html'
})
export class VPRDB022ORRe_PRTKANKENHSC extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
}