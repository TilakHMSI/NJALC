import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    MODELTABLEINQUIRY = "MODELTABLEINQUIRY",
        Label1 = "Label1",
        Label6 = "Label6",
        SELECT_V = "SELECT_V",
        MTO_CODE_V = "MTO_CODE_V",
        BOM_CODE_V = "BOM_CODE_V",
        V_LOCATE_P = "V_LOCATE_P",
        Label5 = "Label5",
        Edit2 = "Edit2",
        Edit3 = "Edit3",
        btnexit = "btnexit",
        Sub1 = "Sub1",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get SELECT_V(): FormControl {
        return this.fg.controls[MgControlName.SELECT_V] as FormControl;
    }

    get MTO_CODE_V(): FormControl {
        return this.fg.controls[MgControlName.MTO_CODE_V] as FormControl;
    }

    get BOM_CODE_V(): FormControl {
        return this.fg.controls[MgControlName.BOM_CODE_V] as FormControl;
    }

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
    }

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}