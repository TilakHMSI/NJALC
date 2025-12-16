import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    AF_OFF_RESULT_ENTRY = "AF_OFF_RESULT_ENTRY",
        Label3 = "Label3",
        V_VDharamTime = "V_VDharamTime",
        Edit1 = "Edit1",
        Edit2 = "Edit2",
        V_LOCATE_P = "V_LOCATE_P",
        Label6 = "Label6",
        Edit7 = "Edit7",
        AFOFF_RESULT_ENTRY = "AFOFF_RESULT_ENTRY",
        Group25 = "Group25",
        Label26 = "Label26",
        Label27 = "Label27",
        Label28 = "Label28",
        Label29 = "Label29",
        Edit30 = "Edit30",
        Edit31 = "Edit31",
        Edit32 = "Edit32",
        Edit33 = "Edit33",
        Edit34 = "Edit34",
        Group18 = "Group18",
        Label20 = "Label20",
        Label19 = "Label19",
        Edit22 = "Edit22",
        V_PROGRESS1_V = "V_PROGRESS1_V",
        Label23 = "Label23",
        V_PROGRESS2_V = "V_PROGRESS2_V",
        Label9 = "Label9",
        Edit10 = "Edit10",
        MODE_V = "MODE_V",
        Label11 = "Label11",
        TYRE_LOT_V = "TYRE_LOT_V",
        Label12 = "Label12",
        CHASSIS_NO_V = "CHASSIS_NO_V",
        Label13 = "Label13",
        ENGINE_NO_V = "ENGINE_NO_V",
        btnexit = "btnexit",
        LastScanned = "LastScanned",
}
export enum MgCustomProperties {
    AF_OFF_RESULT_ENTRY_FormName = 'AF_OFF_RESULT_ENTRY~FormName',
}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_VDharamTime(): FormControl {
        return this.fg.controls[MgControlName.V_VDharamTime] as FormControl;
    }

    get Edit1(): FormControl {
        return this.fg.controls[MgControlName.Edit1] as FormControl;
    }

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
    }

    get Edit7(): FormControl {
        return this.fg.controls[MgControlName.Edit7] as FormControl;
    }

    get Edit30(): FormControl {
        return this.fg.controls[MgControlName.Edit30] as FormControl;
    }

    get Edit31(): FormControl {
        return this.fg.controls[MgControlName.Edit31] as FormControl;
    }

    get Edit32(): FormControl {
        return this.fg.controls[MgControlName.Edit32] as FormControl;
    }

    get Edit33(): FormControl {
        return this.fg.controls[MgControlName.Edit33] as FormControl;
    }

    get Edit34(): FormControl {
        return this.fg.controls[MgControlName.Edit34] as FormControl;
    }

    get Edit22(): FormControl {
        return this.fg.controls[MgControlName.Edit22] as FormControl;
    }

    get V_PROGRESS1_V(): FormControl {
        return this.fg.controls[MgControlName.V_PROGRESS1_V] as FormControl;
    }

    get V_PROGRESS2_V(): FormControl {
        return this.fg.controls[MgControlName.V_PROGRESS2_V] as FormControl;
    }

    get Edit10(): FormControl {
        return this.fg.controls[MgControlName.Edit10] as FormControl;
    }

    get MODE_V(): FormControl {
        return this.fg.controls[MgControlName.MODE_V] as FormControl;
    }

    get TYRE_LOT_V(): FormControl {
        return this.fg.controls[MgControlName.TYRE_LOT_V] as FormControl;
    }

    get CHASSIS_NO_V(): FormControl {
        return this.fg.controls[MgControlName.CHASSIS_NO_V] as FormControl;
    }

    get ENGINE_NO_V(): FormControl {
        return this.fg.controls[MgControlName.ENGINE_NO_V] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}