import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDB023_LFACTORYFRAMELIST249.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-VPRDB023_LFACTORYFRAMELIST249_VPRDB023_LFACTORYFRAMELIST249',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './VPRDB023_LFACTORYFRAMELIST249.component.html'
})
export class VPRDB023_LFACTORYFRAMELIST249 extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
}