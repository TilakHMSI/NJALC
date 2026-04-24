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
        Label4 = "Label4",
        Label11 = "Label11",
        Label17 = "Label17",
        S5_VIN_TYPE = "S5_VIN_TYPE",
        PRD005FRAMEENGINE_NO_S5_VIN_CD = "PRD005FRAMEENGINE_NO_S5_VIN_CD",
        S5_FRAME_NOMARK = "S5_FRAME_NOMARK",
        Label6 = "Label6",
        S5_OEM_CATEGORY = "S5_OEM_CATEGORY",
        Label2 = "Label2",
        Label8 = "Label8",
        Label14 = "Label14",
        S5_ENGMTO_CODE = "S5_ENGMTO_CODE",
        Label3 = "Label3",
        Label15 = "Label15",
        Label9 = "Label9",
        S5_ATM_MTO_CODE = "S5_ATM_MTO_CODE",
        Label20 = "Label20",
        PRD005FRAMEENGINE_NO_S5_ENGEFM = "PRD005FRAMEENGINE_NO_S5_ENGEFM",
        Label21 = "Label21",
        S5_ATM_EFM = "S5_ATM_EFM",
        Label22 = "Label22",
        Label28 = "Label28",
        Label34 = "Label34",
        Label37 = "Label37",
        Label39 = "Label39",
        S5_MTO_CODE = "S5_MTO_CODE",
        PRD005FRAMEENGINE_NO_S5_EFM = "PRD005FRAMEENGINE_NO_S5_EFM",
        S5_MTO_NAME = "S5_MTO_NAME",
        S5_COLOR_CODE = "S5_COLOR_CODE",
        Label36 = "Label36",
        Label25 = "Label25",
        Label31 = "Label31",
        S5_ENGTYPE = "S5_ENGTYPE",
        PRD005FRAMEENGINE_NO_S5_ENGNO = "PRD005FRAMEENGINE_NO_S5_ENGNO",
        S5_AEOFF_DATE = "S5_AEOFF_DATE",
        Label26 = "Label26",
        Label32 = "Label32",
        S5_ATM_NOTYPE = "S5_ATM_NOTYPE",
        PRD005FRAMEENGINE_NO_S5_ATM_NO = "PRD005FRAMEENGINE_NO_S5_ATM_NO",
        Label62 = "Label62",
        Label69 = "Label69",
        Label54 = "Label54",
        Label42 = "Label42",
        Label63 = "Label63",
        Label72 = "Label72",
        Label79 = "Label79",
        Label85 = "Label85",
        S5_COLOR_CODEINSIDE = "S5_COLOR_CODEINSIDE",
        S5_SALES_MTOC_CODE = "S5_SALES_MTOC_CODE",
        S5_KD_LOT_NO = "S5_KD_LOT_NO",
        S5_CONTRACT_NO = "S5_CONTRACT_NO",
        S5_CASE_NO = "S5_CASE_NO",
        S5_PACKING_TYPE = "S5_PACKING_TYPE",
        Label41 = "Label41",
        Label50 = "Label50",
        Label56 = "Label56",
        Label65 = "Label65",
        Label71 = "Label71",
        Label80 = "Label80",
        Label86 = "Label86",
        Label57 = "Label57",
        Label47 = "Label47",
        Label81 = "Label81",
        Label87 = "Label87",
        Label66 = "Label66",
        Label73 = "Label73",
        S5_PLAN_DATE = "S5_PLAN_DATE",
        S5_REPLACE_CATEGORY = "S5_REPLACE_CATEGORY",
        S5_AFOFF_DATE = "S5_AFOFF_DATE",
        S5_VQON_DATE = "S5_VQON_DATE",
        S5_VQOFF_DATE = "S5_VQOFF_DATE",
        S5_RE_VQ_DATE = "S5_RE_VQ_DATE",
        S5_PACKING_DATE = "S5_PACKING_DATE",
        S5_PLAN_SEQ = "S5_PLAN_SEQ",
        S5_AFOFF_TIME = "S5_AFOFF_TIME",
        S5_VQON_TIME = "S5_VQON_TIME",
        S5_VQOFF_TIME = "S5_VQOFF_TIME",
        S5_RE_VQ_TIME = "S5_RE_VQ_TIME",
        S5_PACKING_TIME = "S5_PACKING_TIME",
        S5_PLAN_SEQ_SUFFIX = "S5_PLAN_SEQ_SUFFIX",
        Label48 = "Label48",
        Label52 = "Label52",
        Label60 = "Label60",
        Label90 = "Label90",
        Label76 = "Label76",
        S5_PRODINDDATE = "S5_PRODINDDATE",
        S5_PRODLINE = "S5_PRODLINE",
        S5_TIRE_LOT = "S5_TIRE_LOT",
        PRD005FRAMEENGINE_NO_S5_KEY_NO = "PRD005FRAMEENGINE_NO_S5_KEY_NO",
        S5_PALLET_No = "S5_PALLET_No",
        Label92 = "Label92",
        Label94 = "Label94",
        Label100 = "Label100",
        Label108 = "Label108",
        Label118 = "Label118",
        Label122 = "Label122",
        S5_DESIGNNOISE = "S5_DESIGNNOISE",
        S5_DESIGNNO = "S5_DESIGNNO",
        S5_VARIANT_NO = "S5_VARIANT_NO",
        S5_CERTIFICATE_NO = "S5_CERTIFICATE_NO",
        S5_CERTIFICATE_CATEGORY = "S5_CERTIFICATE_CATEGORY",
        Label116 = "Label116",
        S5_QI_STAMP_NO = "S5_QI_STAMP_NO",
        Label124 = "Label124",
        Label95 = "Label95",
        Label101 = "Label101",
        Label109 = "Label109",
        Label119 = "Label119",
        Label125 = "Label125",
        Label132 = "Label132",
        Label104 = "Label104",
        Label96 = "Label96",
        Label114 = "Label114",
        S5_LOADING_DATE = "S5_LOADING_DATE",
        S5_SHIPPING_DATE = "S5_SHIPPING_DATE",
        S5_RETURN_DATE = "S5_RETURN_DATE",
        S5_RESHIPPING_DATE = "S5_RESHIPPING_DATE",
        S5_EXCOUTGODATE = "S5_EXCOUTGODATE",
        S5_LODAING_TIME = "S5_LODAING_TIME",
        S5_SHIPPING_TIME = "S5_SHIPPING_TIME",
        S5_RETURN_TIME = "S5_RETURN_TIME",
        S5_RESHIPPING_TIME = "S5_RESHIPPING_TIME",
        S5_EXCOUTGOTIME = "S5_EXCOUTGOTIME",
        Label128 = "Label128",
        Label110 = "Label110",
        Label102 = "Label102",
        S5_SALES_SYSTEM_TOSSVQ = "S5_SALES_SYSTEM_TOSSVQ",
        S5_TRUCK_No = "S5_TRUCK_No",
        S5_ACTUAL_PROD_LINE = "S5_ACTUAL_PROD_LINE",
        Label130 = "Label130",
        S5_SALES_TOSS = "S5_SALES_TOSS",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get S5_VIN_TYPE(): FormControl {
        return this.fg.controls[MgControlName.S5_VIN_TYPE] as FormControl;
    }

    get PRD005FRAMEENGINE_NO_S5_VIN_CD(): FormControl {
        return this.fg.controls[MgControlName.PRD005FRAMEENGINE_NO_S5_VIN_CD] as FormControl;
    }

    get S5_FRAME_NOMARK(): FormControl {
        return this.fg.controls[MgControlName.S5_FRAME_NOMARK] as FormControl;
    }

    get S5_OEM_CATEGORY(): FormControl {
        return this.fg.controls[MgControlName.S5_OEM_CATEGORY] as FormControl;
    }

    get S5_ENGMTO_CODE(): FormControl {
        return this.fg.controls[MgControlName.S5_ENGMTO_CODE] as FormControl;
    }

    get S5_ATM_MTO_CODE(): FormControl {
        return this.fg.controls[MgControlName.S5_ATM_MTO_CODE] as FormControl;
    }

    get PRD005FRAMEENGINE_NO_S5_ENGEFM(): FormControl {
        return this.fg.controls[MgControlName.PRD005FRAMEENGINE_NO_S5_ENGEFM] as FormControl;
    }

    get S5_ATM_EFM(): FormControl {
        return this.fg.controls[MgControlName.S5_ATM_EFM] as FormControl;
    }

    get S5_MTO_CODE(): FormControl {
        return this.fg.controls[MgControlName.S5_MTO_CODE] as FormControl;
    }

    get PRD005FRAMEENGINE_NO_S5_EFM(): FormControl {
        return this.fg.controls[MgControlName.PRD005FRAMEENGINE_NO_S5_EFM] as FormControl;
    }

    get S5_MTO_NAME(): FormControl {
        return this.fg.controls[MgControlName.S5_MTO_NAME] as FormControl;
    }

    get S5_COLOR_CODE(): FormControl {
        return this.fg.controls[MgControlName.S5_COLOR_CODE] as FormControl;
    }

    get S5_ENGTYPE(): FormControl {
        return this.fg.controls[MgControlName.S5_ENGTYPE] as FormControl;
    }

    get PRD005FRAMEENGINE_NO_S5_ENGNO(): FormControl {
        return this.fg.controls[MgControlName.PRD005FRAMEENGINE_NO_S5_ENGNO] as FormControl;
    }

    get S5_AEOFF_DATE(): FormControl {
        return this.fg.controls[MgControlName.S5_AEOFF_DATE] as FormControl;
    }

    get S5_ATM_NOTYPE(): FormControl {
        return this.fg.controls[MgControlName.S5_ATM_NOTYPE] as FormControl;
    }

    get PRD005FRAMEENGINE_NO_S5_ATM_NO(): FormControl {
        return this.fg.controls[MgControlName.PRD005FRAMEENGINE_NO_S5_ATM_NO] as FormControl;
    }

    get S5_COLOR_CODEINSIDE(): FormControl {
        return this.fg.controls[MgControlName.S5_COLOR_CODEINSIDE] as FormControl;
    }

    get S5_SALES_MTOC_CODE(): FormControl {
        return this.fg.controls[MgControlName.S5_SALES_MTOC_CODE] as FormControl;
    }

    get S5_KD_LOT_NO(): FormControl {
        return this.fg.controls[MgControlName.S5_KD_LOT_NO] as FormControl;
    }

    get S5_CONTRACT_NO(): FormControl {
        return this.fg.controls[MgControlName.S5_CONTRACT_NO] as FormControl;
    }

    get S5_CASE_NO(): FormControl {
        return this.fg.controls[MgControlName.S5_CASE_NO] as FormControl;
    }

    get S5_PACKING_TYPE(): FormControl {
        return this.fg.controls[MgControlName.S5_PACKING_TYPE] as FormControl;
    }

    get S5_PLAN_DATE(): FormControl {
        return this.fg.controls[MgControlName.S5_PLAN_DATE] as FormControl;
    }

    get S5_REPLACE_CATEGORY(): FormControl {
        return this.fg.controls[MgControlName.S5_REPLACE_CATEGORY] as FormControl;
    }

    get S5_AFOFF_DATE(): FormControl {
        return this.fg.controls[MgControlName.S5_AFOFF_DATE] as FormControl;
    }

    get S5_VQON_DATE(): FormControl {
        return this.fg.controls[MgControlName.S5_VQON_DATE] as FormControl;
    }

    get S5_VQOFF_DATE(): FormControl {
        return this.fg.controls[MgControlName.S5_VQOFF_DATE] as FormControl;
    }

    get S5_RE_VQ_DATE(): FormControl {
        return this.fg.controls[MgControlName.S5_RE_VQ_DATE] as FormControl;
    }

    get S5_PACKING_DATE(): FormControl {
        return this.fg.controls[MgControlName.S5_PACKING_DATE] as FormControl;
    }

    get S5_PLAN_SEQ(): FormControl {
        return this.fg.controls[MgControlName.S5_PLAN_SEQ] as FormControl;
    }

    get S5_AFOFF_TIME(): FormControl {
        return this.fg.controls[MgControlName.S5_AFOFF_TIME] as FormControl;
    }

    get S5_VQON_TIME(): FormControl {
        return this.fg.controls[MgControlName.S5_VQON_TIME] as FormControl;
    }

    get S5_VQOFF_TIME(): FormControl {
        return this.fg.controls[MgControlName.S5_VQOFF_TIME] as FormControl;
    }

    get S5_RE_VQ_TIME(): FormControl {
        return this.fg.controls[MgControlName.S5_RE_VQ_TIME] as FormControl;
    }

    get S5_PACKING_TIME(): FormControl {
        return this.fg.controls[MgControlName.S5_PACKING_TIME] as FormControl;
    }

    get S5_PLAN_SEQ_SUFFIX(): FormControl {
        return this.fg.controls[MgControlName.S5_PLAN_SEQ_SUFFIX] as FormControl;
    }

    get S5_PRODINDDATE(): FormControl {
        return this.fg.controls[MgControlName.S5_PRODINDDATE] as FormControl;
    }

    get S5_PRODLINE(): FormControl {
        return this.fg.controls[MgControlName.S5_PRODLINE] as FormControl;
    }

    get S5_TIRE_LOT(): FormControl {
        return this.fg.controls[MgControlName.S5_TIRE_LOT] as FormControl;
    }

    get PRD005FRAMEENGINE_NO_S5_KEY_NO(): FormControl {
        return this.fg.controls[MgControlName.PRD005FRAMEENGINE_NO_S5_KEY_NO] as FormControl;
    }

    get S5_PALLET_No(): FormControl {
        return this.fg.controls[MgControlName.S5_PALLET_No] as FormControl;
    }

    get S5_DESIGNNOISE(): FormControl {
        return this.fg.controls[MgControlName.S5_DESIGNNOISE] as FormControl;
    }

    get S5_DESIGNNO(): FormControl {
        return this.fg.controls[MgControlName.S5_DESIGNNO] as FormControl;
    }

    get S5_VARIANT_NO(): FormControl {
        return this.fg.controls[MgControlName.S5_VARIANT_NO] as FormControl;
    }

    get S5_CERTIFICATE_NO(): FormControl {
        return this.fg.controls[MgControlName.S5_CERTIFICATE_NO] as FormControl;
    }

    get S5_CERTIFICATE_CATEGORY(): FormControl {
        return this.fg.controls[MgControlName.S5_CERTIFICATE_CATEGORY] as FormControl;
    }

    get S5_QI_STAMP_NO(): FormControl {
        return this.fg.controls[MgControlName.S5_QI_STAMP_NO] as FormControl;
    }

    get S5_LOADING_DATE(): FormControl {
        return this.fg.controls[MgControlName.S5_LOADING_DATE] as FormControl;
    }

    get S5_SHIPPING_DATE(): FormControl {
        return this.fg.controls[MgControlName.S5_SHIPPING_DATE] as FormControl;
    }

    get S5_RETURN_DATE(): FormControl {
        return this.fg.controls[MgControlName.S5_RETURN_DATE] as FormControl;
    }

    get S5_RESHIPPING_DATE(): FormControl {
        return this.fg.controls[MgControlName.S5_RESHIPPING_DATE] as FormControl;
    }

    get S5_EXCOUTGODATE(): FormControl {
        return this.fg.controls[MgControlName.S5_EXCOUTGODATE] as FormControl;
    }

    get S5_LODAING_TIME(): FormControl {
        return this.fg.controls[MgControlName.S5_LODAING_TIME] as FormControl;
    }

    get S5_SHIPPING_TIME(): FormControl {
        return this.fg.controls[MgControlName.S5_SHIPPING_TIME] as FormControl;
    }

    get S5_RETURN_TIME(): FormControl {
        return this.fg.controls[MgControlName.S5_RETURN_TIME] as FormControl;
    }

    get S5_RESHIPPING_TIME(): FormControl {
        return this.fg.controls[MgControlName.S5_RESHIPPING_TIME] as FormControl;
    }

    get S5_EXCOUTGOTIME(): FormControl {
        return this.fg.controls[MgControlName.S5_EXCOUTGOTIME] as FormControl;
    }

    get S5_SALES_SYSTEM_TOSSVQ(): FormControl {
        return this.fg.controls[MgControlName.S5_SALES_SYSTEM_TOSSVQ] as FormControl;
    }

    get S5_TRUCK_No(): FormControl {
        return this.fg.controls[MgControlName.S5_TRUCK_No] as FormControl;
    }

    get S5_ACTUAL_PROD_LINE(): FormControl {
        return this.fg.controls[MgControlName.S5_ACTUAL_PROD_LINE] as FormControl;
    }

    get S5_SALES_TOSS(): FormControl {
        return this.fg.controls[MgControlName.S5_SALES_TOSS] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}