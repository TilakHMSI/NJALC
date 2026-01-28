import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ENGFRMNOTABLEMAINTENANCE.mg.controls.g";
import { MgDisplayedColumns } from "./ENGFRMNOTABLEMAINTENANCE.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VPRDO028_GROUP_TABLE_MAINT_GROUP_TABLE_MAINTENANCE_ENGFRMNOTABLEMAINTENANCE',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./ENGFRMNOTABLEMAINTENANCE.component.css'],
    templateUrl: './ENGFRMNOTABLEMAINTENANCE.component.html'
})
export class ENGFRMNOTABLEMAINTENANCE extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}