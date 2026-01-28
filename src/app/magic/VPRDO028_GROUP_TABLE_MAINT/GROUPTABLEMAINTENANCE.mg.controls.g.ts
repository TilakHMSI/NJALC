import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    GROUPTABLEMAINTENANCE = "GROUPTABLEMAINTENANCE",
        Label7 = "Label7",
        V_LOCATE_P = "V_LOCATE_P",
        Label2 = "Label2",
        MODE_V = "MODE_V",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        GROUP_V = "GROUP_V",
        btnexit = "btnexit",
        Sub1 = "Sub1",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
    }

    get MODE_V(): FormControl {
        return this.fg.controls[MgControlName.MODE_V] as FormControl;
    }

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get GROUP_V(): FormControl {
        return this.fg.controls[MgControlName.GROUP_V] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}