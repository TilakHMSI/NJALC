import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ShiftTimesLine = "ShiftTimesLine",
        Table1 = "Table1",
        Column2 = "Column2",
        ShiftTimesLine_ProdLine = "ShiftTimesLine_ProdLine",
        Column3 = "Column3",
        ShiftTimesLine_SHIFT = "ShiftTimesLine_SHIFT",
        Column4 = "Column4",
        ShiftStartTime = "ShiftStartTime",
        Column5 = "Column5",
        ShiftEndTime = "ShiftEndTime",
        Column6 = "Column6",
        Brk1Start = "Brk1Start",
        Column7 = "Column7",
        Brk1End = "Brk1End",
        Column8 = "Column8",
        Brk2Start = "Brk2Start",
        Column9 = "Column9",
        Brk2End = "Brk2End",
        Column10 = "Column10",
        Brk3Start = "Brk3Start",
        Column11 = "Column11",
        Brk3End = "Brk3End",
        Column12 = "Column12",
        Brk4Start = "Brk4Start",
        Column13 = "Column13",
        Brk4End = "Brk4End",
        Column14 = "Column14",
        Brk5tSart = "Brk5tSart",
        Column15 = "Column15",
        Brk5End = "Brk5End",
        VModify = "VModify",
        VSave = "VSave",
        VCancel = "VCancel",
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
        'Column10',
        'Column11',
        'Column12',
        'Column13',
        'Column14',
        'Column15',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get ShiftTimesLine_ProdLine(): FormControl {
        return this.getTableChildFormControl(MgControlName.ShiftTimesLine_ProdLine);
    }

    get ShiftTimesLine_SHIFT(): FormControl {
        return this.getTableChildFormControl(MgControlName.ShiftTimesLine_SHIFT);
    }

    get ShiftStartTime(): FormControl {
        return this.getTableChildFormControl(MgControlName.ShiftStartTime);
    }

    get ShiftEndTime(): FormControl {
        return this.getTableChildFormControl(MgControlName.ShiftEndTime);
    }

    get Brk1Start(): FormControl {
        return this.getTableChildFormControl(MgControlName.Brk1Start);
    }

    get Brk1End(): FormControl {
        return this.getTableChildFormControl(MgControlName.Brk1End);
    }

    get Brk2Start(): FormControl {
        return this.getTableChildFormControl(MgControlName.Brk2Start);
    }

    get Brk2End(): FormControl {
        return this.getTableChildFormControl(MgControlName.Brk2End);
    }

    get Brk3Start(): FormControl {
        return this.getTableChildFormControl(MgControlName.Brk3Start);
    }

    get Brk3End(): FormControl {
        return this.getTableChildFormControl(MgControlName.Brk3End);
    }

    get Brk4Start(): FormControl {
        return this.getTableChildFormControl(MgControlName.Brk4Start);
    }

    get Brk4End(): FormControl {
        return this.getTableChildFormControl(MgControlName.Brk4End);
    }

    get Brk5tSart(): FormControl {
        return this.getTableChildFormControl(MgControlName.Brk5tSart);
    }

    get Brk5End(): FormControl {
        return this.getTableChildFormControl(MgControlName.Brk5End);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}