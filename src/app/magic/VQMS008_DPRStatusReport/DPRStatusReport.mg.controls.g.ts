import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DPRStatusReport = "DPRStatusReport",
        Label1 = "Label1",
        Label3 = "Label3",
        v_Date = "v_Date",
        Label5 = "Label5",
        v_Shift = "v_Shift",
        Label6 = "Label6",
        v_Exec = "v_Exec",
        v_Exit = "v_Exit",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get v_Date(): FormControl {
        return this.fg.controls[MgControlName.v_Date] as FormControl;
    }

    get v_Shift(): FormControl {
        return this.fg.controls[MgControlName.v_Shift] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}