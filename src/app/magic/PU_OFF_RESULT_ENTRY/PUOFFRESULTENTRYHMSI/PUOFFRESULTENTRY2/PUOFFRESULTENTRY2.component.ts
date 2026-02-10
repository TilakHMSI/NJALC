import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PUOFFRESULTENTRY2.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-PU_OFF_RESULT_ENTRY_PUOFFRESULTENTRYHMSI_PUOFFRESULTENTRY2_PUOFFRESULTENTRY2',
    providers: [...magicProviders],
    standalone: false,
    styleUrls: ['./PUOFFRESULTENTRY2.component.css'],
    templateUrl: './PUOFFRESULTENTRY2.component.html'
})
export class PUOFFRESULTENTRY2 extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
}