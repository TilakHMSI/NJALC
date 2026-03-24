import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./REPAIRINENTRY_VIEW.mg.controls.g";
import { MgDisplayedColumns } from "./REPAIRINENTRY_VIEW.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-REPAIR_IN_ENTRY_REPAIRINENTRY_VIEW_REPAIRINENTRY_VIEW',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './REPAIRINENTRY_VIEW.component.html'
})
export class REPAIRINENTRY_VIEW extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}