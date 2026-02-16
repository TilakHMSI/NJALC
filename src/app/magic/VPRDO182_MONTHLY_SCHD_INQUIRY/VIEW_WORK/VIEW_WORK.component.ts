import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VIEW_WORK.mg.controls.g";
import { MgDisplayedColumns } from "./VIEW_WORK.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VPRDO182_MONTHLY_SCHD_INQUIRY_VIEW_WORK_VIEW_WORK',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './VIEW_WORK.component.html'
})
export class VIEW_WORK extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}