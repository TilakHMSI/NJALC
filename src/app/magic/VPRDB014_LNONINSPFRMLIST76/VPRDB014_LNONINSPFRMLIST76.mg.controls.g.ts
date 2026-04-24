import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VPRDB014_LNONINSPFRMLIST76 = "VPRDB014_LNONINSPFRMLIST76",
        V_LOCATE_P = "V_LOCATE_P",
        Label2 = "Label2",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        EXEC_BUTTON = "EXEC_BUTTON",
        EXEC_BUTTON_001 = "EXEC_BUTTON_001",
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

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}