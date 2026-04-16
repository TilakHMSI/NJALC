import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ENTRY = "ENTRY",
        Table3 = "Table3",
        Column4 = "Column4",
        Label12 = "Label12",
        X3_ENG_FRM_TYPE = "X3_ENG_FRM_TYPE",
        X3_CHASSIS_NO_FROM = "X3_CHASSIS_NO_FROM",
        Label16 = "Label16",
        X3_CHASSIS_NO_TO = "X3_CHASSIS_NO_TO",
        Label33 = "Label33",
        Column5 = "Column5",
        PLAN_RESULT = "PLAN_RESULT",
        Label34 = "Label34",
        Column6 = "Column6",
        X3_EFM = "X3_EFM",
        Column7 = "Column7",
        Label13 = "Label13",
        X3_MTO_NAME = "X3_MTO_NAME",
        X3_MTO_CODE = "X3_MTO_CODE",
        X3_COLOR_CODE = "X3_COLOR_CODE",
        X3_COLOR_CODE_INSIDE = "X3_COLOR_CODE_INSIDE",
        Column8 = "Column8",
        X3_VIN_TYPE = "X3_VIN_TYPE",
        X3_FRAME_NO_MARK = "X3_FRAME_NO_MARK",
        Column9 = "Column9",
        Label11 = "Label11",
        Edit23 = "Edit23",
        Edit28 = "Edit28",
        Column10 = "Column10",
        PLAN_CODE = "PLAN_CODE",
        PLAN_DATE = "PLAN_DATE",
        PLAN_SEQ = "PLAN_SEQ",
        Label31 = "Label31",
        PLAN_SEQ_SUFFIX = "PLAN_SEQ_SUFFIX",
        Label1 = "Label1",
        V_V_QTYENTRY = "V_V_QTYENTRY",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column4',
        'Column5',
        'Column6',
        'Column7',
        'Column8',
        'Column9',
        'Column10',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get X3_ENG_FRM_TYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.X3_ENG_FRM_TYPE);
    }

    get X3_CHASSIS_NO_FROM(): FormControl {
        return this.getTableChildFormControl(MgControlName.X3_CHASSIS_NO_FROM);
    }

    get X3_CHASSIS_NO_TO(): FormControl {
        return this.getTableChildFormControl(MgControlName.X3_CHASSIS_NO_TO);
    }

    get PLAN_RESULT(): FormControl {
        return this.getTableChildFormControl(MgControlName.PLAN_RESULT);
    }

    get X3_EFM(): FormControl {
        return this.getTableChildFormControl(MgControlName.X3_EFM);
    }

    get X3_MTO_NAME(): FormControl {
        return this.getTableChildFormControl(MgControlName.X3_MTO_NAME);
    }

    get X3_MTO_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.X3_MTO_CODE);
    }

    get X3_COLOR_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.X3_COLOR_CODE);
    }

    get X3_COLOR_CODE_INSIDE(): FormControl {
        return this.getTableChildFormControl(MgControlName.X3_COLOR_CODE_INSIDE);
    }

    get X3_VIN_TYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.X3_VIN_TYPE);
    }

    get X3_FRAME_NO_MARK(): FormControl {
        return this.getTableChildFormControl(MgControlName.X3_FRAME_NO_MARK);
    }

    get Edit23(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit23);
    }

    get Edit28(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit28);
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

    get V_V_QTYENTRY(): FormControl {
        return this.fg.controls[MgControlName.V_V_QTYENTRY] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}