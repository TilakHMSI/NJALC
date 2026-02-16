import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    COLORLIST = "COLORLIST",
        Table1 = "Table1",
        Column2 = "Column2",
        S9_COLOR_CODE = "S9_COLOR_CODE",
        btnexit="btnexit"
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get S9_COLOR_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S9_COLOR_CODE);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}