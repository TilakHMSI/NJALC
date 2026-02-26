import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CHARGEROFFRESULTENTRY = "CHARGEROFFRESULTENTRY",
        V_LOCATE_P = "V_LOCATE_P",
        Label2 = "Label2",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        btnexit = "btnexit",
        Sub1 = "Sub1",
        Edit5 = "Edit5",
        MODE_DSP = "MODE_DSP",
        Label6 = "Label6",
        Label7 = "Label7",
        FRAME_NO_DSP = "FRAME_NO_DSP",
        Label9 = "Label9",
        BATTERY_NO_DSP = "BATTERY_NO_DSP",
        LastScanned = "LastScanned",
        LastScannedEngine = "LastScannedEngine",
        BATTERY_KEY = "BATTERY_KEY",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
    }

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get Edit5(): FormControl {
        return this.fg.controls[MgControlName.Edit5] as FormControl;
    }

    get MODE_DSP(): FormControl {
        return this.fg.controls[MgControlName.MODE_DSP] as FormControl;
    }

    get FRAME_NO_DSP(): FormControl {
        return this.fg.controls[MgControlName.FRAME_NO_DSP] as FormControl;
    }

    get BATTERY_NO_DSP(): FormControl {
        return this.fg.controls[MgControlName.BATTERY_NO_DSP] as FormControl;
    }

    get LastScanned(): FormControl {
        return this.fg.controls[MgControlName.LastScanned] as FormControl;
    }

    get LastScannedEngine(): FormControl {
        return this.fg.controls[MgControlName.LastScannedEngine] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}