import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PRD003_GUIDE = "PRD003_GUIDE",
        Table1 = "Table1",
        Column2 = "Column2",
        V_S3_ENGFRMTYPE = "V_S3_ENGFRMTYPE",
        Column3 = "Column3",
        V_S3_PROD1ST_CHASSIS_NO = "V_S3_PROD1ST_CHASSIS_NO",
        Label12 = "Label12",
        Column4 = "Column4",
        Edit13 = "Edit13",
        Column5 = "Column5",
        Edit14 = "Edit14",
        Column6 = "Column6",
        V_START_DATE_V = "V_START_DATE_V",
        Column7 = "Column7",
        V_ABOLITION_DATE_V = "V_ABOLITION_DATE_V",
        Column8 = "Column8",
        PR27_GROUP = "PR27_GROUP",
        Column9 = "Column9",
        PR27_GROUP_NAME = "PR27_GROUP_NAME",
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

    get V_S3_ENGFRMTYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_S3_ENGFRMTYPE);
    }

    get V_S3_PROD1ST_CHASSIS_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_S3_PROD1ST_CHASSIS_NO);
    }

    get Edit13(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit13);
    }

    get Edit14(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit14);
    }

    get V_START_DATE_V(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_START_DATE_V);
    }

    get V_ABOLITION_DATE_V(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_ABOLITION_DATE_V);
    }

    get PR27_GROUP(): FormControl {
        return this.getTableChildFormControl(MgControlName.PR27_GROUP);
    }

    get PR27_GROUP_NAME(): FormControl {
        return this.getTableChildFormControl(MgControlName.PR27_GROUP_NAME);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}