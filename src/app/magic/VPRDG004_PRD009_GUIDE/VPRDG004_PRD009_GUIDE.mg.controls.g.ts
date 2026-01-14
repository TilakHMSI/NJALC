import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VPRDG004_PRD009_GUIDE = "VPRDG004_PRD009_GUIDE",
        Label1 = "Label1",
        Table2 = "Table2",
        Column3 = "Column3",
        S9_COLOR_CODE = "S9_COLOR_CODE",
        Column4 = "Column4",
        S9_COLOR_NAME = "S9_COLOR_NAME",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
        'Column4',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get S9_COLOR_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S9_COLOR_CODE);
    }

    get S9_COLOR_NAME(): FormControl {
        return this.getTableChildFormControl(MgControlName.S9_COLOR_NAME);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}