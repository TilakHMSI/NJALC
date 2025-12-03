import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    AEOFF_RESULT_ENTRY = "AEOFF_RESULT_ENTRY",
        Label3 = "Label3",
        V_VDharamTime = "V_VDharamTime",
        Label2 = "Label2",
        Edit5 = "Edit5",
        Edit6 = "Edit6",
        AEOFF_RESULT_ENTRYHMSI = "AEOFF_RESULT_ENTRYHMSI",
        Label7 = "Label7",
        Edit8 = "Edit8",
        MODE_DSP = "MODE_DSP",
        Label9 = "Label9",
        ENGINE_NO_DSP = "ENGINE_NO_DSP",
        Label11 = "Label11",
        MISSION_DSP = "MISSION_DSP",
        btnexit = "btnexit",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_VDharamTime(): FormControl {
        return this.fg.controls[MgControlName.V_VDharamTime] as FormControl;
    }


    get Edit5(): FormControl {
        return this.fg.controls[MgControlName.Edit5] as FormControl;
    }

    get Edit6(): FormControl {
        return this.fg.controls[MgControlName.Edit6] as FormControl;
    }

    get Edit8(): FormControl {
        return this.fg.controls[MgControlName.Edit8] as FormControl;
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

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}