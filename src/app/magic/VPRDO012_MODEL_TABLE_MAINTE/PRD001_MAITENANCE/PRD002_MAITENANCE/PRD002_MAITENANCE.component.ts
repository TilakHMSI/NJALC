import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PRD002_MAITENANCE.mg.controls.g";
import { MgDisplayedColumns } from "./PRD002_MAITENANCE.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VPRDO012_MODEL_TABLE_MAINTE_PRD001_MAITENANCE_PRD002_MAITENANCE_PRD002_MAITENANCE',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './PRD002_MAITENANCE.component.html'
})
export class PRD002_MAITENANCE extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}