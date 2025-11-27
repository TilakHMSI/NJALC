import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ERROR_MESSAGE = "ERROR_MESSAGE",
        Label1 = "Label1",
        Label2 = "Label2",
        Image3 = "Image3",
        V_MESSAGE_P = "V_MESSAGE_P",
        btn_Exit = "btn_Exit",
        V_OK = "V_OK",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_MESSAGE_P(): FormControl {
        return this.fg.controls[MgControlName.V_MESSAGE_P] as FormControl;
    }

    get V_OK(): FormControl {
        return this.fg.controls[MgControlName.V_OK] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}