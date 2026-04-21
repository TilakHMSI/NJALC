import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    EVSM_BOMCODE = "EVSM_BOMCODE",
        Label1 = "Label1",
        V_MODEL_CODE = "V_MODEL_CODE",
        Label3 = "Label3",
        V_BOM_CODE = "V_BOM_CODE",
        B_SAVE = "B_SAVE",
        B_EXIT = "B_EXIT",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_MODEL_CODE(): FormControl {
        return this.fg.controls[MgControlName.V_MODEL_CODE] as FormControl;
    }

    get V_BOM_CODE(): FormControl {
        return this.fg.controls[MgControlName.V_BOM_CODE] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}