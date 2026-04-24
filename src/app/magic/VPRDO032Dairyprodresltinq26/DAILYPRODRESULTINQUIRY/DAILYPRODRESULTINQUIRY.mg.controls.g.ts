import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DAILYPRODRESULTINQUIRY = "DAILYPRODRESULTINQUIRY",
        Table1 = "Table1",
        Column2 = "Column2",
        PRDO032_WORK_W1_MTO_CODE = "PRDO032_WORK_W1_MTO_CODE",
        PRDO032_WORK_W1_MTO_NAME = "PRDO032_WORK_W1_MTO_NAME",
        Column3 = "Column3",
        PRDO032_WORK_W1_COLOR_CODE = "PRDO032_WORK_W1_COLOR_CODE",
        W1_COLOR_CODEINSIDE = "W1_COLOR_CODEINSIDE",
        V_OEM_DISP_V = "V_OEM_DISP_V",
        Column4 = "Column4",
        PRDO032_WORK_W1_LAST_PROGRESS = "PRDO032_WORK_W1_LAST_PROGRESS",
        Column5 = "Column5",
        PRDO032_WORK_W1_CNT_PLAN_DATE = "PRDO032_WORK_W1_CNT_PLAN_DATE",
        Column6 = "Column6",
        PRDO032_WORK_W1_CNT_AFOFF_DATE = "PRDO032_WORK_W1_CNT_AFOFF_DATE",
        Column7 = "Column7",
        PRDO032_WORK_W1_PROGRESS = "PRDO032_WORK_W1_PROGRESS",
        Column8 = "Column8",
        PRDO032_WORK_W1_TOTAL_PROGRESS = "PRDO032_WORK_W1_TOTAL_PROGRESS",
        Column9 = "Column9",
        PRDO032_WORK_W1_CNT_WEOFF = "PRDO032_WORK_W1_CNT_WEOFF",
        Column10 = "Column10",
        PRDO032_WORK_W1_CNT_VQOFF_DATE = "PRDO032_WORK_W1_CNT_VQOFF_DATE",
        Column11 = "Column11",
        W1_CNT_PACKING_DATE = "W1_CNT_PACKING_DATE",
        Column12 = "Column12",
        W1_CNT_SHIPPING_DATE = "W1_CNT_SHIPPING_DATE",
        W1_CNT_RETURN_DATE = "W1_CNT_RETURN_DATE",
        Column13 = "Column13",
        W1_CNT_RESHIPPING_DATE = "W1_CNT_RESHIPPING_DATE",
        W1_CNT_EXCOUTGODATE = "W1_CNT_EXCOUTGODATE",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
        'Column5',
        'Column6',
        'Column7',
        'Column8',
        'Column9',
        'Column10',
        'Column11',
        'Column12',
        'Column13',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PRDO032_WORK_W1_MTO_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO032_WORK_W1_MTO_CODE);
    }

    get PRDO032_WORK_W1_MTO_NAME(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO032_WORK_W1_MTO_NAME);
    }

    get PRDO032_WORK_W1_COLOR_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO032_WORK_W1_COLOR_CODE);
    }

    get W1_COLOR_CODEINSIDE(): FormControl {
        return this.getTableChildFormControl(MgControlName.W1_COLOR_CODEINSIDE);
    }

    get V_OEM_DISP_V(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_OEM_DISP_V);
    }

    get PRDO032_WORK_W1_LAST_PROGRESS(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO032_WORK_W1_LAST_PROGRESS);
    }

    get PRDO032_WORK_W1_CNT_PLAN_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO032_WORK_W1_CNT_PLAN_DATE);
    }

    get PRDO032_WORK_W1_CNT_AFOFF_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO032_WORK_W1_CNT_AFOFF_DATE);
    }

    get PRDO032_WORK_W1_PROGRESS(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO032_WORK_W1_PROGRESS);
    }

    get PRDO032_WORK_W1_TOTAL_PROGRESS(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO032_WORK_W1_TOTAL_PROGRESS);
    }

    get PRDO032_WORK_W1_CNT_WEOFF(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO032_WORK_W1_CNT_WEOFF);
    }

    get PRDO032_WORK_W1_CNT_VQOFF_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO032_WORK_W1_CNT_VQOFF_DATE);
    }

    get W1_CNT_PACKING_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.W1_CNT_PACKING_DATE);
    }

    get W1_CNT_SHIPPING_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.W1_CNT_SHIPPING_DATE);
    }

    get W1_CNT_RETURN_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.W1_CNT_RETURN_DATE);
    }

    get W1_CNT_RESHIPPING_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.W1_CNT_RESHIPPING_DATE);
    }

    get W1_CNT_EXCOUTGODATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.W1_CNT_EXCOUTGODATE);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}