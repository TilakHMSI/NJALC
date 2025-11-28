import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CHASSISNOGUIDE = "CHASSISNOGUIDE",
        Label1 = "Label1",
        Table2 = "Table2",
        Column3 = "Column3",
        S3_ENGFRMTYPE = "S3_ENGFRMTYPE",
        Column4 = "Column4",
        S3_PROD1ST_CHASSIS_NO = "S3_PROD1ST_CHASSIS_NO",
        Label7 = "Label7",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
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

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}