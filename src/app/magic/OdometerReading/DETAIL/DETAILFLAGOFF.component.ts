import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DETAILFLAGOFF.mg.controls.g";
import { MgDisplayedColumns } from "./DETAILFLAGOFF.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-OdometerReading_DETAIL_DETAILFLAGOFF',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./DETAIL.component.css'],
    templateUrl: './DETAILFLAGOFF.component.html'
})
export class DETAILFLAGOFF extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}