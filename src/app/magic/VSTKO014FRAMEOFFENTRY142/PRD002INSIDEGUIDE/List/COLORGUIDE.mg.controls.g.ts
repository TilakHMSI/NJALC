import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    COLORGUIDE = "COLORGUIDE",
        Table1 = "Table1",
        Column2 = "Column2",
        PRD002_S2_COLOR_CODE = "PRD002_S2_COLOR_CODE",
        Column3 = "Column3",
        V_COLOR_CODEINSIDE_P = "V_COLOR_CODEINSIDE_P",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PRD002_S2_COLOR_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.PRD002_S2_COLOR_CODE);
    }

    get V_COLOR_CODEINSIDE_P(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_COLOR_CODEINSIDE_P);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}