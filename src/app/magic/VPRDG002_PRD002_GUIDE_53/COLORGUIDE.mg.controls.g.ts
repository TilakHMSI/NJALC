import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    COLORGUIDE = "COLORGUIDE",
        Label1 = "Label1",
        Table2 = "Table2",
        Column3 = "Column3",
        PRD002_S2_COLOR_CODE = "PRD002_S2_COLOR_CODE",
        Column4 = "Column4",
        PRD002_S2_COLOR_CODEINSIDE = "PRD002_S2_COLOR_CODEINSIDE",
        btnSelect = "btnSelect",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
        'Column4',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PRD002_S2_COLOR_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD002_S2_COLOR_CODE);
    }

    get PRD002_S2_COLOR_CODEINSIDE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD002_S2_COLOR_CODEINSIDE);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}