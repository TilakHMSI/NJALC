import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DETAIL = "DETAIL",
        Table1 = "Table1",
        Column1 = "Column1",
        FRAMENO = "FRAMENO",
        Column4 = "Column4",
        MTOCODE = "MTOCODE",
        JPMODEL = "JPMODEL",
        Column2 = "Column2",
        INITIATEDATE = "INITIATEDATE",
        INITIATETIME = "INITIATETIME",
        Column17 = "Column17",
        INITIATEUSER = "INITIATEUSER",
        Column3 = "Column3",
        FLAGOFFDATE = "FLAGOFFDATE",
        OdoCaptureFrame_FLAGOFFTIME = "OdoCaptureFrame_FLAGOFFTIME",
        Column36 = "Column36",
        OdoCaptureFrame_FLAGOFFBY = "OdoCaptureFrame_FLAGOFFBY",
        Column19 = "Column19",
        FLAGON = "FLAGON",
        FLAGOFF = "FLAGOFF",
        Column29 = "Column29",
        PLANT = "PLANT",
        Column27 = "Column27",
        btnDetails = "btnDetails",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column1',
        'Column4',
        'Column2',
        'Column17',
        'Column3',
        'Column36',
        'Column19',
        'Column29',
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

    get JPMODEL(): FormControl {
        return this.getTableChildFormControl(MgControlName.JPMODEL);
    }

    get INITIATEDATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.INITIATEDATE);
    }

    get INITIATETIME(): FormControl {
        return this.getTableChildFormControl(MgControlName.INITIATETIME);
    }

    get INITIATEUSER(): FormControl {
        return this.getTableChildFormControl(MgControlName.INITIATEUSER);
    }

    get FLAGOFFDATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.FLAGOFFDATE);
    }

    get OdoCaptureFrame_FLAGOFFTIME(): FormControl {
        return this.getTableChildFormControl(MgControlName.OdoCaptureFrame_FLAGOFFTIME);
    }

    get OdoCaptureFrame_FLAGOFFBY(): FormControl {
        return this.getTableChildFormControl(MgControlName.OdoCaptureFrame_FLAGOFFBY);
    }

    get FLAGON(): FormControl {
        return this.getTableChildFormControl(MgControlName.FLAGON);
    }

    get FLAGOFF(): FormControl {
        return this.getTableChildFormControl(MgControlName.FLAGOFF);
    }

    get PLANT(): FormControl {
        return this.getTableChildFormControl(MgControlName.PLANT);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}