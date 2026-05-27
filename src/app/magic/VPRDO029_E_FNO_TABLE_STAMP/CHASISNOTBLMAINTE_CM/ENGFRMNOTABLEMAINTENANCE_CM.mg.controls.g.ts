import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ENGFRMNOTABLEMAINTENANCE_CM = "ENGFRMNOTABLEMAINTENANCE_CM",
        btnexit = "btnexit",
        S3_VIN_TYPE = "S3_VIN_TYPE",
        S3_GROUP = "S3_GROUP",
        S3_ENGFRMTYPE = "S3_ENGFRMTYPE",
        S3_PROD1ST_CHASSIS_NO = "S3_PROD1ST_CHASSIS_NO",
        S3_FRAME_NOMARK = "S3_FRAME_NOMARK",
        S3_START_DATE = "S3_START_DATE",
        S3_ABOLITION_DATE = "S3_ABOLITION_DATE",
        PR27_NEXT_CHASSIS_NO = "PR27_NEXT_CHASSIS_NO",
        PR27_LAST_PLAN_CODE = "PR27_LAST_PLAN_CODE",
        PR27_LAST_PRODINDDATE = "PR27_LAST_PRODINDDATE",
        PR27_LAST_PLAN_SEQ = "PR27_LAST_PLAN_SEQ",
        PR27_LAST_PLAN_SEQ_SUF = "PR27_LAST_PLAN_SEQ_SUF",
        Label1 = "Label1",
        SaveRowEditing = "SaveRowEditing",
        CancelRowEditing = "CancelRowEditing",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get S3_VIN_TYPE(): FormControl {
        return this.fg.controls[MgControlName.S3_VIN_TYPE] as FormControl;
    }

    get S3_GROUP(): FormControl {
        return this.fg.controls[MgControlName.S3_GROUP] as FormControl;
    }

    get S3_ENGFRMTYPE(): FormControl {
        return this.fg.controls[MgControlName.S3_ENGFRMTYPE] as FormControl;
    }

    get S3_PROD1ST_CHASSIS_NO(): FormControl {
        return this.fg.controls[MgControlName.S3_PROD1ST_CHASSIS_NO] as FormControl;
    }

    get S3_FRAME_NOMARK(): FormControl {
        return this.fg.controls[MgControlName.S3_FRAME_NOMARK] as FormControl;
    }

    get S3_START_DATE(): FormControl {
        return this.fg.controls[MgControlName.S3_START_DATE] as FormControl;
    }

    get S3_ABOLITION_DATE(): FormControl {
        return this.fg.controls[MgControlName.S3_ABOLITION_DATE] as FormControl;
    }

    get PR27_NEXT_CHASSIS_NO(): FormControl {
        return this.fg.controls[MgControlName.PR27_NEXT_CHASSIS_NO] as FormControl;
    }

    get PR27_LAST_PLAN_CODE(): FormControl {
        return this.fg.controls[MgControlName.PR27_LAST_PLAN_CODE] as FormControl;
    }

    get PR27_LAST_PRODINDDATE(): FormControl {
        return this.fg.controls[MgControlName.PR27_LAST_PRODINDDATE] as FormControl;
    }

    get PR27_LAST_PLAN_SEQ(): FormControl {
        return this.fg.controls[MgControlName.PR27_LAST_PLAN_SEQ] as FormControl;
    }

    get PR27_LAST_PLAN_SEQ_SUF(): FormControl {
        return this.fg.controls[MgControlName.PR27_LAST_PLAN_SEQ_SUF] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}