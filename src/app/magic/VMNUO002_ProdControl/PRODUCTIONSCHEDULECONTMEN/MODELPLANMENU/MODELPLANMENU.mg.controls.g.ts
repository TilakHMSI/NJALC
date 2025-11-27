import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    MODELPLANMENU = "MODELPLANMENU",
        V_LOCATE_P = "V_LOCATE_P",
        Label2 = "Label2",
        V_DB_NAME1_P = "V_DB_NAME1_P",
        V_DB_NAME2_P = "V_DB_NAME2_P",
        Edit5 = "Edit5",
        Edit6 = "Edit6",
        Label7 = "Label7",
        BUTTONVPRDO171 = "BUTTONVPRDO171",
        BUTTONVPRDO174 = "BUTTONVPRDO174",
        BUTTONVPRDB043 = "BUTTONVPRDB043",
        BUTTONVPRDO172 = "BUTTONVPRDO172",
        BUTTONVPRDB041 = "BUTTONVPRDB041",
        BUTTONVPRDO173 = "BUTTONVPRDO173",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
    }

    get V_DB_NAME1_P(): FormControl {
        return this.fg.controls[MgControlName.V_DB_NAME1_P] as FormControl;
    }

    get V_DB_NAME2_P(): FormControl {
        return this.fg.controls[MgControlName.V_DB_NAME2_P] as FormControl;
    }

    get Edit5(): FormControl {
        return this.fg.controls[MgControlName.Edit5] as FormControl;
    }

    get Edit6(): FormControl {
        return this.fg.controls[MgControlName.Edit6] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}