import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    MonthlyPRODUCTIONSCHDmainte = "MonthlyPRODUCTIONSCHDmainte",
        Label1 = "Label1",
        Label8 = "Label8",
        PLAN_CODE_V = "PLAN_CODE_V",
        Label9 = "Label9",
        PLAN_MONTH_YEAR_V = "PLAN_MONTH_YEAR_V",
        btnexit = "btnexit",
        V_LOCATE_P = "V_LOCATE_P",
        Label5 = "Label5",
        Edit6 = "Edit6",
        Edit7 = "Edit7",
        SubTaskCall = "SubTaskCall",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PLAN_CODE_V(): FormControl {
        return this.fg.controls[MgControlName.PLAN_CODE_V] as FormControl;
    }

    get PLAN_MONTH_YEAR_V(): FormControl {
        return this.fg.controls[MgControlName.PLAN_MONTH_YEAR_V] as FormControl;
    }

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
    }

    get Edit6(): FormControl {
        return this.fg.controls[MgControlName.Edit6] as FormControl;
    }

    get Edit7(): FormControl {
        return this.fg.controls[MgControlName.Edit7] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}