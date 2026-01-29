import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    MESSAGE_PDI = "MESSAGE_PDI",
        Label1 = "Label1",
        Label2 = "Label2",
        Label3 = "Label3",
        Label13 = "Label13",
        Label12 = "Label12",
        Message2_0001 = "Message2_0001",
        Label6 = "Label6",
        CHASSIS_NO_DSP = "CHASSIS_NO_DSP",
        ENGINE_NODISP = "ENGINE_NODISP",
        Label7 = "Label7",
        Message1 = "Message1",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Message2_0001(): FormControl {
        return this.fg.controls[MgControlName.Message2_0001] as FormControl;
    }

    get CHASSIS_NO_DSP(): FormControl {
        return this.fg.controls[MgControlName.CHASSIS_NO_DSP] as FormControl;
    }

    get ENGINE_NODISP(): FormControl {
        return this.fg.controls[MgControlName.ENGINE_NODISP] as FormControl;
    }

    get Message1(): FormControl {
        return this.fg.controls[MgControlName.Message1] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}