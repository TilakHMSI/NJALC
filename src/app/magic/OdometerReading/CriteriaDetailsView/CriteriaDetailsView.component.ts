import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CriteriaDetailsView.mg.controls.g";
import { MgDisplayedColumns } from "./CriteriaDetailsView.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-OdometerReading_CriteriaDetailsView_CriteriaDetailsView',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./CriteriaDetails.component.css'],
    templateUrl: './CriteriaDetailsView.component.html'
})
export class CriteriaDetailsView extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}