import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DEFECTENTRYSCREEN = "DEFECTENTRYSCREEN",
        btnAdd = "btnAdd",
        Table2 = "Table2",
        Column3 = "Column3",
        DEFECTCODE = "DEFECTCODE",
        Column4 = "Column4",
        DEFECTMASTER_DEFECTDESCRIPTION = "DEFECTMASTER_DEFECTDESCRIPTION",
        Column5 = "Column5",
        DEFECTMASTER_DEFECTCATEGORY = "DEFECTMASTER_DEFECTCATEGORY",
        Column6 = "Column6",
        DEFECTMASTER_DEFECTSECTION = "DEFECTMASTER_DEFECTSECTION",
        Column14 = "Column14",
        EnterRowEditing = "EnterRowEditing",
        SaveRowEditing = "SaveRowEditing",
        CancelRowEditing = "CancelRowEditing",
        b_save = "b_save",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
        'Column4',
        'Column5',
        'Column6',
        'Column14',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get DEFECTCODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.DEFECTCODE);
    }

    get DEFECTMASTER_DEFECTDESCRIPTION(): FormControl {
        return this.getTableChildFormControl(MgControlName.DEFECTMASTER_DEFECTDESCRIPTION);
    }

    get DEFECTMASTER_DEFECTCATEGORY(): FormControl {
        return this.getTableChildFormControl(MgControlName.DEFECTMASTER_DEFECTCATEGORY);
    }

    get DEFECTMASTER_DEFECTSECTION(): FormControl {
        return this.getTableChildFormControl(MgControlName.DEFECTMASTER_DEFECTSECTION);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}