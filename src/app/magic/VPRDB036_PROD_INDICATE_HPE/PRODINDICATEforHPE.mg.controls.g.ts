import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PRODINDICATEforHPE = "PRODINDICATEforHPE",
        V_LOCATE_P = "V_LOCATE_P",
        Label2 = "Label2",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        OPT_ISSUEREPRINT_V = "OPT_ISSUEREPRINT_V",
        Label5 = "Label5",
        Label6 = "Label6",
        OPT_CATEGORY_V = "OPT_CATEGORY_V",
        Label7 = "Label7",
        Label9 = "Label9",
        Label8 = "Label8",
        CBX_INDCHASSIS_NO_PRN_V = "CBX_INDCHASSIS_NO_PRN_V",
        CBX_FINVEHICLE_INSPSHEET_V = "CBX_FINVEHICLE_INSPSHEET_V",
        CBX_ENGINE_NOSEAL_PRN_V = "CBX_ENGINE_NOSEAL_PRN_V",
        V_CBX_CHASSIS_NOSEAL_PRN_V = "V_CBX_CHASSIS_NOSEAL_PRN_V",
        Label10 = "Label10",
        Label11 = "Label11",
        Label12 = "Label12",
        EXEC_BUTTON = "EXEC_BUTTON",
        CANCEL_BUTTON = "CANCEL_BUTTON",
        btn_Close="btn_Close"
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

    get OPT_ISSUEREPRINT_V(): FormControl {
        return this.fg.controls[MgControlName.OPT_ISSUEREPRINT_V] as FormControl;
    }

    get OPT_CATEGORY_V(): FormControl {
        return this.fg.controls[MgControlName.OPT_CATEGORY_V] as FormControl;
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