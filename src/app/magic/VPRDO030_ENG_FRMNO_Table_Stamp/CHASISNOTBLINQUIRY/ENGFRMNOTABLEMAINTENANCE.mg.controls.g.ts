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
        Edit11 = "Edit11",
        Column3 = "Column3",
        PRD003Number_Control_S3_GROUP = "PRD003Number_Control_S3_GROUP",
        Column4 = "Column4",
        S3_ENGFRMTYPE = "S3_ENGFRMTYPE",
        Column5 = "Column5",
        S3_PROD1ST_CHASSIS_NO = "S3_PROD1ST_CHASSIS_NO",
        Column6 = "Column6",
        S3_FRAME_NOMARK = "S3_FRAME_NOMARK",
        Column7 = "Column7",
        S3_START_DATE = "S3_START_DATE",
        Column8 = "Column8",
        S3_ABOLITION_DATE = "S3_ABOLITION_DATE",
        Column9 = "Column9",
        PR27_NEXT_CHASSIS_NO = "PR27_NEXT_CHASSIS_NO",
        Column10 = "Column10",
        PR27_LAST_PLAN_CODE = "PR27_LAST_PLAN_CODE",
        PR27_LAST_PRODINDDATE = "PR27_LAST_PRODINDDATE",
        PR27_LAST_PLAN_SEQ = "PR27_LAST_PLAN_SEQ",
        PR27_LAST_PLAN_SEQ_SUF = "PR27_LAST_PLAN_SEQ_SUF",
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
        'Column10',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit11(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit11);
    }

    get PRD003Number_Control_S3_GROUP(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD003Number_Control_S3_GROUP);
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

    get PR27_NEXT_CHASSIS_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PR27_NEXT_CHASSIS_NO);
    }

    get PR27_LAST_PLAN_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PR27_LAST_PLAN_CODE);
    }

    get PR27_LAST_PRODINDDATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PR27_LAST_PRODINDDATE);
    }

    get PR27_LAST_PLAN_SEQ(): FormControl {
        return this.getTableChildFormControl(MgControlName.PR27_LAST_PLAN_SEQ);
    }

    get PR27_LAST_PLAN_SEQ_SUF(): FormControl {
        return this.getTableChildFormControl(MgControlName.PR27_LAST_PLAN_SEQ_SUF);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}