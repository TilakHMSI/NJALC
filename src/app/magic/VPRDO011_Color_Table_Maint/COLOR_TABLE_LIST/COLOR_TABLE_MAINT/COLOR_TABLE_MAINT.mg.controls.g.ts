import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    COLOR_TABLE_MAINT = "COLOR_TABLE_MAINT",
        Label16 = "Label16",
        S9_COLOR_CODE = "S9_COLOR_CODE",
        btnexit = "btnexit",
        Label17 = "Label17",
        S9_COLOR_NAME = "S9_COLOR_NAME",
        S9_MAIN_COLOR = "S9_MAIN_COLOR",
        Label18 = "Label18",
        Label19 = "Label19",
        S9_START_DATE = "S9_START_DATE",
        S9_ABOLITION_DATE = "S9_ABOLITION_DATE",
        Label20 = "Label20",
        btnSave = "btnSave",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get S9_COLOR_CODE(): FormControl {
        return this.fg.controls[MgControlName.S9_COLOR_CODE] as FormControl;
    }

    get S9_COLOR_NAME(): FormControl {
        return this.fg.controls[MgControlName.S9_COLOR_NAME] as FormControl;
    }

    get S9_MAIN_COLOR(): FormControl {
        return this.fg.controls[MgControlName.S9_MAIN_COLOR] as FormControl;
    }

    get S9_START_DATE(): FormControl {
        return this.fg.controls[MgControlName.S9_START_DATE] as FormControl;
    }

    get S9_ABOLITION_DATE(): FormControl {
        return this.fg.controls[MgControlName.S9_ABOLITION_DATE] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}