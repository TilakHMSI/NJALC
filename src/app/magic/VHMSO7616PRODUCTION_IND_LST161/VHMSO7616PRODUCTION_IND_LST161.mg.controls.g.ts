import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VHMSO7616PRODUCTION_IND_LST161 = "VHMSO7616PRODUCTION_IND_LST161",
        Label2 = "Label2",
        MTO_CODE = "MTO_CODE",
        Label4 = "Label4",
        V_DATE = "V_DATE",
        V_RADIO = "V_RADIO",
        V_FILE_NAME = "V_FILE_NAME",
        V_BUTTON = "V_BUTTON",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get MTO_CODE(): FormControl {
        return this.fg.controls[MgControlName.MTO_CODE] as FormControl;
    }

    get V_DATE(): FormControl {
        return this.fg.controls[MgControlName.V_DATE] as FormControl;
    }

    get V_RADIO(): FormControl {
        return this.fg.controls[MgControlName.V_RADIO] as FormControl;
    }

    get V_FILE_NAME(): FormControl {
        return this.fg.controls[MgControlName.V_FILE_NAME] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}