import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CodeTypeMaster = "CodeTypeMaster",
        Label1 = "Label1",
        btnexit = "btnexit",
        Edit2 = "Edit2",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        Table5 = "Table5",
        Column6 = "Column6",
        CODETYPE_Flag = "CODETYPE_Flag",
        Column7 = "Column7",
        CODETYPE_Code = "CODETYPE_Code",
        Column8 = "Column8",
        CODETYPE_SubCode = "CODETYPE_SubCode",
        Column9 = "Column9",
        CODETYPE_Disc = "CODETYPE_Disc",
        B_CREATE = "B_CREATE",
        B_MODIFY = "B_MODIFY",
        B_EXIT = "B_EXIT",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column6',
        'Column7',
        'Column8',
        'Column9',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get CODETYPE_Flag(): FormControl {
        return this.getTableChildFormControl(MgControlName.CODETYPE_Flag);
    }

    get CODETYPE_Code(): FormControl {
        return this.getTableChildFormControl(MgControlName.CODETYPE_Code);
    }

    get CODETYPE_SubCode(): FormControl {
        return this.getTableChildFormControl(MgControlName.CODETYPE_SubCode);
    }

    get CODETYPE_Disc(): FormControl {
        return this.getTableChildFormControl(MgControlName.CODETYPE_Disc);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}