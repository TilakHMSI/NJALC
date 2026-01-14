import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VBOMG003_PRD010_GUIDE2_1333 = "VBOMG003_PRD010_GUIDE2_1333",
        Label1 = "Label1",
        Table2 = "Table2",
        Column3 = "Column3",
        SA_PLAN_CODE = "SA_PLAN_CODE",
        btnSelect = "btnSelect",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get SA_PLAN_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.SA_PLAN_CODE);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}