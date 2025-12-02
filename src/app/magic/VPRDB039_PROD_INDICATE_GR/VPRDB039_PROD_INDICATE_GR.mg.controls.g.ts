import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VPRDB039_PROD_INDICATE_GR = "VPRDB039_PROD_INDICATE_GR",
        OPT_ISSUEREPRINT_V = "OPT_ISSUEREPRINT_V",
        Label5 = "Label5",
        Edit3 = "Edit3",
        V_LOCATE_P = "V_LOCATE_P",
        Label2 = "Label2",
        Edit4 = "Edit4",
        Label7 = "Label7",
        CBX_INDCHASSIS_NO_PRN_V = "CBX_INDCHASSIS_NO_PRN_V",
        CBX_FINVEHICLE_INSPSHEET_V = "CBX_FINVEHICLE_INSPSHEET_V",
        CBX_ENGINE_NOSEAL_PRN_V = "CBX_ENGINE_NOSEAL_PRN_V",
        V_CBX_CHASSIS_NOSEAL_PRN_V = "V_CBX_CHASSIS_NOSEAL_PRN_V",
        Label6 = "Label6",
        Label8 = "Label8",
        EXEC_BUTTON = "EXEC_BUTTON",
        CANCEL_BUTTON = "CANCEL_BUTTON",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get OPT_ISSUEREPRINT_V(): FormControl {
        return this.fg.controls[MgControlName.OPT_ISSUEREPRINT_V] as FormControl;
    }

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get CBX_INDCHASSIS_NO_PRN_V(): FormControl {
        return this.fg.controls[MgControlName.CBX_INDCHASSIS_NO_PRN_V] as FormControl;
    }

    get CBX_FINVEHICLE_INSPSHEET_V(): FormControl {
        return this.fg.controls[MgControlName.CBX_FINVEHICLE_INSPSHEET_V] as FormControl;
    }

    get CBX_ENGINE_NOSEAL_PRN_V(): FormControl {
        return this.fg.controls[MgControlName.CBX_ENGINE_NOSEAL_PRN_V] as FormControl;
    }

    get V_CBX_CHASSIS_NOSEAL_PRN_V(): FormControl {
        return this.fg.controls[MgControlName.V_CBX_CHASSIS_NOSEAL_PRN_V] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}