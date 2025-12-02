import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CONFIRM = "CONFIRM",
        Edit1 = "Edit1",
        Edit2 = "Edit2",
        Label3 = "Label3",
        Label4 = "Label4",
        V_DSP_PLAN_CODE_V = "V_DSP_PLAN_CODE_V",
        Label6 = "Label6",
        V_DSP_DATE_V = "V_DSP_DATE_V",
        V_DSP_PLAN_SEQ_V = "V_DSP_PLAN_SEQ_V",
        V_DSP_PLAN_SEQ_SUFFIX_V = "V_DSP_PLAN_SEQ_SUFFIX_V",
        Label10 = "Label10",
        V_DSP_MTO_CODE_V = "V_DSP_MTO_CODE_V",
        Label12 = "Label12",
        V_DSP_MTO_NAME_V = "V_DSP_MTO_NAME_V",
        V_DSP_COLOR_CODE_V = "V_DSP_COLOR_CODE_V",
        V_DSP_COLOR_CODEINSIDE_V = "V_DSP_COLOR_CODEINSIDE_V",
        Label16 = "Label16",
        V_DSP_PLAN_RESULT_V = "V_DSP_PLAN_RESULT_V",
        Label18 = "Label18",
        V_STAMPING_GROUP_V = "V_STAMPING_GROUP_V",
        Label20 = "Label20",
        V_STAMPING_INFORMATION1_V = "V_STAMPING_INFORMATION1_V",
        V_STAMPING_INFORMATION2_V = "V_STAMPING_INFORMATION2_V",
        btn_Exit = "btn_Exit",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit1(): FormControl {
        return this.fg.controls[MgControlName.Edit1] as FormControl;
    }

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

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

    get V_STAMPING_GROUP_V(): FormControl {
        return this.fg.controls[MgControlName.V_STAMPING_GROUP_V] as FormControl;
    }

    get V_STAMPING_INFORMATION1_V(): FormControl {
        return this.fg.controls[MgControlName.V_STAMPING_INFORMATION1_V] as FormControl;
    }

    get V_STAMPING_INFORMATION2_V(): FormControl {
        return this.fg.controls[MgControlName.V_STAMPING_INFORMATION2_V] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}