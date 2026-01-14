import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./LINECALENDARINQUIRY.mg.controls.g";
import { MgDisplayedColumns } from "./LINECALENDARINQUIRY.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VPRDO022_Line_Calendar_Inq_LINECALENDARINQUIRY_LINECALENDARINQUIRY',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './LINECALENDARINQUIRY.component.html'
})
export class LINECALENDARINQUIRY extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}