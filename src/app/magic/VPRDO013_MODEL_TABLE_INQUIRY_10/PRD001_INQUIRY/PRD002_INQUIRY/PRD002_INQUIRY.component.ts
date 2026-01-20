import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PRD002_INQUIRY.mg.controls.g";
import { MgDisplayedColumns } from "./PRD002_INQUIRY.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VPRDO013_MODEL_TABLE_INQUIRY_10_PRD001_INQUIRY_PRD002_INQUIRY_PRD002_INQUIRY',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './PRD002_INQUIRY.component.html'
})
export class PRD002_INQUIRY extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}