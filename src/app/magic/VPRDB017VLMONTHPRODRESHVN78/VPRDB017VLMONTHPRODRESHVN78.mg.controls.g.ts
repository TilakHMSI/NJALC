import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VPRDB017VLMONTHPRODRESHVN78 = "VPRDB017VLMONTHPRODRESHVN78",
        V_LOCATE = "V_LOCATE",
        Label2 = "Label2",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        Label5 = "Label5",
        DATE_V = "DATE_V",
        EXEC_BUTTON = "EXEC_BUTTON",
        CANCEL_BUTTON = "CANCEL_BUTTON",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_LOCATE(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE] as FormControl;
    }

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get DATE_V(): FormControl {
        return this.fg.controls[MgControlName.DATE_V] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}