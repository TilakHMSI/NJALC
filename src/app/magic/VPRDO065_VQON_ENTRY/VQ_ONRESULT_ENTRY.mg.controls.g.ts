import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VQ_ONRESULT_ENTRY = "VQ_ONRESULT_ENTRY",
        V_LOCATE_P = "V_LOCATE_P",
        Label2 = "Label2",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        VQON_RESULT_ENTRY = "VQON_RESULT_ENTRY",
        Label5 = "Label5",
        Label7 = "Label7",
        Edit12 = "Edit12",
        Edit13 = "Edit13",
        Label8 = "Label8",
        Edit14 = "Edit14",
        Label9 = "Label9",
        Edit15 = "Edit15",
        Label10 = "Label10",
        Edit16 = "Edit16",
        Label6 = "Label6",
        Label11 = "Label11",
        V_PROGRESS = "V_PROGRESS",
        Label18 = "Label18",
        MODE_DSP = "MODE_DSP",
        Label22 = "Label22",
        CHASSIS_NO_DSP = "CHASSIS_NO_DSP",
        Label19 = "Label19",
        Label23 = "Label23",
        Edit21 = "Edit21",
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

    get Edit12(): FormControl {
        return this.fg.controls[MgControlName.Edit12] as FormControl;
    }

    get Edit13(): FormControl {
        return this.fg.controls[MgControlName.Edit13] as FormControl;
    }

    get Edit14(): FormControl {
        return this.fg.controls[MgControlName.Edit14] as FormControl;
    }

    get Edit15(): FormControl {
        return this.fg.controls[MgControlName.Edit15] as FormControl;
    }

    get Edit16(): FormControl {
        return this.fg.controls[MgControlName.Edit16] as FormControl;
    }

    get V_PROGRESS(): FormControl {
        return this.fg.controls[MgControlName.V_PROGRESS] as FormControl;
    }

    get MODE_DSP(): FormControl {
        return this.fg.controls[MgControlName.MODE_DSP] as FormControl;
    }

    get CHASSIS_NO_DSP(): FormControl {
        return this.fg.controls[MgControlName.CHASSIS_NO_DSP] as FormControl;
    }

    get Edit21(): FormControl {
        return this.fg.controls[MgControlName.Edit21] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}