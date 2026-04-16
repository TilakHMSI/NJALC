import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ShiftwiseAEAFOffReport200 = "ShiftwiseAEAFOffReport200",
        Label1 = "Label1",
        Label4 = "Label4",
        Label5 = "Label5",
        Label6 = "Label6",
        Label2 = "Label2",
        VAEAF = "VAEAF",
        v_Shift = "v_Shift",
        v_Plant = "v_Plant",
        v_Date = "v_Date",
        Label7 = "Label7",
        v_Exec = "v_Exec",
        v_Exit = "v_Exit",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get VAEAF(): FormControl {
        return this.fg.controls[MgControlName.VAEAF] as FormControl;
    }

    get v_Shift(): FormControl {
        return this.fg.controls[MgControlName.v_Shift] as FormControl;
    }

    get v_Plant(): FormControl {
        return this.fg.controls[MgControlName.v_Plant] as FormControl;
    }

    get v_Date(): FormControl {
        return this.fg.controls[MgControlName.v_Date] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}