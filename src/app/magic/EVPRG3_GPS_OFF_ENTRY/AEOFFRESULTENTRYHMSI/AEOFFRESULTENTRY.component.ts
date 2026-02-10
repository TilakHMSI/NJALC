import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./AEOFFRESULTENTRY.mg.controls.g";
import { MgDisplayedColumns } from "./AEOFFRESULTENTRY.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-EVPRG3_GPS_OFF_ENTRY_AEOFFRESULTENTRYHMSI_AEOFFRESULTENTRY',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./AEOFFRESULTENTRY.component.css'],
    templateUrl: './AEOFFRESULTENTRY.component.html'
})
export class AEOFFRESULTENTRY extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}