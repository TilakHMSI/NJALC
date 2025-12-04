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
        btn_Exit = "btn_Exit",
        V_CHASSIS_NO_DSP = "V_CHASSIS_NO_DSP",
        V_VENGINE_TYPE = "V_VENGINE_TYPE",
        V_VPDI_DATE = "V_VPDI_DATE",
        V_VPDI_TIME = "V_VPDI_TIME",
        V_OK = "V_OK",
        V_VENGINE_NO = "V_VENGINE_NO",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_CHASSIS_NO_DSP(): FormControl {
        return this.fg.controls[MgControlName.V_CHASSIS_NO_DSP] as FormControl;
    }

    get V_VENGINE_TYPE(): FormControl {
        return this.fg.controls[MgControlName.V_VENGINE_TYPE] as FormControl;
    }

    get V_VPDI_DATE(): FormControl {
        return this.fg.controls[MgControlName.V_VPDI_DATE] as FormControl;
    }

    get V_VPDI_TIME(): FormControl {
        return this.fg.controls[MgControlName.V_VPDI_TIME] as FormControl;
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