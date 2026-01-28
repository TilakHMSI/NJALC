import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ENGFRMNOTABLEMAINTENANCE = "ENGFRMNOTABLEMAINTENANCE",
        Table1 = "Table1",
        Column2 = "Column2",
        S3_VIN_TYPE = "S3_VIN_TYPE",
        Column3 = "Column3",
        S3_ENGFRMTYPE = "S3_ENGFRMTYPE",
        Column4 = "Column4",
        S3_PROD1ST_CHASSIS_NO = "S3_PROD1ST_CHASSIS_NO",
        Column5 = "Column5",
        S3_FRAME_NOMARK = "S3_FRAME_NOMARK",
        Column8 = "Column8",
        S3_START_DATE = "S3_START_DATE",
        Column9 = "Column9",
        S3_ABOLITION_DATE = "S3_ABOLITION_DATE",
        Column6 = "Column6",
        S3_LAST_CHASSIS_NO = "S3_LAST_CHASSIS_NO",
        Column7 = "Column7",
        S3_LAST_PRODINDDATE = "S3_LAST_PRODINDDATE",
        S3_LAST_PLAN_SEQ = "S3_LAST_PLAN_SEQ",
        S3_LAST_PLAN_SEQ_SUFFIX = "S3_LAST_PLAN_SEQ_SUFFIX",
        Column20 = "Column20",
        EnterRowEditing = "EnterRowEditing",
        SaveRowEditing = "SaveRowEditing",
        CancelRowEditing = "CancelRowEditing",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
        'Column5',
        'Column8',
        'Column9',
        'Column6',
        'Column7',
        'Column20',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get S3_VIN_TYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S3_VIN_TYPE);
    }

    get S3_ENGFRMTYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S3_ENGFRMTYPE);
    }

    get S3_PROD1ST_CHASSIS_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.S3_PROD1ST_CHASSIS_NO);
    }

    get S3_FRAME_NOMARK(): FormControl {
        return this.getTableChildFormControl(MgControlName.S3_FRAME_NOMARK);
    }

    get S3_START_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S3_START_DATE);
    }

    get S3_ABOLITION_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S3_ABOLITION_DATE);
    }

    get S3_LAST_CHASSIS_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.S3_LAST_CHASSIS_NO);
    }

    get S3_LAST_PRODINDDATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S3_LAST_PRODINDDATE);
    }

    get S3_LAST_PLAN_SEQ(): FormControl {
        return this.getTableChildFormControl(MgControlName.S3_LAST_PLAN_SEQ);
    }

    get S3_LAST_PLAN_SEQ_SUFFIX(): FormControl {
        return this.getTableChildFormControl(MgControlName.S3_LAST_PLAN_SEQ_SUFFIX);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}