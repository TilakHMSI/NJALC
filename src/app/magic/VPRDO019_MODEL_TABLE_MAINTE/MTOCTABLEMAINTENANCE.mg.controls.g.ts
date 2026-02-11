import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    MTOCTABLEMAINTENANCE = "MTOCTABLEMAINTENANCE",
        MODE_V = "MODE_V",
        Label1 = "Label1",
        Label6 = "Label6",
        SELECT_V = "SELECT_V",
        Label7 = "Label7",
        MTO_CODE_V = "MTO_CODE_V",
        V_LOCATE_P = "V_LOCATE_P",
        Label3 = "Label3",
        Edit4 = "Edit4",
        Edit5 = "Edit5",
        Label9 = "Label9",
        BOM_CODE_V = "BOM_CODE_V",
        Export = "Export",
        Sub1 = "Sub1",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get MODE_V(): FormControl {
        return this.fg.controls[MgControlName.MODE_V] as FormControl;
    }

    get SELECT_V(): FormControl {
        return this.fg.controls[MgControlName.SELECT_V] as FormControl;
    }

    get MTO_CODE_V(): FormControl {
        return this.fg.controls[MgControlName.MTO_CODE_V] as FormControl;
    }

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get Edit5(): FormControl {
        return this.fg.controls[MgControlName.Edit5] as FormControl;
    }

    get BOM_CODE_V(): FormControl {
        return this.fg.controls[MgControlName.BOM_CODE_V] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}