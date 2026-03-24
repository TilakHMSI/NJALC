import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    FRAMEWISEUNHOLDEntry_VIEW = "FRAMEWISEUNHOLDEntry_VIEW",
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
        TITLE = "TITLE",
        Column7 = "Column7",
        REPAIRINUSERID = "REPAIRINUSERID",
        Column8 = "Column8",
        REPAIRINDATE = "REPAIRINDATE",
        Column9 = "Column9",
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
        'Column8',
        'Column9',
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

    get TITLE(): FormControl {
        return this.getTableChildFormControl(MgControlName.TITLE);
    }

    get REPAIRINUSERID(): FormControl {
        return this.getTableChildFormControl(MgControlName.REPAIRINUSERID);
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