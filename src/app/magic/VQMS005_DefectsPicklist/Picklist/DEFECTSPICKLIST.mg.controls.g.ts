import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DEFECTSPICKLIST = "DEFECTSPICKLIST",
        Table1 = "Table1",
        Column2 = "Column2",
        DEFECTMASTER_DEFECTCODE = "DEFECTMASTER_DEFECTCODE",
        Column3 = "Column3",
        DEFECTMASTER_DEFECTDESCRIPTION = "DEFECTMASTER_DEFECTDESCRIPTION",
        Column4 = "Column4",
        DEFECTMASTER_DEFECTSECTION = "DEFECTMASTER_DEFECTSECTION",
        Column5 = "Column5",
        DEFECTMASTER_DEFECTCATEGORY = "DEFECTMASTER_DEFECTCATEGORY",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
        'Column5',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get DEFECTMASTER_DEFECTCODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.DEFECTMASTER_DEFECTCODE);
    }

    get DEFECTMASTER_DEFECTDESCRIPTION(): FormControl {
        return this.getTableChildFormControl(MgControlName.DEFECTMASTER_DEFECTDESCRIPTION);
    }

    get DEFECTMASTER_DEFECTSECTION(): FormControl {
        return this.getTableChildFormControl(MgControlName.DEFECTMASTER_DEFECTSECTION);
    }

    get DEFECTMASTER_DEFECTCATEGORY(): FormControl {
        return this.getTableChildFormControl(MgControlName.DEFECTMASTER_DEFECTCATEGORY);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}