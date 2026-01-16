import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PRODUCTIONRESULTENTRYMENU = "PRODUCTIONRESULTENTRYMENU",
        Image1 = "Image1",
        Label2 = "Label2",
        V_LOCATE_P = "V_LOCATE_P",
        Edit5 = "Edit5",
        Label4 = "Label4",
        Edit6 = "Edit6",
        V_DB_NAME1_P = "V_DB_NAME1_P",
        V_DB_NAME2_P = "V_DB_NAME2_P",
        Label9 = "Label9",
        New_PDIOFF_RESULT_ENTVPRDO066 = "New_PDIOFF_RESULT_ENTVPRDO066",
        AEOFF_RESULT_ENTRYVPRDO041 = "AEOFF_RESULT_ENTRYVPRDO041",
        AFOFF_RESULT_ENTRYVPRDO042 = "AFOFF_RESULT_ENTRYVPRDO042",
        VQON_RESULT_ENTRYVPRDO065 = "VQON_RESULT_ENTRYVPRDO065",
        FRM_VQOFF_RESULT_ENTVPRDO043 = "FRM_VQOFF_RESULT_ENTVPRDO043",
        PACKING_RESULT_ENTRYVPRDO044 = "PACKING_RESULT_ENTRYVPRDO044",
        SHIPPING_RESULT_ENTRYVPRDO045 = "SHIPPING_RESULT_ENTRYVPRDO045",
        RETURN_RESULT_ENTRYVPRDO046 = "RETURN_RESULT_ENTRYVPRDO046",
        EXC_OUTGO_RESULTVPRDO047 = "EXC_OUTGO_RESULTVPRDO047",
        BJPN_ENGINE_NO_ENTRY = "BJPN_ENGINE_NO_ENTRY",
        btnexit = "btnexit",
        AF_TEST = "AF_TEST",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
    }

    get Edit5(): FormControl {
        return this.fg.controls[MgControlName.Edit5] as FormControl;
    }

    get Edit6(): FormControl {
        return this.fg.controls[MgControlName.Edit6] as FormControl;
    }

    get V_DB_NAME1_P(): FormControl {
        return this.fg.controls[MgControlName.V_DB_NAME1_P] as FormControl;
    }

    get V_DB_NAME2_P(): FormControl {
        return this.fg.controls[MgControlName.V_DB_NAME2_P] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}