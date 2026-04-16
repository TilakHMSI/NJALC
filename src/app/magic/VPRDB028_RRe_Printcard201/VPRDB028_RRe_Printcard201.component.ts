import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB028_RRe_Printcard201.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-VPRDB028_RRe_Printcard201_VPRDB028_RRe_Printcard201',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB028_RRe_Printcard201.component.html'
})
export class VPRDB028_RRe_Printcard201 extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
}