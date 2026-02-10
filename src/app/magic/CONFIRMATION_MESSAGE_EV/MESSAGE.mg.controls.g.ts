import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    MESSAGE = "MESSAGE",
        Label1 = "Label1",
        Label2 = "Label2",
        Label12 = "Label12",
        Label7 = "Label7",
        Label4 = "Label4",
        Edit10 = "Edit10",
        V_VFrame = "V_VFrame",
        Label5 = "Label5",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit10(): FormControl {
        return this.fg.controls[MgControlName.Edit10] as FormControl;
    }

    get V_VFrame(): FormControl {
        return this.fg.controls[MgControlName.V_VFrame] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}