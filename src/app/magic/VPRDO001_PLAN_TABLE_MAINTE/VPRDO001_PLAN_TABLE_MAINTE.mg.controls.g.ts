import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VPRDO001_PLAN_TABLE_MAINTE = "VPRDO001_PLAN_TABLE_MAINTE",
        pLOCATE_P = "pLOCATE_P",
        Label1 = "Label1",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        Table5 = "Table5",
        Column6 = "Column6",
        P15_PS_CODE = "P15_PS_CODE",
        Column7 = "Column7",
        P15_APPL_MODELTYPE = "P15_APPL_MODELTYPE",
        Column12 = "Column12",
        EnterRowEditing = "EnterRowEditing",
        SaveRowEditing = "SaveRowEditing",
        CancelRowEditing = "CancelRowEditing",
        BUTTON = "BUTTON",
        BUTTON2 = "BUTTON2",
        btnexit = "btnexit",
        btnadd = "btnadd",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column6',
        'Column7',
        'Column12',
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

    get P15_PS_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.P15_PS_CODE);
    }

    get P15_APPL_MODELTYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.P15_APPL_MODELTYPE);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}