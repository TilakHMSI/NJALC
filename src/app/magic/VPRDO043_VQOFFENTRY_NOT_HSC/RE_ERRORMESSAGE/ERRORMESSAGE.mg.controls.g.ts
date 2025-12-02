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
        Label4 = "Label4",
        Label6 = "Label6",
        Label7 = "Label7",
        Label10 = "Label10",
        Label12 = "Label12",
        V_VENGINE_TYPE = "V_VENGINE_TYPE",
        V_VVQ_OFF_DATE = "V_VVQ_OFF_DATE",
        V_VVQ_OFF_TIME = "V_VVQ_OFF_TIME",
        btn_Exit = "btn_Exit",
        V_MESSAGE_P = "V_MESSAGE_P",
        V_OK = "V_OK",
        V_VENGINE_NO = "V_VENGINE_NO",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_VENGINE_TYPE(): FormControl {
        return this.fg.controls[MgControlName.V_VENGINE_TYPE] as FormControl;
    }

    get V_VVQ_OFF_DATE(): FormControl {
        return this.fg.controls[MgControlName.V_VVQ_OFF_DATE] as FormControl;
    }

    get V_VVQ_OFF_TIME(): FormControl {
        return this.fg.controls[MgControlName.V_VVQ_OFF_TIME] as FormControl;
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