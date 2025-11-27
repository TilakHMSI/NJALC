import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    AE_OFF_RESULT_ENTRY2 = "AE_OFF_RESULT_ENTRY2",
        Label2 = "Label2",
        S5_ENGFRMTYPE = "S5_ENGFRMTYPE",
        S5_CHASSIS_NO = "S5_CHASSIS_NO",
        Label3 = "Label3",
        S5_MTO_CODE = "S5_MTO_CODE",
        Label4 = "Label4",
        S5_PRODLINE = "S5_PRODLINE",
        Label5 = "Label5",
        S5_AFOFF_DATE = "S5_AFOFF_DATE",
        Label6 = "Label6",
        S5_AFOFF_TIME = "S5_AFOFF_TIME",
        Group13 = "Group13",
        Label15 = "Label15",
        Label14 = "Label14",
        Edit17 = "Edit17",
        V_PROGRESS1 = "V_PROGRESS1",
        Label18 = "Label18",
        V_PROGRESS2 = "V_PROGRESS2",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get S5_ENGFRMTYPE(): FormControl {
        return this.fg.controls[MgControlName.S5_ENGFRMTYPE] as FormControl;
    }

    get S5_CHASSIS_NO(): FormControl {
        return this.fg.controls[MgControlName.S5_CHASSIS_NO] as FormControl;
    }

    get S5_MTO_CODE(): FormControl {
        return this.fg.controls[MgControlName.S5_MTO_CODE] as FormControl;
    }

    get S5_PRODLINE(): FormControl {
        return this.fg.controls[MgControlName.S5_PRODLINE] as FormControl;
    }

    get S5_AFOFF_DATE(): FormControl {
        return this.fg.controls[MgControlName.S5_AFOFF_DATE] as FormControl;
    }

    get S5_AFOFF_TIME(): FormControl {
        return this.fg.controls[MgControlName.S5_AFOFF_TIME] as FormControl;
    }

    get Edit17(): FormControl {
        return this.fg.controls[MgControlName.Edit17] as FormControl;
    }

    get V_PROGRESS1(): FormControl {
        return this.fg.controls[MgControlName.V_PROGRESS1] as FormControl;
    }

    get V_PROGRESS2(): FormControl {
        return this.fg.controls[MgControlName.V_PROGRESS2] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}