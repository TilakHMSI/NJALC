import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ATVCOUPONPRINT = "ATVCOUPONPRINT",
        V_LOCATE_P = "V_LOCATE_P",
        Label2 = "Label2",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        Label5 = "Label5",
        ENGFRMTYPE_V = "ENGFRMTYPE_V",
        CHASSIS_NO_V = "CHASSIS_NO_V",
        EXEC_BUTTON = "EXEC_BUTTON",
        CANCEL_BUTTON = "CANCEL_BUTTON",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
    }

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get ENGFRMTYPE_V(): FormControl {
        return this.fg.controls[MgControlName.ENGFRMTYPE_V] as FormControl;
    }

    get CHASSIS_NO_V(): FormControl {
        return this.fg.controls[MgControlName.CHASSIS_NO_V] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}