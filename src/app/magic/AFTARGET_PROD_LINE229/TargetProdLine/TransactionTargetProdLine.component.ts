import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./TransactionTargetProdLine.mg.controls.g";
import { MgDisplayedColumns } from "./TransactionTargetProdLine.mg.controls.g";


import { BaseMatTableMagicComponent, matMagicProviders } from "@magic-xpa/angular-material-core";


@Component({
    selector: 'mga-AFTARGET_PROD_LINE229_TargetProdLine_TransactionTargetProdLine',
    providers: [...matMagicProviders],
    standalone: false,
    styleUrls: ['./TransactionTargetProdLine.component.css'],
    templateUrl: './TransactionTargetProdLine.component.html'
})
export class TransactionTargetProdLine extends BaseMatTableMagicComponent {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    mgdp = MgDisplayedColumns;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    override displayedColumns = this.mgdp;
}