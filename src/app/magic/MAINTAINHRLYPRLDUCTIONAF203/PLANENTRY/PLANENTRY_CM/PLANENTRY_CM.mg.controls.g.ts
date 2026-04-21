import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PLANENTRY_CM = "PLANENTRY_CM",
        SRNO = "SRNO",
        btnexit = "btnexit",
        TIME_F = "TIME_F",
        TIME_T = "TIME_T",
        v_TOT_TIME = "v_TOT_TIME",
        HRLY_PLN = "HRLY_PLN",
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
        btnSave = "btnSave",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get SRNO(): FormControl {
        return this.fg.controls[MgControlName.SRNO] as FormControl;
    }

    get TIME_F(): FormControl {
        return this.fg.controls[MgControlName.TIME_F] as FormControl;
    }

    get TIME_T(): FormControl {
        return this.fg.controls[MgControlName.TIME_T] as FormControl;
    }

    get v_TOT_TIME(): FormControl {
        return this.fg.controls[MgControlName.v_TOT_TIME] as FormControl;
    }

    get HRLY_PLN(): FormControl {
        return this.fg.controls[MgControlName.HRLY_PLN] as FormControl;
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