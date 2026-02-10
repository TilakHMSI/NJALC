import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PUMOTOROFFRESULTENTRY = "PUMOTOROFFRESULTENTRY",
        V_LOCATE_P = "V_LOCATE_P",
        Label2 = "Label2",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        btnexit = "btnexit",
        Sub1 = "Sub1",
        Label5 = "Label5",
        Edit6 = "Edit6",
        MODE_DSP = "MODE_DSP",
        Label7 = "Label7",
        ENGINE_NO_DSP = "ENGINE_NO_DSP",
        Label8 = "Label8",
        MISSION_DSP = "MISSION_DSP",
        LastScanned = "LastScanned",
        LastScannedEngine = "LastScannedEngine",
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

    get Edit6(): FormControl {
        return this.fg.controls[MgControlName.Edit6] as FormControl;
    }

    get MODE_DSP(): FormControl {
        return this.fg.controls[MgControlName.MODE_DSP] as FormControl;
    }

    get ENGINE_NO_DSP(): FormControl {
        return this.fg.controls[MgControlName.ENGINE_NO_DSP] as FormControl;
    }

    get MISSION_DSP(): FormControl {
        return this.fg.controls[MgControlName.MISSION_DSP] as FormControl;
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