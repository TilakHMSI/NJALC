import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ViewMemory = "ViewMemory",
        Label1 = "Label1",
        ERRORCODE = "ERRORCODE",
        Label3 = "Label3",
        ERRORDESC = "ERRORDESC",
        Table5 = "Table5",
        Column6 = "Column6",
        S4_PLAN_DATE = "S4_PLAN_DATE",
        Column7 = "Column7",
        Label13 = "Label13",
        S4_PLAN_SEQ = "S4_PLAN_SEQ",
        Label20 = "Label20",
        S4_PLAN_SEQ_SUFFIX = "S4_PLAN_SEQ_SUFFIX",
        Label24 = "Label24",
        S4_PLAN_RESULT = "S4_PLAN_RESULT",
        Column8 = "Column8",
        S4_MTO_CODE = "S4_MTO_CODE",
        Column9 = "Column9",
        S4_EFM = "S4_EFM",
        Column10 = "Column10",
        Label17 = "Label17",
        S4_COLOR_CODE = "S4_COLOR_CODE",
        Label22 = "Label22",
        S4_COLOR_CODEINSIDE = "S4_COLOR_CODEINSIDE",
        Column11 = "Column11",
        S4_WEEK_NO = "S4_WEEK_NO",
        vCreateUpdateInSchedule = "vCreateUpdateInSchedule",
        btnexit = "btnexit",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column6',
        'Column7',
        'Column8',
        'Column9',
        'Column10',
        'Column11',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get ERRORCODE(): FormControl {
        return this.fg.controls[MgControlName.ERRORCODE] as FormControl;
    }

    get ERRORDESC(): FormControl {
        return this.fg.controls[MgControlName.ERRORDESC] as FormControl;
    }

    get S4_PLAN_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S4_PLAN_DATE);
    }

    get S4_PLAN_SEQ(): FormControl {
        return this.getTableChildFormControl(MgControlName.S4_PLAN_SEQ);
    }

    get S4_PLAN_SEQ_SUFFIX(): FormControl {
        return this.getTableChildFormControl(MgControlName.S4_PLAN_SEQ_SUFFIX);
    }

    get S4_PLAN_RESULT(): FormControl {
        return this.getTableChildFormControl(MgControlName.S4_PLAN_RESULT);
    }

    get S4_MTO_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S4_MTO_CODE);
    }

    get S4_EFM(): FormControl {
        return this.getTableChildFormControl(MgControlName.S4_EFM);
    }

    get S4_COLOR_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S4_COLOR_CODE);
    }

    get S4_COLOR_CODEINSIDE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S4_COLOR_CODEINSIDE);
    }

    get S4_WEEK_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.S4_WEEK_NO);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}