import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ERROR = "ERROR",
        V_DISP1_MSG_V = "V_DISP1_MSG_V",
        V_DISP2_MSG_V = "V_DISP2_MSG_V",
        Label3 = "Label3",
        pERR_PLAN_CODE_V = "pERR_PLAN_CODE_V",
        Label5 = "Label5",
        pERR_PLAN_DATE_V = "pERR_PLAN_DATE_V",
        btn_Exit = "btn_Exit",
       
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_DISP1_MSG_V(): FormControl {
        return this.fg.controls[MgControlName.V_DISP1_MSG_V] as FormControl;
    }

    get V_DISP2_MSG_V(): FormControl {
        return this.fg.controls[MgControlName.V_DISP2_MSG_V] as FormControl;
    }

    get pERR_PLAN_CODE_V(): FormControl {
        return this.fg.controls[MgControlName.pERR_PLAN_CODE_V] as FormControl;
    }

    get pERR_PLAN_DATE_V(): FormControl {
        return this.fg.controls[MgControlName.pERR_PLAN_DATE_V] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}