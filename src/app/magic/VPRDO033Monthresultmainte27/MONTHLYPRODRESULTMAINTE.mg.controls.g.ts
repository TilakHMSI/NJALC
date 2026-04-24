import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    MONTHLYPRODRESULTMAINTE = "MONTHLYPRODRESULTMAINTE",
        V_LOCATE_P = "V_LOCATE_P",
        Label2 = "Label2",
        Label5 = "Label5",
        Label7 = "Label7",
        YYYYMM_V = "YYYYMM_V",
        Label6 = "Label6",
        EFM_V = "EFM_V",
        Label9 = "Label9",
        PRODLINE_V = "PRODLINE_V",
        btnexit = "btnexit",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        MONTHLY_PRDRESULT_MAINTE_HVN = "MONTHLY_PRDRESULT_MAINTE_HVN",
        Label11 = "Label11",
        Label12 = "Label12",
        V_TOTAL_LAST_M_PROG_V = "V_TOTAL_LAST_M_PROG_V",
        V_TOTAL_AFOFF_PLAN_V = "V_TOTAL_AFOFF_PLAN_V",
        V_TOTAL_AFOFF_V = "V_TOTAL_AFOFF_V",
        V_TOTAL_TOTAL_PROG_V = "V_TOTAL_TOTAL_PROG_V",
        V_TOTAL_WEOFF_V = "V_TOTAL_WEOFF_V",
        V_TOTAL_VQOFF_V = "V_TOTAL_VQOFF_V",
        V_TOTAL_PACK_V = "V_TOTAL_PACK_V",
        V_TOTAL_SHIP_V = "V_TOTAL_SHIP_V",
        V_TOTAL_NVQOFF_STOCK_V = "V_TOTAL_NVQOFF_STOCK_V",
        V_TOTAL_RETURN_V = "V_TOTAL_RETURN_V",
        V_TOTAL_RESHIP_V = "V_TOTAL_RESHIP_V",
        V_TOTAL_VQOFF_STOCK_V = "V_TOTAL_VQOFF_STOCK_V",
        V_TOTAL_PACKING_STOCK_V = "V_TOTAL_PACKING_STOCK_V",
        V_TOTAL_EXCOUTGO_V = "V_TOTAL_EXCOUTGO_V",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
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

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get V_TOTAL_LAST_M_PROG_V(): FormControl {
        return this.fg.controls[MgControlName.V_TOTAL_LAST_M_PROG_V] as FormControl;
    }

    get V_TOTAL_AFOFF_PLAN_V(): FormControl {
        return this.fg.controls[MgControlName.V_TOTAL_AFOFF_PLAN_V] as FormControl;
    }

    get V_TOTAL_AFOFF_V(): FormControl {
        return this.fg.controls[MgControlName.V_TOTAL_AFOFF_V] as FormControl;
    }

    get V_TOTAL_TOTAL_PROG_V(): FormControl {
        return this.fg.controls[MgControlName.V_TOTAL_TOTAL_PROG_V] as FormControl;
    }

    get V_TOTAL_WEOFF_V(): FormControl {
        return this.fg.controls[MgControlName.V_TOTAL_WEOFF_V] as FormControl;
    }

    get V_TOTAL_VQOFF_V(): FormControl {
        return this.fg.controls[MgControlName.V_TOTAL_VQOFF_V] as FormControl;
    }

    get V_TOTAL_PACK_V(): FormControl {
        return this.fg.controls[MgControlName.V_TOTAL_PACK_V] as FormControl;
    }

    get V_TOTAL_SHIP_V(): FormControl {
        return this.fg.controls[MgControlName.V_TOTAL_SHIP_V] as FormControl;
    }

    get V_TOTAL_NVQOFF_STOCK_V(): FormControl {
        return this.fg.controls[MgControlName.V_TOTAL_NVQOFF_STOCK_V] as FormControl;
    }

    get V_TOTAL_RETURN_V(): FormControl {
        return this.fg.controls[MgControlName.V_TOTAL_RETURN_V] as FormControl;
    }

    get V_TOTAL_RESHIP_V(): FormControl {
        return this.fg.controls[MgControlName.V_TOTAL_RESHIP_V] as FormControl;
    }

    get V_TOTAL_VQOFF_STOCK_V(): FormControl {
        return this.fg.controls[MgControlName.V_TOTAL_VQOFF_STOCK_V] as FormControl;
    }

    get V_TOTAL_PACKING_STOCK_V(): FormControl {
        return this.fg.controls[MgControlName.V_TOTAL_PACKING_STOCK_V] as FormControl;
    }

    get V_TOTAL_EXCOUTGO_V(): FormControl {
        return this.fg.controls[MgControlName.V_TOTAL_EXCOUTGO_V] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}