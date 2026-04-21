import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    List = "List",
        Table1 = "Table1",
        Column2 = "Column2",
        S3_ENGFRMTYPE = "S3_ENGFRMTYPE",
        Column3 = "Column3",
        S3_PROD1ST_CHASSIS_NO = "S3_PROD1ST_CHASSIS_NO",
        Column4 = "Column4",
        PR27_NEXT_CHASSIS_NO = "PR27_NEXT_CHASSIS_NO",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get S3_ENGFRMTYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S3_ENGFRMTYPE);
    }

    get S3_PROD1ST_CHASSIS_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.S3_PROD1ST_CHASSIS_NO);
    }

    get PR27_NEXT_CHASSIS_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.PR27_NEXT_CHASSIS_NO);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}