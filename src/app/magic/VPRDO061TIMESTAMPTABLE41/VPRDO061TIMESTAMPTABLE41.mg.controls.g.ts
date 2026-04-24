import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VPRDO061TIMESTAMPTABLE41 = "VPRDO061TIMESTAMPTABLE41",
        MODE_V = "MODE_V",
        btnexit = "btnexit",
        Edit3 = "Edit3",
        V_LOCATE_P = "V_LOCATE_P",
        Label2 = "Label2",
        Edit4 = "Edit4",
        Label5 = "Label5",
        Label6 = "Label6",
        SELECT_PLN_CD = "SELECT_PLN_CD",
        Label8 = "Label8",
        ENTRY_PLN_CD = "ENTRY_PLN_CD",
        VPRDG061PRD064_GUIDE = "VPRDG061PRD064_GUIDE",
        UPDATE = "UPDATE",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get MODE_V(): FormControl {
        return this.fg.controls[MgControlName.MODE_V] as FormControl;
    }

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get SELECT_PLN_CD(): FormControl {
        return this.fg.controls[MgControlName.SELECT_PLN_CD] as FormControl;
    }

    get ENTRY_PLN_CD(): FormControl {
        return this.fg.controls[MgControlName.ENTRY_PLN_CD] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}