import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VQ_ON_RESULT_ENTRY.mg.controls.g";
import { MgDisplayedColumns } from "./VQ_ON_RESULT_ENTRY.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VPRDO065_VQON_ENTRY_VQ_ON_RESULT_ENTRY_VQ_ON_RESULT_ENTRY',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './VQ_ON_RESULT_ENTRY.component.html',
    styleUrl: './VQ_ON_RESULT_ENTRY.component.css'
})
export class VQ_ON_RESULT_ENTRY extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}