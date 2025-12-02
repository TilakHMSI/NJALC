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
        Label7 = "Label7",
        Label12 = "Label12",
        Label4 = "Label4",
        Label6 = "Label6",
        Label10 = "Label10",
        btn_Exit = "btn_Exit",
        V_VAE_DATE = "V_VAE_DATE",
        V_VENGINE_TYPE = "V_VENGINE_TYPE",
        V_VAE_TIME = "V_VAE_TIME",
        V_MESSAGE_P = "V_MESSAGE_P",
        V_OK = "V_OK",
        V_VENGINE_NO = "V_VENGINE_NO",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_VAE_DATE(): FormControl {
        return this.fg.controls[MgControlName.V_VAE_DATE] as FormControl;
    }

    get V_VENGINE_TYPE(): FormControl {
        return this.fg.controls[MgControlName.V_VENGINE_TYPE] as FormControl;
    }

    get V_VAE_TIME(): FormControl {
        return this.fg.controls[MgControlName.V_VAE_TIME] as FormControl;
    }

    get V_MESSAGE_P(): FormControl {
        return this.fg.controls[MgControlName.V_MESSAGE_P] as FormControl;
    }

    get V_OK(): FormControl {
        return this.fg.controls[MgControlName.V_OK] as FormControl;
    }

    get V_VENGINE_NO(): FormControl {
        return this.fg.controls[MgControlName.V_VENGINE_NO] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}