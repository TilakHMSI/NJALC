import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PRODSCEDULECONTROLMENU = "PRODSCEDULECONTROLMENU",
        V_LOCATE_P = "V_LOCATE_P",
        Label2 = "Label2",
        V_DB_NAME1_P = "V_DB_NAME1_P",
        V_DB_NAME2_P = "V_DB_NAME2_P",
        Edit5 = "Edit5",
        Edit6 = "Edit6",
        Label7 = "Label7",
        BUTTONVPRT0021 = "BUTTONVPRT0021",
        BUTTONVPRT0022 = "BUTTONVPRT0022",
        BUTTONVPRT0023 = "BUTTONVPRT0023",
        BUTTONVPRT0024 = "BUTTONVPRT0024",
        BUTTONVPRT0025 = "BUTTONVPRT0025",
        BUTTONVPRT0026 = "BUTTONVPRT0026",
        Label8 = "Label8",
        Label10 = "Label10",
        BUTTONPROD_INDICATE = "BUTTONPROD_INDICATE",
        BUTTONYEAR_PROD_PLAN = "BUTTONYEAR_PROD_PLAN",
        BUTTONMONTHLY_PROD_PLAN = "BUTTONMONTHLY_PROD_PLAN",
        BUTTONPROD_SEQ_PLAN = "BUTTONPROD_SEQ_PLAN",
        Label11 = "Label11",
        Label9 = "Label9",
        BUTTONBRRTO027 = "BUTTONBRRTO027",
        Label12 = "Label12",
        BUTTONPROD_SEQ_PLAN_001 = "BUTTONPROD_SEQ_PLAN_001",
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