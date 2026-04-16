import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./SelectModelCode.mg.controls.g";
import { MgDisplayedColumns } from "./SelectModelCode.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VEHICLEAFOFF175_RoutetoProcess_SelectModelCode_ListView_SelectModelCode',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './SelectModelCode.component.html'
})
export class SelectModelCode extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}