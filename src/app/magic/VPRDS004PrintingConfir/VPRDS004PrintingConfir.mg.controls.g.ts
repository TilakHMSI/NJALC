import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VPRDS004PrintingConfir = "VPRDS004PrintingConfir",
        V_LOCATE_P = "V_LOCATE_P",
        Label2 = "Label2",
        EditDate = "EditDate",
        EditTime = "EditTime",
        DisplyString = "DisplyString",
        Label6 = "Label6",
        BUTTON_OK = "BUTTON_OK",
        btn_Quit = "btn_Quit",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
    }

    get EditDate(): FormControl {
        return this.fg.controls[MgControlName.EditDate] as FormControl;
    }

    get EditTime(): FormControl {
        return this.fg.controls[MgControlName.EditTime] as FormControl;
    }

    get DisplyString(): FormControl {
        return this.fg.controls[MgControlName.DisplyString] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}