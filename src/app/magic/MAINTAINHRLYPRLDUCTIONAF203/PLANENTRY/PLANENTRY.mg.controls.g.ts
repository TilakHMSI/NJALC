import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PLANENTRY = "PLANENTRY",
        btnAdd = "btnAdd",
        Table1 = "Table1",
        Column2 = "Column2",
        SRNO = "SRNO",
        Column3 = "Column3",
        TIME_F = "TIME_F",
        Column4 = "Column4",
        TIME_T = "TIME_T",
        Column5 = "Column5",
        V_v_TOT_TIME = "V_v_TOT_TIME",
        Column6 = "Column6",
        V_v_GRND_TIME = "V_v_GRND_TIME",
        Column7 = "Column7",
        HRLY_PLN = "HRLY_PLN",
        Column8 = "Column8",
        HOURLY_PROD_PLAN_COMM_PLN = "HOURLY_PROD_PLAN_COMM_PLN",
        Column30 = "Column30",
        btnEdit = "btnEdit",
        btnDelete = "btnDelete",
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
        'Column30',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get SRNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.SRNO);
    }

    get TIME_F(): FormControl {
        return this.getTableChildFormControl(MgControlName.TIME_F);
    }

    get TIME_T(): FormControl {
        return this.getTableChildFormControl(MgControlName.TIME_T);
    }

    get V_v_TOT_TIME(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_v_TOT_TIME);
    }

    get V_v_GRND_TIME(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_v_GRND_TIME);
    }

    get HRLY_PLN(): FormControl {
        return this.getTableChildFormControl(MgControlName.HRLY_PLN);
    }

    get HOURLY_PROD_PLAN_COMM_PLN(): FormControl {
        return this.getTableChildFormControl(MgControlName.HOURLY_PROD_PLAN_COMM_PLN);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}