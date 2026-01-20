import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    COLOR_TABLE_MAINTENANCE = "COLOR_TABLE_MAINTENANCE",
        MODE_V = "MODE_V",
        V_LOCATE_P = "V_LOCATE_P",
        Label2 = "Label2",
        Label5 = "Label5",
        COLOR_CODE_V = "COLOR_CODE_V",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        Label7 = "Label7",
        Sub1 = "Sub1",
        btnexit = "btnexit",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get MODE_V(): FormControl {
        return this.fg.controls[MgControlName.MODE_V] as FormControl;
    }

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
    }

    get COLOR_CODE_V(): FormControl {
        return this.fg.controls[MgControlName.COLOR_CODE_V] as FormControl;
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