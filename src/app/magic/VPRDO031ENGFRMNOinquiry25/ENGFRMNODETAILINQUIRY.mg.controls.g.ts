import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ENGFRMNODETAILINQUIRY = "ENGFRMNODETAILINQUIRY",
        Label1 = "Label1",
        Label8 = "Label8",
        ENGFRMTYPE_V = "ENGFRMTYPE_V",
        Label9 = "Label9",
        CHASSIS_NO_V = "CHASSIS_NO_V",
        btnexit = "btnexit",
        V_LOCATE_P = "V_LOCATE_P",
        Label5 = "Label5",
        Edit6 = "Edit6",
        Edit7 = "Edit7",
        ENGFRM_NO_DETAIL_INQUIRY = "ENGFRM_NO_DETAIL_INQUIRY",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get ENGFRMTYPE_V(): FormControl {
        return this.fg.controls[MgControlName.ENGFRMTYPE_V] as FormControl;
    }

    get CHASSIS_NO_V(): FormControl {
        return this.fg.controls[MgControlName.CHASSIS_NO_V] as FormControl;
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