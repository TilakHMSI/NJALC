import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CodeTypeMaster = "CodeTypeMaster",
        Label1 = "Label1",
        V_FLAG = "V_FLAG",
        Label3 = "Label3",
        V_CODE = "V_CODE",
        Label5 = "Label5",
        V_SUBCODE = "V_SUBCODE",
        Label7 = "Label7",
        V_DESCRIPTION = "V_DESCRIPTION",
        B_SAVE = "B_SAVE",
        B_EXIT = "B_EXIT",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_FLAG(): FormControl {
        return this.fg.controls[MgControlName.V_FLAG] as FormControl;
    }

    get V_CODE(): FormControl {
        return this.fg.controls[MgControlName.V_CODE] as FormControl;
    }

    get V_SUBCODE(): FormControl {
        return this.fg.controls[MgControlName.V_SUBCODE] as FormControl;
    }

    get V_DESCRIPTION(): FormControl {
        return this.fg.controls[MgControlName.V_DESCRIPTION] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}