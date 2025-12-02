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
        V_KEY_NO_V = "V_KEY_NO_V",
        Label4 = "Label4",
        KEY_NO_V1 = "KEY_NO_V1",
        Label6 = "Label6",
        Label7 = "Label7",
        OK_BUTTON = "OK_BUTTON",
        NO_BUTTON = "NO_BUTTON",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_KEY_NO_V(): FormControl {
        return this.fg.controls[MgControlName.V_KEY_NO_V] as FormControl;
    }

    get KEY_NO_V1(): FormControl {
        return this.fg.controls[MgControlName.KEY_NO_V1] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}