import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    AF_OFF_RESULT_ENTRY2 = "AF_OFF_RESULT_ENTRY2",
        Table1 = "Table1",
        Column2 = "Column2",
        Edit11 = "Edit11",
        S5_CHASSIS_NO = "S5_CHASSIS_NO",
        Column3 = "Column3",
        S5_ENGTYPE = "S5_ENGTYPE",
        PRD005FRAMEENGINE_NO_S5_ENGNO = "PRD005FRAMEENGINE_NO_S5_ENGNO",
        Column4 = "Column4",
        S5_TIRE_LOT = "S5_TIRE_LOT",
        Column5 = "Column5",
        S5_MTO_CODE = "S5_MTO_CODE",
        Column6 = "Column6",
        S5_COLOR_CODE = "S5_COLOR_CODE",
        S5_COLOR_CODEINSIDE = "S5_COLOR_CODEINSIDE",
        Column7 = "Column7",
        S5_PRODLINE = "S5_PRODLINE",
        Column8 = "Column8",
        S5_AFOFF_DATE = "S5_AFOFF_DATE",
        Column9 = "Column9",
        S5_AFOFF_TIME = "S5_AFOFF_TIME",
        Column10 = "Column10",
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
        'Column9',
        'Column10',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit11(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit11);
    }

    get S5_CHASSIS_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.S5_CHASSIS_NO);
    }

    get S5_ENGTYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S5_ENGTYPE);
    }

    get PRD005FRAMEENGINE_NO_S5_ENGNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD005FRAMEENGINE_NO_S5_ENGNO);
    }

    get S5_TIRE_LOT(): FormControl {
        return this.getTableChildFormControl(MgControlName.S5_TIRE_LOT);
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

    get S5_PRODLINE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S5_PRODLINE);
    }

    get S5_AFOFF_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S5_AFOFF_DATE);
    }

    get S5_AFOFF_TIME(): FormControl {
        return this.getTableChildFormControl(MgControlName.S5_AFOFF_TIME);
    }

    get S5_MTO_NAME(): FormControl {
        return this.getTableChildFormControl(MgControlName.S5_MTO_NAME);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}