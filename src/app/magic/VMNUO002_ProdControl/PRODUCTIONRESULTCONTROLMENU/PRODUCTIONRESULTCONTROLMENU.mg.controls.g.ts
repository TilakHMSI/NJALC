import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PRODUCTIONRESULTCONTROLMENU = "PRODUCTIONRESULTCONTROLMENU",
        V_DB_NAME1_P = "V_DB_NAME1_P",
        V_DB_NAME2_P = "V_DB_NAME2_P",
        V_LOCATE_P = "V_LOCATE_P",
        Label2 = "Label2",
        Edit5 = "Edit5",
        Edit6 = "Edit6",
        Label7 = "Label7",
        BUTTONVPRDO032 = "BUTTONVPRDO032",
        BUTTONVPRDO033 = "BUTTONVPRDO033",
        BUTTONVPRDO034 = "BUTTONVPRDO034",
        BUTTONVPRDO031 = "BUTTONVPRDO031",
        Label8 = "Label8",
        BUTTONMONTHLY_PRODCTHISTRY = "BUTTONMONTHLY_PRODCTHISTRY",
        Label9 = "Label9",
        BUTTONVPRDO035 = "BUTTONVPRDO035",
        BUTTONVPRDO036 = "BUTTONVPRDO036",
        BUTTONVPRDO037 = "BUTTONVPRDO037",
        BUTTONVPRDO061 = "BUTTONVPRDO061",
        VPRDO003HISTORY_INQUIRY = "VPRDO003HISTORY_INQUIRY",
        Label10 = "Label10",
        BUTTONAEAF_OFF_RESULT = "BUTTONAEAF_OFF_RESULT",
        BUTTONDAILY_PROD_RESULT = "BUTTONDAILY_PROD_RESULT",
        BUTTONMONTHLY_PROCRESULT = "BUTTONMONTHLY_PROCRESULT",
        BUTTONNONUNITING_ENG = "BUTTONNONUNITING_ENG",
        BUTTONNONINSPECTED = "BUTTONNONINSPECTED",
        BUTTONFACTORY_STOCK_LIST = "BUTTONFACTORY_STOCK_LIST",
        Label11 = "Label11",
        Label12 = "Label12",
        UNITING_ENGINE_NOCORRECT = "UNITING_ENGINE_NOCORRECT",
        Label13 = "Label13",
        Label14 = "Label14",
        BUTTONPDIOFF_FRAME_TXTHMSI = "BUTTONPDIOFF_FRAME_TXTHMSI",
        Label15 = "Label15",
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

    get Edit5(): FormControl {
        return this.fg.controls[MgControlName.Edit5] as FormControl;
    }

    get Edit6(): FormControl {
        return this.fg.controls[MgControlName.Edit6] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}