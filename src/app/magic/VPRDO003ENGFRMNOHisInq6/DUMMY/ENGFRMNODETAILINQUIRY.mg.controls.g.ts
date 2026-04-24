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
        Label2 = "Label2",
        Label5 = "Label5",
        Label7 = "Label7",
        PRD008MTOC_HISTORY_S8_VIN_TYPE = "PRD008MTOC_HISTORY_S8_VIN_TYPE",
        PRD008MTOC_HISTORY_S8_VIN_CD = "PRD008MTOC_HISTORY_S8_VIN_CD",
        S8_FRAME_NOMARK = "S8_FRAME_NOMARK",
        Label8 = "Label8",
        Label14 = "Label14",
        Label19 = "Label19",
        Label25 = "Label25",
        Label31 = "Label31",
        PRD008MTOC_HISTORY_S8_MTO_CODE = "PRD008MTOC_HISTORY_S8_MTO_CODE",
        PRD008MTOC_HISTORY_S8_MTO_NAME = "PRD008MTOC_HISTORY_S8_MTO_NAME",
        S8_COLOR_CODE = "S8_COLOR_CODE",
        S8_COLOR_CODEINSIDE = "S8_COLOR_CODEINSIDE",
        Label9 = "Label9",
        Label17 = "Label17",
        Label23 = "Label23",
        Label29 = "Label29",
        Label35 = "Label35",
        Label11 = "Label11",
        Edit15 = "Edit15",
        PRD008MTOC_HISTORY_S8_ENGTYPE = "PRD008MTOC_HISTORY_S8_ENGTYPE",
        PRD008MTOC_HISTORY_S8_ENGNO = "PRD008MTOC_HISTORY_S8_ENGNO",
        S8_AEOFF_DATE = "S8_AEOFF_DATE",
        Label10 = "Label10",
        Label18 = "Label18",
        Label24 = "Label24",
        Label30 = "Label30",
        Label36 = "Label36",
        Label12 = "Label12",
        PRD008MTOC_HISTORY_S8_EFM = "PRD008MTOC_HISTORY_S8_EFM",
        S8_ENGFRMTYPE = "S8_ENGFRMTYPE",
        S8_CHASSIS_NO = "S8_CHASSIS_NO",
        S8_AFOFF_DATE = "S8_AFOFF_DATE",
        Label37 = "Label37",
        Label39 = "Label39",
        S8_KD_LOT_NO = "S8_KD_LOT_NO",
        Label38 = "Label38",
        Label41 = "Label41",
        S8_VQON_DATE = "S8_VQON_DATE",
        Label43 = "Label43",
        S8_VQOFF_DATE = "S8_VQOFF_DATE",
        Label45 = "Label45",
        Label51 = "Label51",
        Label57 = "Label57",
        Label61 = "Label61",
        S8_CONTRACT_NO = "S8_CONTRACT_NO",
        PRD008MTOC_HISTORY_S8_CASE_NO = "PRD008MTOC_HISTORY_S8_CASE_NO",
        S8_PACKING_TYPE = "S8_PACKING_TYPE",
        Label58 = "Label58",
        Label46 = "Label46",
        Label52 = "Label52",
        S8_PDIOFF_DATE = "S8_PDIOFF_DATE",
        S8_LOADING_DATE = "S8_LOADING_DATE",
        S8_EXCOUTGODATE = "S8_EXCOUTGODATE",
        Label48 = "Label48",
        Label54 = "Label54",
        S8_PACKING_DATE = "S8_PACKING_DATE",
        S8_SHIPPING_DATE = "S8_SHIPPING_DATE",
        Label62 = "Label62",
        Label66 = "Label66",
        Label67 = "Label67",
        S8_CERTIFICATE_NO = "S8_CERTIFICATE_NO",
        S8_CERTIFICATE_CATEGORY = "S8_CERTIFICATE_CATEGORY",
        Label64 = "Label64",
        S8_QI_STAMP_NO = "S8_QI_STAMP_NO",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PRD008MTOC_HISTORY_S8_VIN_TYPE(): FormControl {
        return this.fg.controls[MgControlName.PRD008MTOC_HISTORY_S8_VIN_TYPE] as FormControl;
    }

    get PRD008MTOC_HISTORY_S8_VIN_CD(): FormControl {
        return this.fg.controls[MgControlName.PRD008MTOC_HISTORY_S8_VIN_CD] as FormControl;
    }

    get S8_FRAME_NOMARK(): FormControl {
        return this.fg.controls[MgControlName.S8_FRAME_NOMARK] as FormControl;
    }

    get PRD008MTOC_HISTORY_S8_MTO_CODE(): FormControl {
        return this.fg.controls[MgControlName.PRD008MTOC_HISTORY_S8_MTO_CODE] as FormControl;
    }

    get PRD008MTOC_HISTORY_S8_MTO_NAME(): FormControl {
        return this.fg.controls[MgControlName.PRD008MTOC_HISTORY_S8_MTO_NAME] as FormControl;
    }

    get S8_COLOR_CODE(): FormControl {
        return this.fg.controls[MgControlName.S8_COLOR_CODE] as FormControl;
    }

    get S8_COLOR_CODEINSIDE(): FormControl {
        return this.fg.controls[MgControlName.S8_COLOR_CODEINSIDE] as FormControl;
    }

    get Edit15(): FormControl {
        return this.fg.controls[MgControlName.Edit15] as FormControl;
    }

    get PRD008MTOC_HISTORY_S8_ENGTYPE(): FormControl {
        return this.fg.controls[MgControlName.PRD008MTOC_HISTORY_S8_ENGTYPE] as FormControl;
    }

    get PRD008MTOC_HISTORY_S8_ENGNO(): FormControl {
        return this.fg.controls[MgControlName.PRD008MTOC_HISTORY_S8_ENGNO] as FormControl;
    }

    get S8_AEOFF_DATE(): FormControl {
        return this.fg.controls[MgControlName.S8_AEOFF_DATE] as FormControl;
    }

    get PRD008MTOC_HISTORY_S8_EFM(): FormControl {
        return this.fg.controls[MgControlName.PRD008MTOC_HISTORY_S8_EFM] as FormControl;
    }

    get S8_ENGFRMTYPE(): FormControl {
        return this.fg.controls[MgControlName.S8_ENGFRMTYPE] as FormControl;
    }

    get S8_CHASSIS_NO(): FormControl {
        return this.fg.controls[MgControlName.S8_CHASSIS_NO] as FormControl;
    }

    get S8_AFOFF_DATE(): FormControl {
        return this.fg.controls[MgControlName.S8_AFOFF_DATE] as FormControl;
    }

    get S8_KD_LOT_NO(): FormControl {
        return this.fg.controls[MgControlName.S8_KD_LOT_NO] as FormControl;
    }

    get S8_VQON_DATE(): FormControl {
        return this.fg.controls[MgControlName.S8_VQON_DATE] as FormControl;
    }

    get S8_VQOFF_DATE(): FormControl {
        return this.fg.controls[MgControlName.S8_VQOFF_DATE] as FormControl;
    }

    get S8_CONTRACT_NO(): FormControl {
        return this.fg.controls[MgControlName.S8_CONTRACT_NO] as FormControl;
    }

    get PRD008MTOC_HISTORY_S8_CASE_NO(): FormControl {
        return this.fg.controls[MgControlName.PRD008MTOC_HISTORY_S8_CASE_NO] as FormControl;
    }

    get S8_PACKING_TYPE(): FormControl {
        return this.fg.controls[MgControlName.S8_PACKING_TYPE] as FormControl;
    }

    get S8_PDIOFF_DATE(): FormControl {
        return this.fg.controls[MgControlName.S8_PDIOFF_DATE] as FormControl;
    }

    get S8_LOADING_DATE(): FormControl {
        return this.fg.controls[MgControlName.S8_LOADING_DATE] as FormControl;
    }

    get S8_EXCOUTGODATE(): FormControl {
        return this.fg.controls[MgControlName.S8_EXCOUTGODATE] as FormControl;
    }

    get S8_PACKING_DATE(): FormControl {
        return this.fg.controls[MgControlName.S8_PACKING_DATE] as FormControl;
    }

    get S8_SHIPPING_DATE(): FormControl {
        return this.fg.controls[MgControlName.S8_SHIPPING_DATE] as FormControl;
    }

    get S8_CERTIFICATE_NO(): FormControl {
        return this.fg.controls[MgControlName.S8_CERTIFICATE_NO] as FormControl;
    }

    get S8_CERTIFICATE_CATEGORY(): FormControl {
        return this.fg.controls[MgControlName.S8_CERTIFICATE_CATEGORY] as FormControl;
    }

    get S8_QI_STAMP_NO(): FormControl {
        return this.fg.controls[MgControlName.S8_QI_STAMP_NO] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}