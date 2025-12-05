import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PDI_OFFRESULT_ENTRY = "PDI_OFFRESULT_ENTRY",
        Label1 = "Label1",
        Edit2 = "Edit2",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        PDIOFF_RESULT_ENTRY = "PDIOFF_RESULT_ENTRY",
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
        Label19 = "Label19",
        PASS_DESC = "PASS_DESC",
        CHASSIS_NO_DSP = "CHASSIS_NO_DSP",
        Label21 = "Label21",
        Label22 = "Label22",
        ENGINE_NODISP = "ENGINE_NODISP",
        btnexit = "btnexit",
}
export enum MgCustomProperties {
    PDI_OFFRESULT_ENTRY_FormName = 'PDI_OFFRESULT_ENTRY~FormName',
}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
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

    get PASS_DESC(): FormControl {
        return this.fg.controls[MgControlName.PASS_DESC] as FormControl;
    }

    get CHASSIS_NO_DSP(): FormControl {
        return this.fg.controls[MgControlName.CHASSIS_NO_DSP] as FormControl;
    }

    get ENGINE_NODISP(): FormControl {
        return this.fg.controls[MgControlName.ENGINE_NODISP] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}