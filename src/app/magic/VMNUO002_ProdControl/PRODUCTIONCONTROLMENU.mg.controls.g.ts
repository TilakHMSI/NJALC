import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PRODUCTIONCONTROLMENU = "PRODUCTIONCONTROLMENU",
        Image3 = "Image3",
        V_DB_NAME1_P = "V_DB_NAME1_P",
        V_DB_NAME2_P = "V_DB_NAME2_P",
        V_LOCATE_P = "V_LOCATE_P",
        Label1 = "Label1",
        Edit6 = "Edit6",
        Edit7 = "Edit7",
        BUTTONMTOC_INFORMATION = "BUTTONMTOC_INFORMATION",
        BUTTONPRODUCTION_SCEDULE = "BUTTONPRODUCTION_SCEDULE",
        BUTTONPRODUCTION_RESULT = "BUTTONPRODUCTION_RESULT",
        BUTTONPRODUCTION_ENTRY = "BUTTONPRODUCTION_ENTRY",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_DB_NAME1_P(): FormControl {
        return this.fg.controls[MgControlName.V_DB_NAME1_P] as FormControl;
    }

    get V_DB_NAME2_P(): FormControl {
        return this.fg.controls[MgControlName.V_DB_NAME2_P] as FormControl;
    }

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
    }

    get Edit6(): FormControl {
        return this.fg.controls[MgControlName.Edit6] as FormControl;
    }

    get Edit7(): FormControl {
        return this.fg.controls[MgControlName.Edit7] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}