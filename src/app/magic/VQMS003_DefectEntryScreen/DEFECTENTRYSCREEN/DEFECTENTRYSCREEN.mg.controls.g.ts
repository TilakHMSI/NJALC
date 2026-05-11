import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DEFECTENTRYSCREEN = "DEFECTENTRYSCREEN",
        vDEFECTCODE = "vDEFECTCODE",
        Table2 = "Table2",
        Column22 = "Column22",
        DEFECTCODE = "DEFECTCODE",
        Column4 = "Column4",
        DEFECTDESCRIPTION = "DEFECTDESCRIPTION",
        Column24 = "Column24",
        DEFECTCATEGORY = "DEFECTCATEGORY",
        Column26 = "Column26",
        DEFECTSECTION = "DEFECTSECTION",
        Column28 = "Column28",
        btnDelete = "btnDelete",
        btnDefectCode = "btnDefectCode",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column22',
        'Column4',
        'Column24',
        'Column26',
        'Column28',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get vDEFECTCODE(): FormControl {
        return this.fg.controls[MgControlName.vDEFECTCODE] as FormControl;
    }

    get DEFECTCODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.DEFECTCODE);
    }

    get DEFECTDESCRIPTION(): FormControl {
        return this.getTableChildFormControl(MgControlName.DEFECTDESCRIPTION);
    }

    get DEFECTCATEGORY(): FormControl {
        return this.getTableChildFormControl(MgControlName.DEFECTCATEGORY);
    }

    get DEFECTSECTION(): FormControl {
        return this.getTableChildFormControl(MgControlName.DEFECTSECTION);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}