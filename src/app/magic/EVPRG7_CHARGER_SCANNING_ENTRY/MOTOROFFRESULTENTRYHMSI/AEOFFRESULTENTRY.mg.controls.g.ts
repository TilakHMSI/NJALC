import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    AEOFFRESULTENTRY = "AEOFFRESULTENTRY",
        Table1 = "Table1",
        Column2 = "Column2",
        S5_ENGFRMTYPE = "S5_ENGFRMTYPE",
        S5_CHASSIS_NO = "S5_CHASSIS_NO",
        Column3 = "Column3",
        S5_MTO_CODE = "S5_MTO_CODE",
        Column4 = "Column4",
        S5_PRODLINE = "S5_PRODLINE",
        Column5 = "Column5",
        S5_AFOFF_DATE = "S5_AFOFF_DATE",
        Column6 = "Column6",
        S5_AFOFF_TIME = "S5_AFOFF_TIME",
        Column7 = "Column7",
        S5_MTO_NAME = "S5_MTO_NAME",
        Sub2 = "Sub2",
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
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get S5_ENGFRMTYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S5_ENGFRMTYPE);
    }

    get S5_CHASSIS_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.S5_CHASSIS_NO);
    }

    get S5_MTO_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S5_MTO_CODE);
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