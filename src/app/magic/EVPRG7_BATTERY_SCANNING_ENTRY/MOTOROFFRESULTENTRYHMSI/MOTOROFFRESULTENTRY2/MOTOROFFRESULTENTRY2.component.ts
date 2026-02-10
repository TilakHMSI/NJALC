import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./MOTOROFFRESULTENTRY2.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


@Component({
    selector: 'mga-EVPRG7_BATTERY_SCANNING_ENTRY_MOTOROFFRESULTENTRYHMSI_MOTOROFFRESULTENTRY2_MOTOROFFRESULTENTRY2',
    providers: [...magicProviders],
    standalone: false,
    styleUrls: ['./MOTOROFFRESULTENTRY2.component.css'],
    templateUrl: './MOTOROFFRESULTENTRY2.component.html'
})
export class MOTOROFFRESULTENTRY2 extends TaskBaseMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
}