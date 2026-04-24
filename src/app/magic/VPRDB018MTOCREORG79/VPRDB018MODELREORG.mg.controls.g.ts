import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VPRDB018MODELREORG = "VPRDB018MODELREORG",
        V_LOCATE_P = "V_LOCATE_P",
        Label2 = "Label2",
        btnexit = "btnexit",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        Label5 = "Label5",
        PASSAGE_MONTH_V = "PASSAGE_MONTH_V",
        Label7 = "Label7",
        Label8 = "Label8",
        V_PASSAGE_DATE_V = "V_PASSAGE_DATE_V",
        BUTTONEXEC = "BUTTONEXEC",
        BUTTONCANCEL = "BUTTONCANCEL",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
    }

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get PASSAGE_MONTH_V(): FormControl {
        return this.fg.controls[MgControlName.PASSAGE_MONTH_V] as FormControl;
    }

    get V_PASSAGE_DATE_V(): FormControl {
        return this.fg.controls[MgControlName.V_PASSAGE_DATE_V] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}