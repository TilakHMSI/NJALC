import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    AFOFFRESULTENTRY = "AFOFFRESULTENTRY",
        Edit1 = "Edit1",
        Edit2 = "Edit2",
        btnexit = "btnexit",
        V_LOCATE_P = "V_LOCATE_P",
        Label4 = "Label4",
        Edit5 = "Edit5",
        Edit7 = "Edit7",
        Label8 = "Label8",
        MODE_V = "MODE_V",
        UN_CHASSIS_NO_V = "UN_CHASSIS_NO_V",
        RE_CHASSIS_NO_V = "RE_CHASSIS_NO_V",
        Label10 = "Label10",
        ENGINE_NO_V = "ENGINE_NO_V",
        Group14 = "Group14",
        Label15 = "Label15",
        Label16 = "Label16",
        Label17 = "Label17",
        Label18 = "Label18",
        V_DISP_FRAME_NO = "V_DISP_FRAME_NO",
        Edit20 = "Edit20",
        Edit21 = "Edit21",
        Edit22 = "Edit22",
        Edit23 = "Edit23",
        Sub1 = "Sub1",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit1(): FormControl {
        return this.fg.controls[MgControlName.Edit1] as FormControl;
    }

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
    }

    get Edit5(): FormControl {
        return this.fg.controls[MgControlName.Edit5] as FormControl;
    }

    get Edit7(): FormControl {
        return this.fg.controls[MgControlName.Edit7] as FormControl;
    }

    get MODE_V(): FormControl {
        return this.fg.controls[MgControlName.MODE_V] as FormControl;
    }

    get UN_CHASSIS_NO_V(): FormControl {
        return this.fg.controls[MgControlName.UN_CHASSIS_NO_V] as FormControl;
    }

    get RE_CHASSIS_NO_V(): FormControl {
        return this.fg.controls[MgControlName.RE_CHASSIS_NO_V] as FormControl;
    }

    get ENGINE_NO_V(): FormControl {
        return this.fg.controls[MgControlName.ENGINE_NO_V] as FormControl;
    }

    get V_DISP_FRAME_NO(): FormControl {
        return this.fg.controls[MgControlName.V_DISP_FRAME_NO] as FormControl;
    }

    get Edit20(): FormControl {
        return this.fg.controls[MgControlName.Edit20] as FormControl;
    }

    get Edit21(): FormControl {
        return this.fg.controls[MgControlName.Edit21] as FormControl;
    }

    get Edit22(): FormControl {
        return this.fg.controls[MgControlName.Edit22] as FormControl;
    }

    get Edit23(): FormControl {
        return this.fg.controls[MgControlName.Edit23] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}