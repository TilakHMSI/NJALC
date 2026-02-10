import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PCUOFFRESULTENTRY2.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-EVPRG1_PCU_OFF_ENTRY_PCUOFFRESULTENTRYHMSI_PCUOFFRESULTENTRY2_PCUOFFRESULTENTRY2',
    providers: [...magicProviders],
    standalone: false,
    styleUrls: ['./PCUOFFRESULTENTRY2.component.css'],
    templateUrl: './PCUOFFRESULTENTRY2.component.html'
})
export class PCUOFFRESULTENTRY2 extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
}