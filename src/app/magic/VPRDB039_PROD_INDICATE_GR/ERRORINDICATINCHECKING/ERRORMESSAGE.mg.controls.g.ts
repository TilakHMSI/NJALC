import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ERRORMESSAGE = "ERRORMESSAGE",
        Label1 = "Label1",
        Label2 = "Label2",
        V_VSA_PLAN_CODE_AE = "V_VSA_PLAN_CODE_AE",
        Label4 = "Label4",
        V_VSA_DATE_AE = "V_VSA_DATE_AE",
        Label6 = "Label6",
        V_VSA_PLAN_CODE_AF = "V_VSA_PLAN_CODE_AF",
        Label8 = "Label8",
        V_VSA_DATE_AF = "V_VSA_DATE_AF",
        Label10 = "Label10",
        btn_Exit = "btn_Exit",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_VSA_PLAN_CODE_AE(): FormControl {
        return this.fg.controls[MgControlName.V_VSA_PLAN_CODE_AE] as FormControl;
    }

    get V_VSA_DATE_AE(): FormControl {
        return this.fg.controls[MgControlName.V_VSA_DATE_AE] as FormControl;
    }

    get V_VSA_PLAN_CODE_AF(): FormControl {
        return this.fg.controls[MgControlName.V_VSA_PLAN_CODE_AF] as FormControl;
    }

    get V_VSA_DATE_AF(): FormControl {
        return this.fg.controls[MgControlName.V_VSA_DATE_AF] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}