import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ProductionControlHMSI = "ProductionControlHMSI",
        Label1 = "Label1",
        btnexit = "btnexit",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        Edit5 = "Edit5",
        Label6 = "Label6",
        MISSING_E_F_V = "MISSING_E_F_V",
        INDICATION_LIST_V = "INDICATION_LIST_V",
        ENGINE_CARD_V = "ENGINE_CARD_V",
        MONTHLY_PRODUCTION_V = "MONTHLY_PRODUCTION_V",
        FRAME_OFF_V = "FRAME_OFF_V",
        DAILY_PROD_V = "DAILY_PROD_V",
        DAILY_FRAME_V = "DAILY_FRAME_V",
        KSPA_ENGINE_V = "KSPA_ENGINE_V",
        NOT_AF_OFF = "NOT_AF_OFF",
        AF_OFF = "AF_OFF",
        CLRINDLIST = "CLRINDLIST",
        SHIFTWISEAFOFF = "SHIFTWISEAFOFF",
        DLY_PRD_LST = "DLY_PRD_LST",
        HRLY_PRD_REP__AF = "HRLY_PRD_REP__AF",
        HRLY_PRD_REP__AE = "HRLY_PRD_REP__AE",
        DLY_PRD_LST_MERGE = "DLY_PRD_LST_MERGE",
        DAILY_FRAME_V_MERGE = "DAILY_FRAME_V_MERGE",
        FACTORY_STOCK = "FACTORY_STOCK",
        V_ShiftwiseProductionReport = "V_ShiftwiseProductionReport",
        VMORE = "VMORE",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get Edit5(): FormControl {
        return this.fg.controls[MgControlName.Edit5] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}