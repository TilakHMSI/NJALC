import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    LINECALENDARINQUIRY = "LINECALENDARINQUIRY",
        V_LOCATE_P = "V_LOCATE_P",
        Label2 = "Label2",
        Label5 = "Label5",
        PLAN_CODE_V = "PLAN_CODE_V",
        MMYYYY_V = "MMYYYY_V",
        Label6 = "Label6",
        V_OPERATION_DAYS_V = "V_OPERATION_DAYS_V",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        Label10 = "Label10",
        Label11 = "Label11",
        Label12 = "Label12",
        SubTaskForm = "SubTaskForm",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
    }

    get PLAN_CODE_V(): FormControl {
        return this.fg.controls[MgControlName.PLAN_CODE_V] as FormControl;
    }

    get MMYYYY_V(): FormControl {
        return this.fg.controls[MgControlName.MMYYYY_V] as FormControl;
    }

    get V_OPERATION_DAYS_V(): FormControl {
        return this.fg.controls[MgControlName.V_OPERATION_DAYS_V] as FormControl;
    }

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}