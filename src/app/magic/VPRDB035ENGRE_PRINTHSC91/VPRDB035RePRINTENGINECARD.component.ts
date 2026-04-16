import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB035RePRINTENGINECARD.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-VPRDB035ENGRE_PRINTHSC91_VPRDB035RePRINTENGINECARD',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB035RePRINTENGINECARD.component.html'
})
export class VPRDB035RePRINTENGINECARD extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
}