import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CONFIRM = "CONFIRM",
        Label1 = "Label1",
        Label2 = "Label2",
        Label3 = "Label3",
        V_DSP_PLAN_CODE_V = "V_DSP_PLAN_CODE_V",
        Label5 = "Label5",
        V_DSP_DATE_V = "V_DSP_DATE_V",
        V_DSP_PLAN_SEQ_V = "V_DSP_PLAN_SEQ_V",
        V_DSP_PLAN_SEQ_SUFFIX_V = "V_DSP_PLAN_SEQ_SUFFIX_V",
        Label9 = "Label9",
        V_DSP_MTO_CODE_V = "V_DSP_MTO_CODE_V",
        V_DSP_MTO_NAME_V = "V_DSP_MTO_NAME_V",
        V_DSP_COLOR_CODE_V = "V_DSP_COLOR_CODE_V",
        V_DSP_COLOR_CODEINSIDE_V = "V_DSP_COLOR_CODEINSIDE_V",
        Label14 = "Label14",
        V_DSP_PLAN_RESULT_V = "V_DSP_PLAN_RESULT_V",
        btn_Exit = "btn_Exit",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_DSP_PLAN_CODE_V(): FormControl {
        return this.fg.controls[MgControlName.V_DSP_PLAN_CODE_V] as FormControl;
    }

    get V_DSP_DATE_V(): FormControl {
        return this.fg.controls[MgControlName.V_DSP_DATE_V] as FormControl;
    }

    get V_DSP_PLAN_SEQ_V(): FormControl {
        return this.fg.controls[MgControlName.V_DSP_PLAN_SEQ_V] as FormControl;
    }

    get V_DSP_PLAN_SEQ_SUFFIX_V(): FormControl {
        return this.fg.controls[MgControlName.V_DSP_PLAN_SEQ_SUFFIX_V] as FormControl;
    }

    get V_DSP_MTO_CODE_V(): FormControl {
        return this.fg.controls[MgControlName.V_DSP_MTO_CODE_V] as FormControl;
    }

    get V_DSP_MTO_NAME_V(): FormControl {
        return this.fg.controls[MgControlName.V_DSP_MTO_NAME_V] as FormControl;
    }

    get V_DSP_COLOR_CODE_V(): FormControl {
        return this.fg.controls[MgControlName.V_DSP_COLOR_CODE_V] as FormControl;
    }

    get V_DSP_COLOR_CODEINSIDE_V(): FormControl {
        return this.fg.controls[MgControlName.V_DSP_COLOR_CODEINSIDE_V] as FormControl;
    }

    get V_DSP_PLAN_RESULT_V(): FormControl {
        return this.fg.controls[MgControlName.V_DSP_PLAN_RESULT_V] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}