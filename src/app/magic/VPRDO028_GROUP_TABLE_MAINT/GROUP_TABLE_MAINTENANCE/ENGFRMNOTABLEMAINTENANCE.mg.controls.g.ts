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
        PR27_GROUP = "PR27_GROUP",
        Column3 = "Column3",
        PR27_GROUP_NAME = "PR27_GROUP_NAME",
        Column4 = "Column4",
        PR27_DIGIT = "PR27_DIGIT",
        Column5 = "Column5",
        PR27_PROD1ST_CHASSIS_NO = "PR27_PROD1ST_CHASSIS_NO",
        Column6 = "Column6",
        PR27_NEXT_CHASSIS_NO = "PR27_NEXT_CHASSIS_NO",
        Column7 = "Column7",
        PR27_LAST_PLAN_CODE = "PR27_LAST_PLAN_CODE",
        PR27_LAST_PRODINDDATE = "PR27_LAST_PRODINDDATE",
        PR27_LAST_PLAN_SEQ = "PR27_LAST_PLAN_SEQ",
        PR27_LAST_PLAN_SEQ_SUF = "PR27_LAST_PLAN_SEQ_SUF",
        Column17 = "Column17",
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
        'Column6',
        'Column7',
        'Column17',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PR27_GROUP(): FormControl {
        return this.getTableChildFormControl(MgControlName.PR27_GROUP);
    }

    get PR27_GROUP_NAME(): FormControl {
        return this.getTableChildFormControl(MgControlName.PR27_GROUP_NAME);
    }

    get PR27_DIGIT(): FormControl {
        return this.getTableChildFormControl(MgControlName.PR27_DIGIT);
    }

    get PR27_PROD1ST_CHASSIS_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PR27_PROD1ST_CHASSIS_NO);
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