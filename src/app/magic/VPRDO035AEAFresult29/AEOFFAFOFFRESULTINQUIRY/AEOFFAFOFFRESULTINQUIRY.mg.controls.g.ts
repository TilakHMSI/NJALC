import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    AEOFFAFOFFRESULTINQUIRY = "AEOFFAFOFFRESULTINQUIRY",
        Table4 = "Table4",
        Column5 = "Column5",
        PRDO035_WORK_W2_AFOFF_DATE = "PRDO035_WORK_W2_AFOFF_DATE",
        Column6 = "Column6",
        PRDO035_WORK_W2_EFM = "PRDO035_WORK_W2_EFM",
        Column7 = "Column7",
        PRDO035_WORK_W2_MTO_CODE = "PRDO035_WORK_W2_MTO_CODE",
        Column8 = "Column8",
        PRDO035_WORK_W2_COLOR_CODE = "PRDO035_WORK_W2_COLOR_CODE",
        W2_COLOR_CODEINSIDE = "W2_COLOR_CODEINSIDE",
        Column9 = "Column9",
        V_OEM_DISP_V = "V_OEM_DISP_V",
        Column10 = "Column10",
        PRDO035_WORK_W2_ENGFRMTYPE = "PRDO035_WORK_W2_ENGFRMTYPE",
        Column11 = "Column11",
        PRDO035_WORK_W2_FROM = "PRDO035_WORK_W2_FROM",
        Column12 = "Column12",
        PRDO035_WORK_W2_TO = "PRDO035_WORK_W2_TO",
        Column13 = "Column13",
        PRDO035_WORK_W2_RESULT = "PRDO035_WORK_W2_RESULT",
        Column14 = "Column14",
        PRDO035_WORK_W2_MTO_NAME = "PRDO035_WORK_W2_MTO_NAME",
        Label1 = "Label1",
        Label2 = "Label2",
        V_CNT_RESULTTOTAL = "V_CNT_RESULTTOTAL",
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
        'Column14',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PRDO035_WORK_W2_AFOFF_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO035_WORK_W2_AFOFF_DATE);
    }

    get PRDO035_WORK_W2_EFM(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO035_WORK_W2_EFM);
    }

    get PRDO035_WORK_W2_MTO_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO035_WORK_W2_MTO_CODE);
    }

    get PRDO035_WORK_W2_COLOR_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO035_WORK_W2_COLOR_CODE);
    }

    get W2_COLOR_CODEINSIDE(): FormControl {
        return this.getTableChildFormControl(MgControlName.W2_COLOR_CODEINSIDE);
    }

    get V_OEM_DISP_V(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_OEM_DISP_V);
    }

    get PRDO035_WORK_W2_ENGFRMTYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO035_WORK_W2_ENGFRMTYPE);
    }

    get PRDO035_WORK_W2_FROM(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO035_WORK_W2_FROM);
    }

    get PRDO035_WORK_W2_TO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO035_WORK_W2_TO);
    }

    get PRDO035_WORK_W2_RESULT(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO035_WORK_W2_RESULT);
    }

    get PRDO035_WORK_W2_MTO_NAME(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRDO035_WORK_W2_MTO_NAME);
    }

    get V_CNT_RESULTTOTAL(): FormControl {
        return this.fg.controls[MgControlName.V_CNT_RESULTTOTAL] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}