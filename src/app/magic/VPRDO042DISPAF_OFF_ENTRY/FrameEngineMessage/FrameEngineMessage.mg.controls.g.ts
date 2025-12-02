import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    FrameEngineMessage = "FrameEngineMessage",
        Label1 = "Label1",
        Label3 = "Label3",
        Label6 = "Label6",
        Label2 = "Label2",
        Label4 = "Label4",
        CHASSIS_NO_V = "CHASSIS_NO_V",
        Label7 = "Label7",
        S5_ENGTYPE = "S5_ENGTYPE",
        VOK_0001 = "VOK_0001",
        Label8 = "Label8",
        S5_ENGNO = "S5_ENGNO",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get CHASSIS_NO_V(): FormControl {
        return this.fg.controls[MgControlName.CHASSIS_NO_V] as FormControl;
    }

    get S5_ENGTYPE(): FormControl {
        return this.fg.controls[MgControlName.S5_ENGTYPE] as FormControl;
    }

    get S5_ENGNO(): FormControl {
        return this.fg.controls[MgControlName.S5_ENGNO] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}