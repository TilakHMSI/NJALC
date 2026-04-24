import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    SHIPPINGRESULTINQUIRY = "SHIPPINGRESULTINQUIRY",
        Label3 = "Label3",
        SELECT_DATE_V = "SELECT_DATE_V",
        SELECT_FORMAT_V = "SELECT_FORMAT_V",
        YYYYMMDD_V = "YYYYMMDD_V",
        V_LOCATE_P = "V_LOCATE_P",
        Label2 = "Label2",
        Label5 = "Label5",
        Label6 = "Label6",
        Edit7 = "Edit7",
        Edit8 = "Edit8",
        Label10 = "Label10",
        YYYYMM_V = "YYYYMM_V",
        Label11 = "Label11",
        SHIPPING_RESULT_INQUIRY = "SHIPPING_RESULT_INQUIRY",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get SELECT_DATE_V(): FormControl {
        return this.fg.controls[MgControlName.SELECT_DATE_V] as FormControl;
    }

    get SELECT_FORMAT_V(): FormControl {
        return this.fg.controls[MgControlName.SELECT_FORMAT_V] as FormControl;
    }

    get YYYYMMDD_V(): FormControl {
        return this.fg.controls[MgControlName.YYYYMMDD_V] as FormControl;
    }

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
    }

    get Edit7(): FormControl {
        return this.fg.controls[MgControlName.Edit7] as FormControl;
    }

    get Edit8(): FormControl {
        return this.fg.controls[MgControlName.Edit8] as FormControl;
    }

    get YYYYMM_V(): FormControl {
        return this.fg.controls[MgControlName.YYYYMM_V] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}