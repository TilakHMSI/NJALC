import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DETAIL.mg.controls.g";
import { MgDisplayedColumns } from "./DETAIL.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-OdometerFrameCapture_DETAIL_DETAIL',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./DETAIL.component.css'],
    templateUrl: './DETAIL.component.html'
})
export class DETAIL extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}