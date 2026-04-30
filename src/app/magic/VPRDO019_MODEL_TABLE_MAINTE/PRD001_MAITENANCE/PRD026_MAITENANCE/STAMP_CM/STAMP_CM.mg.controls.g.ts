import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    STAMP_CM = "STAMP_CM",
        PR26_ENGFRMTYPE = "PR26_ENGFRMTYPE",
        PR26_PROD1ST_CHASSIS_NO = "PR26_PROD1ST_CHASSIS_NO",
        PRINTED_NUMBER = "PRINTED_NUMBER",
        Edit14 = "Edit14",
        Edit15 = "Edit15",
        PR26_START_DATE = "PR26_START_DATE",
        PR26_ABOLITION_DATE = "PR26_ABOLITION_DATE",
        PR27_GROUP = "PR27_GROUP",
        PR27_GROUP_NAME = "PR27_GROUP_NAME",
        btnSave = "btnSave",
        btnexit = "btnexit",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PR26_ENGFRMTYPE(): FormControl {
        return this.fg.controls[MgControlName.PR26_ENGFRMTYPE] as FormControl;
    }

    get PR26_PROD1ST_CHASSIS_NO(): FormControl {
        return this.fg.controls[MgControlName.PR26_PROD1ST_CHASSIS_NO] as FormControl;
    }

    get PRINTED_NUMBER(): FormControl {
        return this.fg.controls[MgControlName.PRINTED_NUMBER] as FormControl;
    }

    get Edit14(): FormControl {
        return this.fg.controls[MgControlName.Edit14] as FormControl;
    }

    get Edit15(): FormControl {
        return this.fg.controls[MgControlName.Edit15] as FormControl;
    }

    get PR26_START_DATE(): FormControl {
        return this.fg.controls[MgControlName.PR26_START_DATE] as FormControl;
    }

    get PR26_ABOLITION_DATE(): FormControl {
        return this.fg.controls[MgControlName.PR26_ABOLITION_DATE] as FormControl;
    }

    get PR27_GROUP(): FormControl {
        return this.fg.controls[MgControlName.PR27_GROUP] as FormControl;
    }

    get PR27_GROUP_NAME(): FormControl {
        return this.fg.controls[MgControlName.PR27_GROUP_NAME] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}