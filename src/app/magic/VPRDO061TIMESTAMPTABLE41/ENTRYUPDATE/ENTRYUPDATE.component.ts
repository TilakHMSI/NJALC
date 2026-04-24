import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./ENTRYUPDATE.mg.controls.g";
import { MgDisplayedColumns } from "./ENTRYUPDATE.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VPRDO061TIMESTAMPTABLE41_ENTRYUPDATE_ENTRYUPDATE',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './ENTRYUPDATE.component.html'
})
export class ENTRYUPDATE extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}