import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VPRDG004_PRD009_GUIDE_HSC = "VPRDG004_PRD009_GUIDE_HSC",
        Label1 = "Label1",
        Table4 = "Table4",
        Column5 = "Column5",
        S9_COLOR_CODE = "S9_COLOR_CODE",
        Column6 = "Column6",
        S9_COLOR_NAME = "S9_COLOR_NAME",
        Label2 = "Label2",
        SP111_IMAGE = "SP111_IMAGE",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column5',
        'Column6',
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