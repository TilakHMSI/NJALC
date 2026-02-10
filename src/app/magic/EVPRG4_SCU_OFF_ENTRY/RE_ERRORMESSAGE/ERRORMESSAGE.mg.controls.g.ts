import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ERRORMESSAGE = "ERRORMESSAGE",
        Label1 = "Label1",
        Label2 = "Label2",
        Image3 = "Image3",
        Label9 = "Label9",
        Label11 = "Label11",
        Label4 = "Label4",
        Label7 = "Label7",
        V_VENGINE_DATE = "V_VENGINE_DATE",
        V_VENGINE_TIME = "V_VENGINE_TIME",
        btn_Exit = "btn_Exit",
        V_MESSAGE_P = "V_MESSAGE_P",
        V_OK = "V_OK",
        Label6 = "Label6",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_VENGINE_DATE(): FormControl {
        return this.fg.controls[MgControlName.V_VENGINE_DATE] as FormControl;
    }

    get V_VENGINE_TIME(): FormControl {
        return this.fg.controls[MgControlName.V_VENGINE_TIME] as FormControl;
    }

    get V_MESSAGE_P(): FormControl {
        return this.fg.controls[MgControlName.V_MESSAGE_P] as FormControl;
    }

    get V_OK(): FormControl {
        return this.fg.controls[MgControlName.V_OK] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}