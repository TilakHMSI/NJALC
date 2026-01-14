import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    COLOR_TABLE_MAINT_HSC = "COLOR_TABLE_MAINT_HSC",
        Table3 = "Table3",
        Column4 = "Column4",
        S9_COLOR_CODE = "S9_COLOR_CODE",
        Column5 = "Column5",
        S9_COLOR_NAME = "S9_COLOR_NAME",
        Column6 = "Column6",
        S9_MAIN_COLOR = "S9_MAIN_COLOR",
        Column7 = "Column7",
        S9_START_DATE = "S9_START_DATE",
        Column8 = "Column8",
        S9_ABOLITION_DATE = "S9_ABOLITION_DATE",
        Label1 = "Label1",
        SP111_IMAGE = "SP111_IMAGE",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column4',
        'Column5',
        'Column6',
        'Column7',
        'Column8',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get S9_COLOR_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S9_COLOR_CODE);
    }

    get S9_COLOR_NAME(): FormControl {
        return this.getTableChildFormControl(MgControlName.S9_COLOR_NAME);
    }

    get S9_MAIN_COLOR(): FormControl {
        return this.getTableChildFormControl(MgControlName.S9_MAIN_COLOR);
    }

    get S9_START_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S9_START_DATE);
    }

    get S9_ABOLITION_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.S9_ABOLITION_DATE);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}