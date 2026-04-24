import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DAILYPRODRESULTINQUIRY = "DAILYPRODRESULTINQUIRY",
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
        DAILY_PRODRESULT_INQUIRY = "DAILY_PRODRESULT_INQUIRY",
        Label11 = "Label11",
        Label12 = "Label12",
        V_CNT_LAST_PROG = "V_CNT_LAST_PROG",
        V_CNT_PLAN = "V_CNT_PLAN",
        V_CNT_AF_OFF = "V_CNT_AF_OFF",
        V_CNT_PROG = "V_CNT_PROG",
        V_TOTAL_PROG = "V_TOTAL_PROG",
        V_CNT_WE_OFF = "V_CNT_WE_OFF",
        V_CNT_VQ_OFF = "V_CNT_VQ_OFF",
        V_CNT_PACK = "V_CNT_PACK",
        V_CNT_SHIP = "V_CNT_SHIP",
        V_CNT_RETURN = "V_CNT_RETURN",
        V_CNT_RESHIP = "V_CNT_RESHIP",
        V_CNT_EX_OUT = "V_CNT_EX_OUT",
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

    get V_CNT_LAST_PROG(): FormControl {
        return this.fg.controls[MgControlName.V_CNT_LAST_PROG] as FormControl;
    }

    get V_CNT_PLAN(): FormControl {
        return this.fg.controls[MgControlName.V_CNT_PLAN] as FormControl;
    }

    get V_CNT_AF_OFF(): FormControl {
        return this.fg.controls[MgControlName.V_CNT_AF_OFF] as FormControl;
    }

    get V_CNT_PROG(): FormControl {
        return this.fg.controls[MgControlName.V_CNT_PROG] as FormControl;
    }

    get V_TOTAL_PROG(): FormControl {
        return this.fg.controls[MgControlName.V_TOTAL_PROG] as FormControl;
    }

    get V_CNT_WE_OFF(): FormControl {
        return this.fg.controls[MgControlName.V_CNT_WE_OFF] as FormControl;
    }

    get V_CNT_VQ_OFF(): FormControl {
        return this.fg.controls[MgControlName.V_CNT_VQ_OFF] as FormControl;
    }

    get V_CNT_PACK(): FormControl {
        return this.fg.controls[MgControlName.V_CNT_PACK] as FormControl;
    }

    get V_CNT_SHIP(): FormControl {
        return this.fg.controls[MgControlName.V_CNT_SHIP] as FormControl;
    }

    get V_CNT_RETURN(): FormControl {
        return this.fg.controls[MgControlName.V_CNT_RETURN] as FormControl;
    }

    get V_CNT_RESHIP(): FormControl {
        return this.fg.controls[MgControlName.V_CNT_RESHIP] as FormControl;
    }

    get V_CNT_EX_OUT(): FormControl {
        return this.fg.controls[MgControlName.V_CNT_EX_OUT] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}