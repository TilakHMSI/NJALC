import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./AF_OFF_RESULT_ENTRY2.mg.controls.g";
import { MgDisplayedColumns } from "./AF_OFF_RESULT_ENTRY2.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VPRDO042DISPAF_OFF_ENTRY_AF_OFF_RESULT_ENTRY2_AF_OFF_RESULT_ENTRY2',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './AF_OFF_RESULT_ENTRY2.component.html'
})
export class AF_OFF_RESULT_ENTRY2 extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}