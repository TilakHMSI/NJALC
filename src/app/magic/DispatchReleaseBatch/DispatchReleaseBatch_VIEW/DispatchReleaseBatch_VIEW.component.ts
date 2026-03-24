import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DispatchReleaseBatch_VIEW.mg.controls.g";
import { MgDisplayedColumns } from "./DispatchReleaseBatch_VIEW.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-DispatchReleaseBatch_DispatchReleaseBatch_VIEW_DispatchReleaseBatch_VIEW',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './DispatchReleaseBatch_VIEW.component.html'
})
export class DispatchReleaseBatch_VIEW extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}