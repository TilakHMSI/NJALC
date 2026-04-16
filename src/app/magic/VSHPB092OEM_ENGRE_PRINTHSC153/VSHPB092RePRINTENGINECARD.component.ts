import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VSHPB092RePRINTENGINECARD.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-VSHPB092OEM_ENGRE_PRINTHSC153_VSHPB092RePRINTENGINECARD',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VSHPB092RePRINTENGINECARD.component.html'
})
export class VSHPB092RePRINTENGINECARD extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
}