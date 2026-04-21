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
        EnterRowEditing = "EnterRowEditing",
        SaveRowEditing = "SaveRowEditing",
        CancelRowEditing = "CancelRowEditing",
        btnDelete = "btnDelete",
        V_v_TAB = "V_v_TAB",
        Label18 = "Label18",
        BR_TIM_F_1 = "BR_TIM_F_1",
        Label21 = "Label21",
        BR_TIM_T_1 = "BR_TIM_T_1",
        Label26 = "Label26",
        V_v_BR_TOT_TIME_1 = "V_v_BR_TOT_TIME_1",
        Label17 = "Label17",
        BR_TIM_F_2 = "BR_TIM_F_2",
        Label22 = "Label22",
        BR_TIM_T_2 = "BR_TIM_T_2",
        Label25 = "Label25",
        V_v_BR_TOT_TIME_2 = "V_v_BR_TOT_TIME_2",
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

    get BR_TIM_F_1(): FormControl {
        return this.fg.controls[MgControlName.BR_TIM_F_1] as FormControl;
    }

    get BR_TIM_T_1(): FormControl {
        return this.fg.controls[MgControlName.BR_TIM_T_1] as FormControl;
    }

    get V_v_BR_TOT_TIME_1(): FormControl {
        return this.fg.controls[MgControlName.V_v_BR_TOT_TIME_1] as FormControl;
    }

    get BR_TIM_F_2(): FormControl {
        return this.fg.controls[MgControlName.BR_TIM_F_2] as FormControl;
    }

    get BR_TIM_T_2(): FormControl {
        return this.fg.controls[MgControlName.BR_TIM_T_2] as FormControl;
    }

    get V_v_BR_TOT_TIME_2(): FormControl {
        return this.fg.controls[MgControlName.V_v_BR_TOT_TIME_2] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}