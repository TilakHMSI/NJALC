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
        ShiftEndTime = "ShiftEndTime",
        Column6 = "Column6",
        Brk1Start = "Brk1Start",
        Brk1End = "Brk1End",
        Column8 = "Column8",
        Brk2Start = "Brk2Start",
        Brk2End = "Brk2End",
        Column10 = "Column10",
        Brk3Start = "Brk3Start",
        Brk3End = "Brk3End",
        Column12 = "Column12",
        Brk4Start = "Brk4Start",
        Brk4End = "Brk4End",
        Column14 = "Column14",
        Brk5tSart = "Brk5tSart",
        Brk5End = "Brk5End",
        Column33 = "Column33",
        EnterRowEditing = "EnterRowEditing",
        SaveRowEditing = "SaveRowEditing",
        CancelRowEditing = "CancelRowEditing",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
        'Column6',
        'Column8',
        'Column10',
        'Column12',
        'Column14',
        'Column33',
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