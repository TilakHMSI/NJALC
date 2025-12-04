import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PDIOFFRESULTENTRY = "PDIOFFRESULTENTRY",
        Table1 = "Table1",
        Column2 = "Column2",
        Edit9 = "Edit9",
        S5_CHASSIS_NO = "S5_CHASSIS_NO",
        Column3 = "Column3",
        PRD005FRAMEENGINE_NO_S5_KEY_NO = "PRD005FRAMEENGINE_NO_S5_KEY_NO",
        Column4 = "Column4",
        S5_MTO_CODE = "S5_MTO_CODE",
        Column5 = "Column5",
        S5_COLOR_CODE = "S5_COLOR_CODE",
        S5_COLOR_CODEINSIDE = "S5_COLOR_CODEINSIDE",
        Column6 = "Column6",
        S5_RE_VQ_DATE = "S5_RE_VQ_DATE",
        Column7 = "Column7",
        S5_RE_VQ_TIME = "S5_RE_VQ_TIME",
        Column8 = "Column8",
        S5_MTO_NAME = "S5_MTO_NAME",
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
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit9(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit9);
    }

    get S5_CHASSIS_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.S5_CHASSIS_NO);
    }

    get PRD005FRAMEENGINE_NO_S5_KEY_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD005FRAMEENGINE_NO_S5_KEY_NO);
    }

    get S5_MTO_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S5_MTO_CODE);
    }

    get S5_COLOR_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S5_COLOR_CODE);
    }

    get S5_COLOR_CODEINSIDE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S5_COLOR_CODEINSIDE);
    }

    get S5_RE_VQ_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S5_RE_VQ_DATE);
    }

    get S5_RE_VQ_TIME(): FormControl {
        return this.getTableChildFormControl(MgControlName.S5_RE_VQ_TIME);
    }

    get S5_MTO_NAME(): FormControl {
        return this.getTableChildFormControl(MgControlName.S5_MTO_NAME);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}