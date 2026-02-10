import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./AEOFFRESULTENTRY2.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-EVPRG4_SCU_OFF_ENTRY_AEOFFRESULTENTRYHMSI_AEOFFRESULTENTRY2_AEOFFRESULTENTRY2',
    providers: [...magicProviders],
    standalone: false,
    styleUrls: ['./AEOFFRESULTENTRY2.component.css'],
    templateUrl: './AEOFFRESULTENTRY2.component.html'
})
export class AEOFFRESULTENTRY2 extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
}