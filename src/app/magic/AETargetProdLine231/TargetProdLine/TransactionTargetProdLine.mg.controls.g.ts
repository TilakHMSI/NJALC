import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    TransactionTargetProdLine = "TransactionTargetProdLine",
        Table1 = "Table1",
        Column2 = "Column2",
        TargetProdLine_PRODLIND = "TargetProdLine_PRODLIND",
        Column3 = "Column3",
        TargetProdLine_SHIFT = "TargetProdLine_SHIFT",
        Column4 = "Column4",
        TARGET = "TARGET",
        Column5 = "Column5",
        TAKTIME = "TAKTIME",
        Column6 = "Column6",
        MESSAGE = "MESSAGE",
        Column15 = "Column15",
        EnterRowEditing = "EnterRowEditing",
        SaveRowEditing = "SaveRowEditing",
        CancelRowEditing = "CancelRowEditing",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
        'Column5',
        'Column6',
        'Column15',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get TargetProdLine_PRODLIND(): FormControl {
        return this.getTableChildFormControl(MgControlName.TargetProdLine_PRODLIND);
    }

    get TargetProdLine_SHIFT(): FormControl {
        return this.getTableChildFormControl(MgControlName.TargetProdLine_SHIFT);
    }

    get TARGET(): FormControl {
        return this.getTableChildFormControl(MgControlName.TARGET);
    }

    get TAKTIME(): FormControl {
        return this.getTableChildFormControl(MgControlName.TAKTIME);
    }

    get MESSAGE(): FormControl {
        return this.getTableChildFormControl(MgControlName.MESSAGE);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}