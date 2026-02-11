import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PRD001_MAITENANCE.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-VPRDO012_MODEL_TABLE_MAINTE_PRD001_MAITENANCE_PRD001_MAITENANCE',
    providers: [...magicProviders],
    standalone: false,
    templateUrl: './PRD001_MAITENANCE.component.html'
})
export class PRD001_MAITENANCE extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
}