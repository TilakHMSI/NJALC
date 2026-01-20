import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PRD026_INQUIRY = "PRD026_INQUIRY",
        Table1 = "Table1",
        Column2 = "Column2",
        PR26_ENGFRMTYPE = "PR26_ENGFRMTYPE",
        Column3 = "Column3",
        PR26_PROD1ST_CHASSIS_NO = "PR26_PROD1ST_CHASSIS_NO",
        Column4 = "Column4",
        Edit12 = "Edit12",
        Column5 = "Column5",
        Edit13 = "Edit13",
        Column6 = "Column6",
        PR26_START_DATE = "PR26_START_DATE",
        Column7 = "Column7",
        PR26_ABOLITION_DATE = "PR26_ABOLITION_DATE",
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

    get PR26_ENGFRMTYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PR26_ENGFRMTYPE);
    }

    get PR26_PROD1ST_CHASSIS_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PR26_PROD1ST_CHASSIS_NO);
    }

    get Edit12(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit12);
    }

    get Edit13(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit13);
    }

    get PR26_START_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PR26_START_DATE);
    }

    get PR26_ABOLITION_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PR26_ABOLITION_DATE);
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