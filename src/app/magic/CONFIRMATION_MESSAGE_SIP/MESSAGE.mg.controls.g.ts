import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    MESSAGE = "MESSAGE",
        Label2 = "Label2",
        Label5 = "Label5",
        Label12 = "Label12",
        V_VFrame = "V_VFrame",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_VFrame(): FormControl {
        return this.fg.controls[MgControlName.V_VFrame] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}