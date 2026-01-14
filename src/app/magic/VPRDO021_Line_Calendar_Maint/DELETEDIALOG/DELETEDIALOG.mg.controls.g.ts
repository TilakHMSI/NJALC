import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DELETEDIALOG = "DELETEDIALOG",
        Label2 = "Label2",
        V_DELETE_MMYYYY_V = "V_DELETE_MMYYYY_V",
        OK_BUTTON_V = "OK_BUTTON_V",
        NO_BUTTON_V = "NO_BUTTON_V",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_DELETE_MMYYYY_V(): FormControl {
        return this.fg.controls[MgControlName.V_DELETE_MMYYYY_V] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}