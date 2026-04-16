import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB029_LFRMSEALRE_PRINT87.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-VPRDB029_LFRMSEALRE_PRINT87_VPRDB029_LFRMSEALRE_PRINT87',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB029_LFRMSEALRE_PRINT87.component.html'
})
export class VPRDB029_LFRMSEALRE_PRINT87 extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
}