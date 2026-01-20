import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./MODELGUIDE.mg.controls.g";
import { MgDisplayedColumns } from "./MODELGUIDE.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VPRDG023_PRD001_GUIDE2_63_VPRDG023PRD001_GUIDE2_MODELGUIDE',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './MODELGUIDE.component.html'
})
export class MODELGUIDE extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}