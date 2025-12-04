import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PDIOFFRESULTENTRY.mg.controls.g";
import { MgDisplayedColumns } from "./PDIOFFRESULTENTRY.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VPRDO066_PDIOFF_ENTRY_PDIOFFRESULTENTRY_PDIOFFRESULTENTRY',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './PDIOFFRESULTENTRY.component.html'
})
export class PDIOFFRESULTENTRY extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}