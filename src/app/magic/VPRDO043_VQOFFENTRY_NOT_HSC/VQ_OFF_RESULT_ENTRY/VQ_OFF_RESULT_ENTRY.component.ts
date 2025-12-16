import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VQ_OFF_RESULT_ENTRY.mg.controls.g";
import { MgDisplayedColumns } from "./VQ_OFF_RESULT_ENTRY.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VPRDO043_VQOFFENTRY_NOT_HSC_VQ_OFF_RESULT_ENTRY_VQ_OFF_RESULT_ENTRY',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./VQ_OFF_RESULT_ENTRY.component.css'],
    templateUrl: './VQ_OFF_RESULT_ENTRY.component.html'
})
export class VQ_OFF_RESULT_ENTRY extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}