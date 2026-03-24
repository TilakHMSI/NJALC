import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    FRAME_DETAIL_VIEW = "FRAME_DETAIL_VIEW",
        Table1 = "Table1",
        Column2 = "Column2",
        FRAMENUMBER = "FRAMENUMBER",
        Column3 = "Column3",
        MODELCODE = "MODELCODE",
        Column4 = "Column4",
        MODELNAME = "MODELNAME",
        Column5 = "Column5",
        COLORCODE = "COLORCODE",
        Column6 = "Column6",
        REPAIRINDATE = "REPAIRINDATE",
        Column7 = "Column7",
        REPAIRINTIME = "REPAIRINTIME",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
        'Column5',
        'Column6',
        'Column7',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get FRAMENUMBER(): FormControl {
        return this.getTableChildFormControl(MgControlName.FRAMENUMBER);
    }

    get MODELCODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.MODELCODE);
    }

    get MODELNAME(): FormControl {
        return this.getTableChildFormControl(MgControlName.MODELNAME);
    }

    get COLORCODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.COLORCODE);
    }

    get REPAIRINDATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.REPAIRINDATE);
    }

    get REPAIRINTIME(): FormControl {
        return this.getTableChildFormControl(MgControlName.REPAIRINTIME);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}