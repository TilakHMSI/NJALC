import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./AEOFFAFOFFRESULTINQUIRY.mg.controls.g";
import { MgDisplayedColumns } from "./AEOFFAFOFFRESULTINQUIRY.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VPRDO035AEAFresult29_AEOFFAFOFFRESULTINQUIRY_AEOFFAFOFFRESULTINQUIRY',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './AEOFFAFOFFRESULTINQUIRY.component.html'
})
export class AEOFFAFOFFRESULTINQUIRY extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}