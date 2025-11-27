import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    GENERALMENU = "GENERALMENU",
        Image3 = "Image3",
        Image4 = "Image4",
        V_LOCATE_P = "V_LOCATE_P",
        Label2 = "Label2",
        V_DB_NAME1_P = "V_DB_NAME1_P",
        V_DB_NAME2_P = "V_DB_NAME2_P",
        Edit7 = "Edit7",
        Edit8 = "Edit8",
        Label9 = "Label9",
        Edit10 = "Edit10",
        Edit11 = "Edit11",
        v_Factory_Code = "v_Factory_Code",
        Label12 = "Label12",
        BUTTONPRODUCTION = "BUTTONPRODUCTION",
        BUTTONEV_PRODUCTION = "BUTTONEV_PRODUCTION",
        BUTTONEV_PRODUCTION_001 = "BUTTONEV_PRODUCTION_001",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
    }

    get V_DB_NAME1_P(): FormControl {
        return this.fg.controls[MgControlName.V_DB_NAME1_P] as FormControl;
    }

    get V_DB_NAME2_P(): FormControl {
        return this.fg.controls[MgControlName.V_DB_NAME2_P] as FormControl;
    }

    get Edit7(): FormControl {
        return this.fg.controls[MgControlName.Edit7] as FormControl;
    }

    get Edit8(): FormControl {
        return this.fg.controls[MgControlName.Edit8] as FormControl;
    }

    get Edit10(): FormControl {
        return this.fg.controls[MgControlName.Edit10] as FormControl;
    }

    get Edit11(): FormControl {
        return this.fg.controls[MgControlName.Edit11] as FormControl;
    }

    get v_Factory_Code(): FormControl {
        return this.fg.controls[MgControlName.v_Factory_Code] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}