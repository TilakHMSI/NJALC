import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    MODELGUIDE = "MODELGUIDE",
        V_SELECT_V = "V_SELECT_V",
        Label1 = "Label1",
        Label2 = "Label2",
        V_DISP_FLG_V = "V_DISP_FLG_V",
        Sub1 = "Sub1",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_SELECT_V(): FormControl {
        return this.fg.controls[MgControlName.V_SELECT_V] as FormControl;
    }

    get V_DISP_FLG_V(): FormControl {
        return this.fg.controls[MgControlName.V_DISP_FLG_V] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}