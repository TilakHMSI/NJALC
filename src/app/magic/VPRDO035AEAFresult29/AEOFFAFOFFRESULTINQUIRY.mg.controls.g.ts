import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    AEOFFAFOFFRESULTINQUIRY = "AEOFFAFOFFRESULTINQUIRY",
        Label3 = "Label3",
        SELECT_V = "SELECT_V",
        V_LOCATE_P = "V_LOCATE_P",
        Label2 = "Label2",
        YYYYMMDD_V = "YYYYMMDD_V",
        Edit5 = "Edit5",
        Edit6 = "Edit6",
        YYYYMM_V = "YYYYMM_V",
        Label8 = "Label8",
        EFM_V = "EFM_V",
        Label9 = "Label9",
        PRODLINE_V = "PRODLINE_V",
        btnexit = "btnexit",
        AEOFFAFOFF_RESULT_INQUIRY = "AEOFFAFOFF_RESULT_INQUIRY",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get SELECT_V(): FormControl {
        return this.fg.controls[MgControlName.SELECT_V] as FormControl;
    }

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
    }

    get YYYYMMDD_V(): FormControl {
        return this.fg.controls[MgControlName.YYYYMMDD_V] as FormControl;
    }

    get Edit5(): FormControl {
        return this.fg.controls[MgControlName.Edit5] as FormControl;
    }

    get Edit6(): FormControl {
        return this.fg.controls[MgControlName.Edit6] as FormControl;
    }

    get YYYYMM_V(): FormControl {
        return this.fg.controls[MgControlName.YYYYMM_V] as FormControl;
    }

    get EFM_V(): FormControl {
        return this.fg.controls[MgControlName.EFM_V] as FormControl;
    }

    get PRODLINE_V(): FormControl {
        return this.fg.controls[MgControlName.PRODLINE_V] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}