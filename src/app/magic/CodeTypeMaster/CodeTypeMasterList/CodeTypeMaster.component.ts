import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./CodeTypeMaster.mg.controls.g";
import { MgDisplayedColumns } from "./CodeTypeMaster.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-CodeTypeMaster_CodeTypeMasterList_CodeTypeMaster',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./CodeTypeMaster.component.css'],
    templateUrl: './CodeTypeMaster.component.html'
})
export class CodeTypeMaster extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}