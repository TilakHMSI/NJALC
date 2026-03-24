import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DEFECTENTRYSCREEN = "DEFECTENTRYSCREEN",
        Label1 = "Label1",
        Table2 = "Table2",
        Column3 = "Column3",
        DEFECTCODE = "DEFECTCODE",
        Column4 = "Column4",
        DEFECTMASTER_DEFECTDESCRIPTION = "DEFECTMASTER_DEFECTDESCRIPTION",
        Column5 = "Column5",
        DEFECTMASTER_DEFECTCATEGORY = "DEFECTMASTER_DEFECTCATEGORY",
        Column6 = "Column6",
        DEFECTMASTER_DEFECTSECTION = "DEFECTMASTER_DEFECTSECTION",
        b_save = "b_save",
        b_exit = "b_exit",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column3',
        'Column4',
        'Column5',
        'Column6',
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