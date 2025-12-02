import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    SELECTPRD010Open = "SELECTPRD010Open",
        Label1 = "Label1",
        V_SA_PLAN_CODE = "V_SA_PLAN_CODE",
        Label3 = "Label3",
        V_SA_DATE = "V_SA_DATE",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_SA_PLAN_CODE(): FormControl {
        return this.fg.controls[MgControlName.V_SA_PLAN_CODE] as FormControl;
    }

    get V_SA_DATE(): FormControl {
        return this.fg.controls[MgControlName.V_SA_DATE] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}