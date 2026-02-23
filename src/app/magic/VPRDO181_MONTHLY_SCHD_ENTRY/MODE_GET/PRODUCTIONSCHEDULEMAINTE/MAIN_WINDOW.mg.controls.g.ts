import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    MAIN_WINDOW = "MAIN_WINDOW",
        Table2 = "Table2",
        Column3 = "Column3",
        PRD004PLAN_TABLE_S4_PLAN_DATE = "PRD004PLAN_TABLE_S4_PLAN_DATE",
        Column4 = "Column4",
        SA_DAY_OF_THE_WEEK = "SA_DAY_OF_THE_WEEK",
        Column5 = "Column5",
        Label17 = "Label17",
        PRD004PLAN_TABLE_S4_WEEK_NO = "PRD004PLAN_TABLE_S4_WEEK_NO",
        PRD004PLAN_TABLE_S4_PLAN_SEQ = "PRD004PLAN_TABLE_S4_PLAN_SEQ",
        S4_PLAN_SEQ_SUFFIX = "S4_PLAN_SEQ_SUFFIX",
        Column6 = "Column6",
        Label14 = "Label14",
        Label15 = "Label15",
        PRD004PLAN_TABLE_S4_MTO_CODE = "PRD004PLAN_TABLE_S4_MTO_CODE",
        PRD004PLAN_TABLE_S4_COLOR_CODE = "PRD004PLAN_TABLE_S4_COLOR_CODE",
        S4_COLOR_CODEINSIDE = "S4_COLOR_CODEINSIDE",
        PRD001_S1_MTO_NAME = "PRD001_S1_MTO_NAME",
        Column7 = "Column7",
        S4_PLAN_RESULT = "S4_PLAN_RESULT",
        Column8 = "Column8",
        S4_PRODCATEGORY = "S4_PRODCATEGORY",
        Column9 = "Column9",
        S4_STAMP_CATEGORY = "S4_STAMP_CATEGORY",
        Column10 = "Column10",
        S4_EXIT_CATEGORY = "S4_EXIT_CATEGORY",
        Column11 = "Column11",
        S4_OEM_CATEGORY = "S4_OEM_CATEGORY",
        Column12 = "Column12",
        S4_REPAIR_CATEGORY = "S4_REPAIR_CATEGORY",
        Column13 = "Column13",
        Label16 = "Label16",
        Label18 = "Label18",
        PRD004PLAN_TABLE_S4_KD_LOT_NO = "PRD004PLAN_TABLE_S4_KD_LOT_NO",
        S4_IND1ST_CHASSIS_NOTYPE = "S4_IND1ST_CHASSIS_NOTYPE",
        S4_IND1ST_CHASSIS_NO = "S4_IND1ST_CHASSIS_NO",
        Label1 = "Label1",
        Group37 = "Group37",
        PLAN_DATA_V = "PLAN_DATA_V",
        SA_DAY_OF_THE_WEEK1 = "SA_DAY_OF_THE_WEEK1",
        PLAN_SEQ_V = "PLAN_SEQ_V",
        PLAN_SEQ_SUFFIX_V = "PLAN_SEQ_SUFFIX_V",
        MTO_CODE_V = "MTO_CODE_V",
        COLOR_CODE_V = "COLOR_CODE_V",
        COLOR_CODEINSIDE_V = "COLOR_CODEINSIDE_V",
        PLAN_RESULT_V = "PLAN_RESULT_V",
        PLAN_PROD_CATEGORY_V = "PLAN_PROD_CATEGORY_V",
        PLAN_STAMP_CATEGORY_V = "PLAN_STAMP_CATEGORY_V",
        PLAN_EXIT_CATEGORY_V = "PLAN_EXIT_CATEGORY_V",
        V_PLAN_OEM_CATEGORY_V = "V_PLAN_OEM_CATEGORY_V",
        PLAN_AUX_CATEGORY_V = "PLAN_AUX_CATEGORY_V",
        KD_LOT_NO_V = "KD_LOT_NO_V",
        Group52 = "Group52",
        Label53 = "Label53",
        PLAN_DATE_V2 = "PLAN_DATE_V2",
        SA_DAY_OF_THE_WEEK2 = "SA_DAY_OF_THE_WEEK2",
        PLAN_SEQ_V2 = "PLAN_SEQ_V2",
        PLAN_SEQ_SUFFIX_V2 = "PLAN_SEQ_SUFFIX_V2",
        PLAN_RESULT_V2 = "PLAN_RESULT_V2",
        PLAN_CODE_V = "PLAN_CODE_V",
        GO_BUTTOM = "GO_BUTTOM",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
        'Column4',
        'Column5',
        'Column6',
        'Column7',
        // 'Column8',
        // 'Column9',
        // 'Column10',
        // 'Column11',
        // 'Column12',
        'Column13',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PRD004PLAN_TABLE_S4_PLAN_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD004PLAN_TABLE_S4_PLAN_DATE);
    }

    get SA_DAY_OF_THE_WEEK(): FormControl {
        return this.getTableChildFormControl(MgControlName.SA_DAY_OF_THE_WEEK);
    }

    get PRD004PLAN_TABLE_S4_WEEK_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD004PLAN_TABLE_S4_WEEK_NO);
    }

    get PRD004PLAN_TABLE_S4_PLAN_SEQ(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD004PLAN_TABLE_S4_PLAN_SEQ);
    }

    get S4_PLAN_SEQ_SUFFIX(): FormControl {
        return this.getTableChildFormControl(MgControlName.S4_PLAN_SEQ_SUFFIX);
    }

    get PRD004PLAN_TABLE_S4_MTO_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD004PLAN_TABLE_S4_MTO_CODE);
    }

    get PRD004PLAN_TABLE_S4_COLOR_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD004PLAN_TABLE_S4_COLOR_CODE);
    }

    get S4_COLOR_CODEINSIDE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S4_COLOR_CODEINSIDE);
    }

    get PRD001_S1_MTO_NAME(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD001_S1_MTO_NAME);
    }

    get S4_PLAN_RESULT(): FormControl {
        return this.getTableChildFormControl(MgControlName.S4_PLAN_RESULT);
    }

    get S4_PRODCATEGORY(): FormControl {
        return this.getTableChildFormControl(MgControlName.S4_PRODCATEGORY);
    }

    get S4_STAMP_CATEGORY(): FormControl {
        return this.getTableChildFormControl(MgControlName.S4_STAMP_CATEGORY);
    }

    get S4_EXIT_CATEGORY(): FormControl {
        return this.getTableChildFormControl(MgControlName.S4_EXIT_CATEGORY);
    }

    get S4_OEM_CATEGORY(): FormControl {
        return this.getTableChildFormControl(MgControlName.S4_OEM_CATEGORY);
    }

    get S4_REPAIR_CATEGORY(): FormControl {
        return this.getTableChildFormControl(MgControlName.S4_REPAIR_CATEGORY);
    }

    get PRD004PLAN_TABLE_S4_KD_LOT_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD004PLAN_TABLE_S4_KD_LOT_NO);
    }

    get S4_IND1ST_CHASSIS_NOTYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S4_IND1ST_CHASSIS_NOTYPE);
    }

    get S4_IND1ST_CHASSIS_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.S4_IND1ST_CHASSIS_NO);
    }

    get PLAN_DATA_V(): FormControl {
        return this.fg.controls[MgControlName.PLAN_DATA_V] as FormControl;
    }

    get SA_DAY_OF_THE_WEEK1(): FormControl {
        return this.fg.controls[MgControlName.SA_DAY_OF_THE_WEEK1] as FormControl;
    }

    get PLAN_SEQ_V(): FormControl {
        return this.fg.controls[MgControlName.PLAN_SEQ_V] as FormControl;
    }

    get PLAN_SEQ_SUFFIX_V(): FormControl {
        return this.fg.controls[MgControlName.PLAN_SEQ_SUFFIX_V] as FormControl;
    }

    get MTO_CODE_V(): FormControl {
        return this.fg.controls[MgControlName.MTO_CODE_V] as FormControl;
    }

    get COLOR_CODE_V(): FormControl {
        return this.fg.controls[MgControlName.COLOR_CODE_V] as FormControl;
    }

    get COLOR_CODEINSIDE_V(): FormControl {
        return this.fg.controls[MgControlName.COLOR_CODEINSIDE_V] as FormControl;
    }

    get PLAN_RESULT_V(): FormControl {
        return this.fg.controls[MgControlName.PLAN_RESULT_V] as FormControl;
    }

    get PLAN_PROD_CATEGORY_V(): FormControl {
        return this.fg.controls[MgControlName.PLAN_PROD_CATEGORY_V] as FormControl;
    }

    get PLAN_STAMP_CATEGORY_V(): FormControl {
        return this.fg.controls[MgControlName.PLAN_STAMP_CATEGORY_V] as FormControl;
    }

    get PLAN_EXIT_CATEGORY_V(): FormControl {
        return this.fg.controls[MgControlName.PLAN_EXIT_CATEGORY_V] as FormControl;
    }

    get V_PLAN_OEM_CATEGORY_V(): FormControl {
        return this.fg.controls[MgControlName.V_PLAN_OEM_CATEGORY_V] as FormControl;
    }

    get PLAN_AUX_CATEGORY_V(): FormControl {
        return this.fg.controls[MgControlName.PLAN_AUX_CATEGORY_V] as FormControl;
    }

    get KD_LOT_NO_V(): FormControl {
        return this.fg.controls[MgControlName.KD_LOT_NO_V] as FormControl;
    }

    get PLAN_DATE_V2(): FormControl {
        return this.fg.controls[MgControlName.PLAN_DATE_V2] as FormControl;
    }

    get SA_DAY_OF_THE_WEEK2(): FormControl {
        return this.fg.controls[MgControlName.SA_DAY_OF_THE_WEEK2] as FormControl;
    }

    get PLAN_SEQ_V2(): FormControl {
        return this.fg.controls[MgControlName.PLAN_SEQ_V2] as FormControl;
    }

    get PLAN_SEQ_SUFFIX_V2(): FormControl {
        return this.fg.controls[MgControlName.PLAN_SEQ_SUFFIX_V2] as FormControl;
    }

    get PLAN_RESULT_V2(): FormControl {
        return this.fg.controls[MgControlName.PLAN_RESULT_V2] as FormControl;
    }

    get PLAN_CODE_V(): FormControl {
        return this.fg.controls[MgControlName.PLAN_CODE_V] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}