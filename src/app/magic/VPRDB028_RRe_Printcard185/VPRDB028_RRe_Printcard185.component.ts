import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB028_RRe_Printcard185.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-VPRDB028_RRe_Printcard185_VPRDB028_RRe_Printcard185',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB028_RRe_Printcard185.component.html'
})
export class VPRDB028_RRe_Printcard185 extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
}