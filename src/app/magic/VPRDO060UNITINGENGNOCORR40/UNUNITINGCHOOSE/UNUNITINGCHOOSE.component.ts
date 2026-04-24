import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./UNUNITINGCHOOSE.mg.controls.g";
import { MgDisplayedColumns } from "./UNUNITINGCHOOSE.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-VPRDO060UNITINGENGNOCORR40_UNUNITINGCHOOSE_UNUNITINGCHOOSE',
    providers: [...matMagicProviders],
    standalone: false,
    templateUrl: './UNUNITINGCHOOSE.component.html'
})
export class UNUNITINGCHOOSE extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}