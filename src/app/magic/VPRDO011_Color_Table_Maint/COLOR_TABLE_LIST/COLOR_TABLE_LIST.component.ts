import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./COLOR_TABLE_LIST.mg.controls.g";
import { MgDisplayedColumns } from "./COLOR_TABLE_LIST.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VPRDO011_Color_Table_Maint_COLOR_TABLE_LIST_COLOR_TABLE_LIST',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./COLOR_TABLE_LIST.component.css'],
    templateUrl: './COLOR_TABLE_LIST.component.html'
})
export class COLOR_TABLE_LIST extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}