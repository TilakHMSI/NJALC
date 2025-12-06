import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ERROR = "ERROR",
        V_DISP_MESSAGE_P = "V_DISP_MESSAGE_P",
        V_DISP_MESSAGE_2_P = "V_DISP_MESSAGE_2_P",
        Label3 = "Label3",
        V_ERR_PLAN_CODE_V = "V_ERR_PLAN_CODE_V",
        Label5 = "Label5",
        V_ERR_DATE_V = "V_ERR_DATE_V",
        btn_Exit = "btn_Exit",
      
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_DISP_MESSAGE_P(): FormControl {
        return this.fg.controls[MgControlName.V_DISP_MESSAGE_P] as FormControl;
    }

    get V_DISP_MESSAGE_2_P(): FormControl {
        return this.fg.controls[MgControlName.V_DISP_MESSAGE_2_P] as FormControl;
    }

    get V_ERR_PLAN_CODE_V(): FormControl {
        return this.fg.controls[MgControlName.V_ERR_PLAN_CODE_V] as FormControl;
    }

    get V_ERR_DATE_V(): FormControl {
        return this.fg.controls[MgControlName.V_ERR_DATE_V] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}