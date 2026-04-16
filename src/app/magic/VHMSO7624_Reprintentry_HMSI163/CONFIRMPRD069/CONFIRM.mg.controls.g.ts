import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CONFIRM = "CONFIRM",
        Group1 = "Group1",
        Edit2 = "Edit2",
        Edit3 = "Edit3",
        Label4 = "Label4",
        Edit5 = "Edit5",
        Group6 = "Group6",
        Table10 = "Table10",
        Column11 = "Column11",
        Label17 = "Label17",
        X3_CHASSIS_NO_FROM = "X3_CHASSIS_NO_FROM",
        Label19 = "Label19",
        X3_CHASSIS_NOTO = "X3_CHASSIS_NOTO",
        Column12 = "Column12",
        PLAN_RESULT = "PLAN_RESULT",
        Label34 = "Label34",
        Column13 = "Column13",
        X3_EFM = "X3_EFM",
        Column14 = "Column14",
        Label23 = "Label23",
        X3_MTO_CODE = "X3_MTO_CODE",
        X3_MTO_NAME = "X3_MTO_NAME",
        X3_COLOR_CODE = "X3_COLOR_CODE",
        X3_COLOR_CODEINSIDE = "X3_COLOR_CODEINSIDE",
        Column15 = "Column15",
        Edit27 = "Edit27",
        Column16 = "Column16",
        PLAN_CODE = "PLAN_CODE",
        PLAN_DATE = "PLAN_DATE",
        PLAN_SEQ = "PLAN_SEQ",
        Label32 = "Label32",
        PLAN_SEQ_SUFFIX = "PLAN_SEQ_SUFFIX",
        Label7 = "Label7",
        Label8 = "Label8",
        V_V_QTYCONFIRM = "V_V_QTYCONFIRM",
        btn_Select = "btn_Select",
        btn_Exit = "btn_Exit",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column11',
        'Column12',
        'Column13',
        'Column14',
        'Column15',
        'Column16',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get Edit5(): FormControl {
        return this.fg.controls[MgControlName.Edit5] as FormControl;
    }

    get X3_CHASSIS_NO_FROM(): FormControl {
        return this.getTableChildFormControl(MgControlName.X3_CHASSIS_NO_FROM);
    }

    get X3_CHASSIS_NOTO(): FormControl {
        return this.getTableChildFormControl(MgControlName.X3_CHASSIS_NOTO);
    }

    get PLAN_RESULT(): FormControl {
        return this.getTableChildFormControl(MgControlName.PLAN_RESULT);
    }

    get X3_EFM(): FormControl {
        return this.getTableChildFormControl(MgControlName.X3_EFM);
    }

    get X3_MTO_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.X3_MTO_CODE);
    }

    get X3_MTO_NAME(): FormControl {
        return this.getTableChildFormControl(MgControlName.X3_MTO_NAME);
    }

    get X3_COLOR_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.X3_COLOR_CODE);
    }

    get X3_COLOR_CODEINSIDE(): FormControl {
        return this.getTableChildFormControl(MgControlName.X3_COLOR_CODEINSIDE);
    }

    get Edit27(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit27);
    }

    get PLAN_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PLAN_CODE);
    }

    get PLAN_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PLAN_DATE);
    }

    get PLAN_SEQ(): FormControl {
        return this.getTableChildFormControl(MgControlName.PLAN_SEQ);
    }

    get PLAN_SEQ_SUFFIX(): FormControl {
        return this.getTableChildFormControl(MgControlName.PLAN_SEQ_SUFFIX);
    }

    get V_V_QTYCONFIRM(): FormControl {
        return this.fg.controls[MgControlName.V_V_QTYCONFIRM] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}