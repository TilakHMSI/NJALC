import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    SHIPPINGRESULTINQUIRY = "SHIPPINGRESULTINQUIRY",
        Table4 = "Table4",
        Column5 = "Column5",
        PRDO036_WORK_W3_DATE = "PRDO036_WORK_W3_DATE",
        Column6 = "Column6",
        PRDO036_WORK_W3_EFM = "PRDO036_WORK_W3_EFM",
        Column7 = "Column7",
        PRDO036_WORK_W3_MTO_CODE = "PRDO036_WORK_W3_MTO_CODE",
        Column8 = "Column8",
        PRDO036_WORK_W3_COLOR_CODE = "PRDO036_WORK_W3_COLOR_CODE",
        W3_COLOR_CODEINSIDE = "W3_COLOR_CODEINSIDE",
        Column9 = "Column9",
        PRDO036_WORK_W3_ENGFRMTYPE = "PRDO036_WORK_W3_ENGFRMTYPE",
        Column10 = "Column10",
        PRDO036_WORK_W3_FROM = "PRDO036_WORK_W3_FROM",
        Column11 = "Column11",
        PRDO036_WORK_W3_TO = "PRDO036_WORK_W3_TO",
        Column12 = "Column12",
        PRDO036_WORK_W3_RESULT = "PRDO036_WORK_W3_RESULT",
        Column13 = "Column13",
        PRDO036_WORK_W3_MTO_NAME = "PRDO036_WORK_W3_MTO_NAME",
        Label1 = "Label1",
        Label2 = "Label2",
        V_CNT_RESULTTOTAL_V = "V_CNT_RESULTTOTAL_V",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
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

    get PRDO036_WORK_W3_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO036_WORK_W3_DATE);
    }

    get PRDO036_WORK_W3_EFM(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO036_WORK_W3_EFM);
    }

    get PRDO036_WORK_W3_MTO_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO036_WORK_W3_MTO_CODE);
    }

    get PRDO036_WORK_W3_COLOR_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO036_WORK_W3_COLOR_CODE);
    }

    get W3_COLOR_CODEINSIDE(): FormControl {
        return this.getTableChildFormControl(MgControlName.W3_COLOR_CODEINSIDE);
    }

    get PRDO036_WORK_W3_ENGFRMTYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO036_WORK_W3_ENGFRMTYPE);
    }

    get PRDO036_WORK_W3_FROM(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO036_WORK_W3_FROM);
    }

    get PRDO036_WORK_W3_TO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO036_WORK_W3_TO);
    }

    get PRDO036_WORK_W3_RESULT(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO036_WORK_W3_RESULT);
    }

    get PRDO036_WORK_W3_MTO_NAME(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO036_WORK_W3_MTO_NAME);
    }

    get V_CNT_RESULTTOTAL_V(): FormControl {
        return this.fg.controls[MgControlName.V_CNT_RESULTTOTAL_V] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}