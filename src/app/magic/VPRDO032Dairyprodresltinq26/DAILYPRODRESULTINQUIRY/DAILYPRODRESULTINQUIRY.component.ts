import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./DAILYPRODRESULTINQUIRY.mg.controls.g";
import { MgDisplayedColumns } from "./DAILYPRODRESULTINQUIRY.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VPRDO032Dairyprodresltinq26_DAILYPRODRESULTINQUIRY_DAILYPRODRESULTINQUIRY',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './DAILYPRODRESULTINQUIRY.component.html'
})
export class DAILYPRODRESULTINQUIRY extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}