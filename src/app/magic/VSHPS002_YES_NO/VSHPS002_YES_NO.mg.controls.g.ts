import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VSHPS002_YES_NO = "VSHPS002_YES_NO",
        V_DATE_FLAG_P = "V_DATE_FLAG_P",
        Label2 = "Label2",
        V_SOURCE_ID = "V_SOURCE_ID",
        Edit4 = "Edit4",
        Label6 = "Label6",
        Edit5 = "Edit5",
        SUMMY = "SUMMY",
        EXEC_BUTTON = "EXEC_BUTTON",
        CANCEL_BUTTON = "CANCEL_BUTTON",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_DATE_FLAG_P(): FormControl {
        return this.fg.controls[MgControlName.V_DATE_FLAG_P] as FormControl;
    }

    get V_SOURCE_ID(): FormControl {
        return this.fg.controls[MgControlName.V_SOURCE_ID] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get Edit5(): FormControl {
        return this.fg.controls[MgControlName.Edit5] as FormControl;
    }

    get SUMMY(): FormControl {
        return this.fg.controls[MgControlName.SUMMY] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}