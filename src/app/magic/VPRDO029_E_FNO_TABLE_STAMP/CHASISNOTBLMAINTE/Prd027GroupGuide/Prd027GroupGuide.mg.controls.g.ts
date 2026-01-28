import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    Prd027GroupGuide = "Prd027GroupGuide",
        Table1 = "Table1",
        Column2 = "Column2",
        PR27_GROUP = "PR27_GROUP",
        Column3 = "Column3",
        PR27_GROUP_NAME = "PR27_GROUP_NAME",
        Column4 = "Column4",
        PR27_DIGIT = "PR27_DIGIT",
        Column5 = "Column5",
        PR27_PROD1ST_CHASSIS_NO = "PR27_PROD1ST_CHASSIS_NO",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
        'Column5',
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

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}