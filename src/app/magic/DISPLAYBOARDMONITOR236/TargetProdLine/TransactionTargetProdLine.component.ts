import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./TransactionTargetProdLine.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-DISPLAYBOARDMONITOR236_TargetProdLine_TransactionTargetProdLine',
    providers: [...magicProviders],
    standalone: false,
    styleUrls: ['./TransactionTargetProdLine.component.css'],
    templateUrl: './TransactionTargetProdLine.component.html'
})
export class TransactionTargetProdLine extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc!: MgFormControlsAccessor;
    override createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "TransactionTargetProdLine";
    private static readonly showTitleBar: boolean = false;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "1250px";
    private static readonly height: string = "730px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick: boolean = false;
    private static readonly isResizable: boolean = true;
    private static readonly isMovable: boolean = false;
    X() {
        return TransactionTargetProdLine.x;
    }
    Y() {
        return TransactionTargetProdLine.y;
    }
    Width(): string {
        return TransactionTargetProdLine.width;
    }
    Height(): string {
        return TransactionTargetProdLine.height;
    }
    IsCenteredToWindow() {
        return TransactionTargetProdLine.isCenteredToWindow;
    }
    FormName() {
        return TransactionTargetProdLine.formName;
    }
    ShowTitleBar() {
        return TransactionTargetProdLine.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return TransactionTargetProdLine.shouldCloseOnBackgroundClick;
    }
    IsResizable() {
        return TransactionTargetProdLine.isResizable;
    }
    IsMovable() {
        return TransactionTargetProdLine.isMovable;
    }
}