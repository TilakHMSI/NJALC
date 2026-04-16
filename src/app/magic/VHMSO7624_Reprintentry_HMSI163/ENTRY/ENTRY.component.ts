import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ENTRY.mg.controls.g";
import { MgDisplayedColumns } from "./ENTRY.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VHMSO7624_Reprintentry_HMSI163_ENTRY_ENTRY',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './ENTRY.component.html'
})
export class ENTRY extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}