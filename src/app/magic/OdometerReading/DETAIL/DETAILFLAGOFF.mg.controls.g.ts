import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DETAILFLAGOFF = "DETAILFLAGOFF",
        Table1 = "Table1",
        Column1 = "Column1",
        FRAMENO = "FRAMENO",
        Column4 = "Column4",
        MTOCODE = "MTOCODE",
        Column17 = "Column17",
        FLAGOFFBY = "FLAGOFFBY",
        Column2 = "Column2",
        FLAGOFFDATE = "FLAGOFFDATE",
        Column3 = "Column3",
        FLAGOFFTIME = "FLAGOFFTIME",
        Column29 = "Column29",
        PLANT = "PLANT",
        Column19 = "Column19",
        FLAGOFF = "FLAGOFF",
        Column27 = "Column27",
        btnDetails = "btnDetails",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column1',
        'Column4',
        'Column17',
        'Column2',
        'Column3',
        'Column29',
        'Column19',
        'Column27',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get FRAMENO(): FormControl {
        return this.getTableChildFormControl(MgControlName.FRAMENO);
    }

    get MTOCODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.MTOCODE);
    }

    get FLAGOFFBY(): FormControl {
        return this.getTableChildFormControl(MgControlName.FLAGOFFBY);
    }

    get FLAGOFFDATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.FLAGOFFDATE);
    }

    get FLAGOFFTIME(): FormControl {
        return this.getTableChildFormControl(MgControlName.FLAGOFFTIME);
    }

    get PLANT(): FormControl {
        return this.getTableChildFormControl(MgControlName.PLANT);
    }

    get FLAGOFF(): FormControl {
        return this.getTableChildFormControl(MgControlName.FLAGOFF);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}