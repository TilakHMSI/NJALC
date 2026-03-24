import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DEFECTENTRYMENU = "DEFECTENTRYMENU",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        Label1 = "Label1",
        Edit5 = "Edit5",
        Edit6 = "Edit6",
        Edit7 = "Edit7",
        Label8 = "Label8",
        BUTTONDEFECTENTRY_LINE9 = "BUTTONDEFECTENTRY_LINE9",
        BUTTONDEFECTENTRY_LINE5 = "BUTTONDEFECTENTRY_LINE5",
        BUTTONDEFECTENTRY_LINE7 = "BUTTONDEFECTENTRY_LINE7",
        BUTTONDEFECTENTRY_LINE10 = "BUTTONDEFECTENTRY_LINE10",
        BUTTONDEFECTENTRY_LINE4 = "BUTTONDEFECTENTRY_LINE4",
        BUTTONDEFECTENTRY_LINE1 = "BUTTONDEFECTENTRY_LINE1",
        BUTTONDEFECTENTRY_LINE2 = "BUTTONDEFECTENTRY_LINE2",
        BUTTONDEFECTENTRY_LINE6 = "BUTTONDEFECTENTRY_LINE6",
        BUTTONDEFECTENTRY_LINE3 = "BUTTONDEFECTENTRY_LINE3",
        BUTTONDEFECTENTRY_LINE4F = "BUTTONDEFECTENTRY_LINE4F",
        BUTTONDEFECTENTRY_LINE_8 = "BUTTONDEFECTENTRY_LINE_8",
        BUTTONDEFECTENTRY_LINE80_0001 = "BUTTONDEFECTENTRY_LINE80_0001",
        BUTTONDEFECTENTRY_LINE11_0001 = "BUTTONDEFECTENTRY_LINE11_0001",
        btnexit = "btnexit",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get Edit5(): FormControl {
        return this.fg.controls[MgControlName.Edit5] as FormControl;
    }

    get Edit6(): FormControl {
        return this.fg.controls[MgControlName.Edit6] as FormControl;
    }

    get Edit7(): FormControl {
        return this.fg.controls[MgControlName.Edit7] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}