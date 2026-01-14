import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./VPRDG000_PRD001_GUIDE.mg.controls.g";
import { MgDisplayedColumns } from "./VPRDG000_PRD001_GUIDE.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VPRDG000_PRD001_GUIDE_51_VPRDG000_PRD001_GUIDE_VPRDG000_PRD001_GUIDE',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './VPRDG000_PRD001_GUIDE.component.html'
})
export class VPRDG000_PRD001_GUIDE extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}