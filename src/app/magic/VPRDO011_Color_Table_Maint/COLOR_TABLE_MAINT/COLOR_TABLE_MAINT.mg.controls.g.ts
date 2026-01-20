import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    COLOR_TABLE_MAINT = "COLOR_TABLE_MAINT",
        Table1 = "Table1",
        Column2 = "Column2",
        S9_COLOR_CODE = "S9_COLOR_CODE",
        Column3 = "Column3",
        S9_COLOR_NAME = "S9_COLOR_NAME",
        Column4 = "Column4",
        S9_MAIN_COLOR = "S9_MAIN_COLOR",
        Column5 = "Column5",
        S9_START_DATE = "S9_START_DATE",
        Column6 = "Column6",
        S9_ABOLITION_DATE = "S9_ABOLITION_DATE",
        Column12 = "Column12",
        EnterRowEditing = "EnterRowEditing",
        SaveRowEditing = "SaveRowEditing",
        CancelRowEditing = "CancelRowEditing",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
        'Column5',
        'Column6',
        'Column12',
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