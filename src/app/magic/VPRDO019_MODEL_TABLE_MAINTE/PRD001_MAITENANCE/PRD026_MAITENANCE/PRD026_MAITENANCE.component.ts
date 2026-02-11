import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./PRD026_MAITENANCE.mg.controls.g";
import { MgDisplayedColumns } from "./PRD026_MAITENANCE.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VPRDO019_MODEL_TABLE_MAINTE_PRD001_MAITENANCE_PRD026_MAITENANCE_PRD026_MAITENANCE',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './PRD026_MAITENANCE.component.html'
})
export class PRD026_MAITENANCE extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}