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
        Label3 = "Label3",
        Label13 = "Label13",
        Label12 = "Label12",
        Label7 = "Label7",
        Label4 = "Label4",
        Label5 = "Label5",
        V_VFrame = "V_VFrame",
        Edit10 = "Edit10",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_VFrame(): FormControl {
        return this.fg.controls[MgControlName.V_VFrame] as FormControl;
    }

    get Edit10(): FormControl {
        return this.fg.controls[MgControlName.Edit10] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}