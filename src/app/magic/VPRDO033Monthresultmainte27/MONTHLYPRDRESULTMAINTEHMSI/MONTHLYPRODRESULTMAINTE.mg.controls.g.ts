import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    MONTHLYPRODRESULTMAINTE = "MONTHLYPRODRESULTMAINTE",
        Table1 = "Table1",
        Column2 = "Column2",
        S7_MTO_CODE = "S7_MTO_CODE",
        PRD001_S1_MTO_NAME = "PRD001_S1_MTO_NAME",
        Column3 = "Column3",
        S7_COLOR_CODE = "S7_COLOR_CODE",
        S7_COLOR_CODEINSIDE = "S7_COLOR_CODEINSIDE",
        V_OEM_DISP_V = "V_OEM_DISP_V",
        Column4 = "Column4",
        S7_LAST_MONTH_PROGRESS = "S7_LAST_MONTH_PROGRESS",
        Column5 = "Column5",
        S7_M_AFOFF_PLAN_RESULT = "S7_M_AFOFF_PLAN_RESULT",
        Column6 = "Column6",
        S7_M_AFOFF_RESULT = "S7_M_AFOFF_RESULT",
        Column7 = "Column7",
        V_TOTAL_PROGRESS_V = "V_TOTAL_PROGRESS_V",
        Column8 = "Column8",
        S7_M_WEOFF_RESULT = "S7_M_WEOFF_RESULT",
        Column9 = "Column9",
        S7_M_VQOFF_RESULT = "S7_M_VQOFF_RESULT",
        Column10 = "Column10",
        S7_M_PACKING_RESULT = "S7_M_PACKING_RESULT",
        Column11 = "Column11",
        S7_M_SHIPPING_RESULT = "S7_M_SHIPPING_RESULT",
        Column12 = "Column12",
        S7_M_RETURN_RESULT = "S7_M_RETURN_RESULT",
        S7_NON_VQOFF_STOCK = "S7_NON_VQOFF_STOCK",
        Column13 = "Column13",
        S7_M_RESHIPPING_RESULT = "S7_M_RESHIPPING_RESULT",
        S7_VQOFF_STOCK = "S7_VQOFF_STOCK",
        Column14 = "Column14",
        S7_M_EXCOUTGORESULT = "S7_M_EXCOUTGORESULT",
        S7_PACKING_STOCK = "S7_PACKING_STOCK",
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
        'Column14',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get S7_MTO_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S7_MTO_CODE);
    }

    get PRD001_S1_MTO_NAME(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD001_S1_MTO_NAME);
    }

    get S7_COLOR_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S7_COLOR_CODE);
    }

    get S7_COLOR_CODEINSIDE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S7_COLOR_CODEINSIDE);
    }

    get V_OEM_DISP_V(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_OEM_DISP_V);
    }

    get S7_LAST_MONTH_PROGRESS(): FormControl {
        return this.getTableChildFormControl(MgControlName.S7_LAST_MONTH_PROGRESS);
    }

    get S7_M_AFOFF_PLAN_RESULT(): FormControl {
        return this.getTableChildFormControl(MgControlName.S7_M_AFOFF_PLAN_RESULT);
    }

    get S7_M_AFOFF_RESULT(): FormControl {
        return this.getTableChildFormControl(MgControlName.S7_M_AFOFF_RESULT);
    }

    get V_TOTAL_PROGRESS_V(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_TOTAL_PROGRESS_V);
    }

    get S7_M_WEOFF_RESULT(): FormControl {
        return this.getTableChildFormControl(MgControlName.S7_M_WEOFF_RESULT);
    }

    get S7_M_VQOFF_RESULT(): FormControl {
        return this.getTableChildFormControl(MgControlName.S7_M_VQOFF_RESULT);
    }

    get S7_M_PACKING_RESULT(): FormControl {
        return this.getTableChildFormControl(MgControlName.S7_M_PACKING_RESULT);
    }

    get S7_M_SHIPPING_RESULT(): FormControl {
        return this.getTableChildFormControl(MgControlName.S7_M_SHIPPING_RESULT);
    }

    get S7_M_RETURN_RESULT(): FormControl {
        return this.getTableChildFormControl(MgControlName.S7_M_RETURN_RESULT);
    }

    get S7_NON_VQOFF_STOCK(): FormControl {
        return this.getTableChildFormControl(MgControlName.S7_NON_VQOFF_STOCK);
    }

    get S7_M_RESHIPPING_RESULT(): FormControl {
        return this.getTableChildFormControl(MgControlName.S7_M_RESHIPPING_RESULT);
    }

    get S7_VQOFF_STOCK(): FormControl {
        return this.getTableChildFormControl(MgControlName.S7_VQOFF_STOCK);
    }

    get S7_M_EXCOUTGORESULT(): FormControl {
        return this.getTableChildFormControl(MgControlName.S7_M_EXCOUTGORESULT);
    }

    get S7_PACKING_STOCK(): FormControl {
        return this.getTableChildFormControl(MgControlName.S7_PACKING_STOCK);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}