import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CHASISNOTABLEINQUIRY = "CHASISNOTABLEINQUIRY",
        Table1 = "Table1",
        Column2 = "Column2",
        V_S3_VIN_TYPE = "V_S3_VIN_TYPE",
        Column3 = "Column3",
        V_S3_ENGFRMTYPE = "V_S3_ENGFRMTYPE",
        Column4 = "Column4",
        V_S3_PROD1ST_CHASSIS_NO = "V_S3_PROD1ST_CHASSIS_NO",
        Column5 = "Column5",
        V_S3_FRAME_NOMARK = "V_S3_FRAME_NOMARK",
        Column6 = "Column6",
        V_S3_LAST_SHASSIS_NO = "V_S3_LAST_SHASSIS_NO",
        Column7 = "Column7",
        V_LAST_PRODINDDATE_V = "V_LAST_PRODINDDATE_V",
        V_S3_LAST_PLAN_SEQ = "V_S3_LAST_PLAN_SEQ",
        V_S3_LAST_PLAN_SEQ_SUF = "V_S3_LAST_PLAN_SEQ_SUF",
        Column8 = "Column8",
        V_START_DATE_V = "V_START_DATE_V",
        Column9 = "Column9",
        V_ABOLITION_DATE_V = "V_ABOLITION_DATE_V",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
        'Column5',
        'Column6',
        'Column7',
        'Column8',
        'Column9',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_S3_VIN_TYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_S3_VIN_TYPE);
    }

    get V_S3_ENGFRMTYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_S3_ENGFRMTYPE);
    }

    get V_S3_PROD1ST_CHASSIS_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_S3_PROD1ST_CHASSIS_NO);
    }

    get V_S3_FRAME_NOMARK(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_S3_FRAME_NOMARK);
    }

    get V_S3_LAST_SHASSIS_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_S3_LAST_SHASSIS_NO);
    }

    get V_LAST_PRODINDDATE_V(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_LAST_PRODINDDATE_V);
    }

    get V_S3_LAST_PLAN_SEQ(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_S3_LAST_PLAN_SEQ);
    }

    get V_S3_LAST_PLAN_SEQ_SUF(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_S3_LAST_PLAN_SEQ_SUF);
    }

    get V_START_DATE_V(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_START_DATE_V);
    }

    get V_ABOLITION_DATE_V(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_ABOLITION_DATE_V);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}