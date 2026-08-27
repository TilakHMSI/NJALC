import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DETAILFLAGON = "DETAILFLAGON",
        Table1 = "Table1",
        Column1 = "Column1",
        FRAMENO = "FRAMENO",
        Column2 = "Column2",
        INITIATEDATE = "INITIATEDATE",
        Column3 = "Column3",
        INITIATETIME = "INITIATETIME",
        Column4 = "Column4",
        MTOCODE = "MTOCODE",
        Column29 = "Column29",
        PLANT = "PLANT",
        Column17 = "Column17",
        INITIATEUSER = "INITIATEUSER",
        Column19 = "Column19",
        FLAGON = "FLAGON",
        Column27 = "Column27",
        btnDetails = "btnDetails",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column1',
        'Column2',
        'Column3',
        'Column4',
        'Column29',
        'Column17',
        'Column19',
        'Column27',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get FRAMENO(): FormControl {
        return this.getTableChildFormControl(MgControlName.FRAMENO);
    }

    get INITIATEDATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.INITIATEDATE);
    }

    get INITIATETIME(): FormControl {
        return this.getTableChildFormControl(MgControlName.INITIATETIME);
    }

    get MTOCODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.MTOCODE);
    }

    get PLANT(): FormControl {
        return this.getTableChildFormControl(MgControlName.PLANT);
    }

    get INITIATEUSER(): FormControl {
        return this.getTableChildFormControl(MgControlName.INITIATEUSER);
    }

    get FLAGON(): FormControl {
        return this.getTableChildFormControl(MgControlName.FLAGON);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}