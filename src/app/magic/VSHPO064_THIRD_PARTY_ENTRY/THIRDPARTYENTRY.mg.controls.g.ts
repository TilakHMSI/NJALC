import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    THIRDPARTYENTRY = "THIRDPARTYENTRY",
        pLOCATE_P = "pLOCATE_P",
        Label1 = "Label1",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        btnexit = "btnexit",
        Table5 = "Table5",
        Column6 = "Column6",
        P67_PLAN_CODE = "P67_PLAN_CODE",
        Column7 = "Column7",
        P67_NOTE = "P67_NOTE",
        Column10 = "Column10",
        EnterRowEditing = "EnterRowEditing",
        SaveRowEditing = "SaveRowEditing",
        CancelRowEditing = "CancelRowEditing",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column6',
        'Column7',
        'Column10',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get pLOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.pLOCATE_P] as FormControl;
    }

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get P67_PLAN_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.P67_PLAN_CODE);
    }

    get P67_NOTE(): FormControl {
        return this.getTableChildFormControl(MgControlName.P67_NOTE);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}