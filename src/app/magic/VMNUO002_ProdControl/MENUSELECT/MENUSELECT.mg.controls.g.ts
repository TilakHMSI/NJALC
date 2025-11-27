import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    MENUSELECT = "MENUSELECT",
        Label1 = "Label1",
        Label2 = "Label2",
        LOCATE_V = "LOCATE_V",
        OK = "OK",
        CANCEL = "CANCEL",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get LOCATE_V(): FormControl {
        return this.fg.controls[MgControlName.LOCATE_V] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}