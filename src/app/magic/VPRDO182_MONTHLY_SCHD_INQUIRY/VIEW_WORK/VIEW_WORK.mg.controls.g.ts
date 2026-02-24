import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VIEW_WORK = "VIEW_WORK",
        Table3 = "Table3",
        Column4 = "Column4",
        Label15 = "Label15",
        VPRDO182_WORK_W182_PLAN_DATE = "VPRDO182_WORK_W182_PLAN_DATE",
        Column5 = "Column5",
        SA_DAY_OF_THE_WEEK = "SA_DAY_OF_THE_WEEK",
        Column6 = "Column6",
        VPRDO182_WORK_W182_WEEK_NO = "VPRDO182_WORK_W182_WEEK_NO",
        VPRDO182_WORK_W182_PLAN_SEQ = "VPRDO182_WORK_W182_PLAN_SEQ",
        W182_PLAN_SEQ_SUFFIX = "W182_PLAN_SEQ_SUFFIX",
        Column7 = "Column7",
        VPRDO182_WORK_W182_MTO_CODE = "VPRDO182_WORK_W182_MTO_CODE",
        VPRDO182_WORK_W182_COLOR_CODE = "VPRDO182_WORK_W182_COLOR_CODE",
        W182_COLOR_CODEINSIDE = "W182_COLOR_CODEINSIDE",
        PRD001_S1_MTO_NAME = "PRD001_S1_MTO_NAME",
        Column8 = "Column8",
        VPRDO182_WORK_W182_PLAN_RESULT = "VPRDO182_WORK_W182_PLAN_RESULT",
        Column9 = "Column9",
        W182_PRODCATEGORY = "W182_PRODCATEGORY",
        Column10 = "Column10",
        W182_STAMP_CATEGORY = "W182_STAMP_CATEGORY",
        Column11 = "Column11",
        W182_EXIT_CATEGORY = "W182_EXIT_CATEGORY",
        Column12 = "Column12",
        W182_OEM_CATEGORY = "W182_OEM_CATEGORY",
        Column13 = "Column13",
        W182_REPAIR_CATEGORY = "W182_REPAIR_CATEGORY",
        Column14 = "Column14",
        VPRDO182_WORK_W182_KD_LOT_NO = "VPRDO182_WORK_W182_KD_LOT_NO",
        W182_IND1ST_CHASSIS_NOTYPE = "W182_IND1ST_CHASSIS_NOTYPE",
        W182_IND1ST_CHASSIS_NO = "W182_IND1ST_CHASSIS_NO",
        Label1 = "Label1",
        V_MONTHLY_TOTAL_V = "V_MONTHLY_TOTAL_V",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column4',
        'Column5',
        'Column6',
        'Column7',
        'Column8',
        // 'Column9',
        // 'Column10',
        // 'Column11',
        // 'Column12',
        // 'Column13',
        'Column14',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get VPRDO182_WORK_W182_PLAN_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.VPRDO182_WORK_W182_PLAN_DATE);
    }

    get SA_DAY_OF_THE_WEEK(): FormControl {
        return this.getTableChildFormControl(MgControlName.SA_DAY_OF_THE_WEEK);
    }

    get VPRDO182_WORK_W182_WEEK_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.VPRDO182_WORK_W182_WEEK_NO);
    }

    get VPRDO182_WORK_W182_PLAN_SEQ(): FormControl {
        return this.getTableChildFormControl(MgControlName.VPRDO182_WORK_W182_PLAN_SEQ);
    }

    get W182_PLAN_SEQ_SUFFIX(): FormControl {
        return this.getTableChildFormControl(MgControlName.W182_PLAN_SEQ_SUFFIX);
    }

    get VPRDO182_WORK_W182_MTO_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.VPRDO182_WORK_W182_MTO_CODE);
    }

    get VPRDO182_WORK_W182_COLOR_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.VPRDO182_WORK_W182_COLOR_CODE);
    }

    get W182_COLOR_CODEINSIDE(): FormControl {
        return this.getTableChildFormControl(MgControlName.W182_COLOR_CODEINSIDE);
    }

    get PRD001_S1_MTO_NAME(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD001_S1_MTO_NAME);
    }

    get VPRDO182_WORK_W182_PLAN_RESULT(): FormControl {
        return this.getTableChildFormControl(MgControlName.VPRDO182_WORK_W182_PLAN_RESULT);
    }

    get W182_PRODCATEGORY(): FormControl {
        return this.getTableChildFormControl(MgControlName.W182_PRODCATEGORY);
    }

    get W182_STAMP_CATEGORY(): FormControl {
        return this.getTableChildFormControl(MgControlName.W182_STAMP_CATEGORY);
    }

    get W182_EXIT_CATEGORY(): FormControl {
        return this.getTableChildFormControl(MgControlName.W182_EXIT_CATEGORY);
    }

    get W182_OEM_CATEGORY(): FormControl {
        return this.getTableChildFormControl(MgControlName.W182_OEM_CATEGORY);
    }

    get W182_REPAIR_CATEGORY(): FormControl {
        return this.getTableChildFormControl(MgControlName.W182_REPAIR_CATEGORY);
    }

    get VPRDO182_WORK_W182_KD_LOT_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.VPRDO182_WORK_W182_KD_LOT_NO);
    }

    get W182_IND1ST_CHASSIS_NOTYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.W182_IND1ST_CHASSIS_NOTYPE);
    }

    get W182_IND1ST_CHASSIS_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.W182_IND1ST_CHASSIS_NO);
    }

    get V_MONTHLY_TOTAL_V(): FormControl {
        return this.fg.controls[MgControlName.V_MONTHLY_TOTAL_V] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}