import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./FRAME_DETAIL_VIEW.mg.controls.g";
import { MgDisplayedColumns } from "./FRAME_DETAIL_VIEW.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-FRAMEUpload_UNHOLD_ENTRY_FRAME_DETAIL_VIEW_FRAME_DETAIL_VIEW',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './FRAME_DETAIL_VIEW.component.html'
})
export class FRAME_DETAIL_VIEW extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}