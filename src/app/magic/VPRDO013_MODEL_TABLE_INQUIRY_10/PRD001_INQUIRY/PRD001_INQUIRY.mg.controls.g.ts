import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PRD001_INQUIRY = "PRD001_INQUIRY",
        Label1 = "Label1",
        Label3 = "Label3",
        S1_MTO_CODE = "S1_MTO_CODE",
        Label5 = "Label5",
        S1_EFM = "S1_EFM",
        Label2 = "Label2",
        S1_MTO_NAME = "S1_MTO_NAME",
        Label7 = "Label7",
        S1_PARTS_MTO_CODE = "S1_PARTS_MTO_CODE",
        Label9 = "Label9",
        S1_24G = "S1_24G",
        Label10 = "Label10",
        Label21 = "Label21",
        Label17 = "Label17",
        Label31 = "Label31",
        S1_ENGFRMTYPE = "S1_ENGFRMTYPE",
        S1_PROD1ST_CHASSIS_NO = "S1_PROD1ST_CHASSIS_NO",
        S1_VIN_TYPE = "S1_VIN_TYPE",
        Label11 = "Label11",
        Label27 = "Label27",
        Label20 = "Label20",
        Label14 = "Label14",
        Label34 = "Label34",
        S1_COOL = "S1_COOL",
        S1_CYCLE = "S1_CYCLE",
        S1_USE = "S1_USE",
        PRD090USE_NOTICE_090_NOTICE = "PRD090USE_NOTICE_090_NOTICE",
        Label12 = "Label12",
        Label15 = "Label15",
        Label23 = "Label23",
        Label28 = "Label28",
        S1_PRODLINEMAIN = "S1_PRODLINEMAIN",
        S1_PRODLINESUB = "S1_PRODLINESUB",
        Label13 = "Label13",
        Label19 = "Label19",
        Label26 = "Label26",
        Label38 = "Label38",
        Label33 = "Label33",
        S1_TRIAL_PARTS_TBL_CREDATE = "S1_TRIAL_PARTS_TBL_CREDATE",
        S1_MASS_PRODORDER_DATE = "S1_MASS_PRODORDER_DATE",
        S1_MASS_PRODDATE = "S1_MASS_PRODDATE",
        S1_PRODCLOSE_DATE = "S1_PRODCLOSE_DATE",
        Label43 = "Label43",
        Label42 = "Label42",
        S1_CC = "S1_CC",
        Label40 = "Label40",
        Label44 = "Label44",
        S1_OEM_CATEGORY = "S1_OEM_CATEGORY",
        Label41 = "Label41",
        Label45 = "Label45",
        S1_DUMMY_MODEL_TYPE = "S1_DUMMY_MODEL_TYPE",
        Label48 = "Label48",
        S1_BASIC_MTO_CODE = "S1_BASIC_MTO_CODE",
        Label49 = "Label49",
        S1_CATEGORY = "S1_CATEGORY",
        Label50 = "Label50",
        S1_SHORT_BLOCK = "S1_SHORT_BLOCK",
        Label52 = "Label52",
        S1_PACKING_LOT = "S1_PACKING_LOT",
        Label51 = "Label51",
        S1_COST_CONTROL = "S1_COST_CONTROL",
        Label54 = "Label54",
        S1_FAMILY = "S1_FAMILY",
        Label56 = "Label56",
        S1_KD_PACKING_LOT = "S1_KD_PACKING_LOT",
        Label58 = "Label58",
        Label62 = "Label62",
        Label67 = "Label67",
        Label81 = "Label81",
        S1_ENGEFM = "S1_ENGEFM",
        S1_ENGMTO_CODE = "S1_ENGMTO_CODE",
        Label59 = "Label59",
        Label63 = "Label63",
        Label83 = "Label83",
        Label68 = "Label68",
        Label75 = "Label75",
        S1_ATM_MTO_CODE = "S1_ATM_MTO_CODE",
        S1_ATM_EFM = "S1_ATM_EFM",
        S1_ATM_METHODVARIANT = "S1_ATM_METHODVARIANT",
        Label60 = "Label60",
        Label77 = "Label77",
        Label70 = "Label70",
        Label64 = "Label64",
        Label85 = "Label85",
        S1_TACT = "S1_TACT",
        S1_KD_MOTHER_FACTORY = "S1_KD_MOTHER_FACTORY",
        S1_PORTPRODLEAD_TIME = "S1_PORTPRODLEAD_TIME",
        S1_SRS = "S1_SRS",
        Label61 = "Label61",
        Label66 = "Label66",
        Label87 = "Label87",
        Label79 = "Label79",
        Label72 = "Label72",
        S1_DESIGNNOISE = "S1_DESIGNNOISE",
        S1_DESIGNNO = "S1_DESIGNNO",
        S1_VARIANT_NO = "S1_VARIANT_NO",
        Sub2 = "Sub2",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get S1_MTO_CODE(): FormControl {
        return this.fg.controls[MgControlName.S1_MTO_CODE] as FormControl;
    }

    get S1_EFM(): FormControl {
        return this.fg.controls[MgControlName.S1_EFM] as FormControl;
    }

    get S1_MTO_NAME(): FormControl {
        return this.fg.controls[MgControlName.S1_MTO_NAME] as FormControl;
    }

    get S1_PARTS_MTO_CODE(): FormControl {
        return this.fg.controls[MgControlName.S1_PARTS_MTO_CODE] as FormControl;
    }

    get S1_24G(): FormControl {
        return this.fg.controls[MgControlName.S1_24G] as FormControl;
    }

    get S1_ENGFRMTYPE(): FormControl {
        return this.fg.controls[MgControlName.S1_ENGFRMTYPE] as FormControl;
    }

    get S1_PROD1ST_CHASSIS_NO(): FormControl {
        return this.fg.controls[MgControlName.S1_PROD1ST_CHASSIS_NO] as FormControl;
    }

    get S1_VIN_TYPE(): FormControl {
        return this.fg.controls[MgControlName.S1_VIN_TYPE] as FormControl;
    }

    get S1_COOL(): FormControl {
        return this.fg.controls[MgControlName.S1_COOL] as FormControl;
    }

    get S1_CYCLE(): FormControl {
        return this.fg.controls[MgControlName.S1_CYCLE] as FormControl;
    }

    get S1_USE(): FormControl {
        return this.fg.controls[MgControlName.S1_USE] as FormControl;
    }

    get PRD090USE_NOTICE_090_NOTICE(): FormControl {
        return this.fg.controls[MgControlName.PRD090USE_NOTICE_090_NOTICE] as FormControl;
    }

    get S1_PRODLINEMAIN(): FormControl {
        return this.fg.controls[MgControlName.S1_PRODLINEMAIN] as FormControl;
    }

    get S1_PRODLINESUB(): FormControl {
        return this.fg.controls[MgControlName.S1_PRODLINESUB] as FormControl;
    }

    get S1_TRIAL_PARTS_TBL_CREDATE(): FormControl {
        return this.fg.controls[MgControlName.S1_TRIAL_PARTS_TBL_CREDATE] as FormControl;
    }

    get S1_MASS_PRODORDER_DATE(): FormControl {
        return this.fg.controls[MgControlName.S1_MASS_PRODORDER_DATE] as FormControl;
    }

    get S1_MASS_PRODDATE(): FormControl {
        return this.fg.controls[MgControlName.S1_MASS_PRODDATE] as FormControl;
    }

    get S1_PRODCLOSE_DATE(): FormControl {
        return this.fg.controls[MgControlName.S1_PRODCLOSE_DATE] as FormControl;
    }

    get S1_CC(): FormControl {
        return this.fg.controls[MgControlName.S1_CC] as FormControl;
    }

    get S1_OEM_CATEGORY(): FormControl {
        return this.fg.controls[MgControlName.S1_OEM_CATEGORY] as FormControl;
    }

    get S1_DUMMY_MODEL_TYPE(): FormControl {
        return this.fg.controls[MgControlName.S1_DUMMY_MODEL_TYPE] as FormControl;
    }

    get S1_BASIC_MTO_CODE(): FormControl {
        return this.fg.controls[MgControlName.S1_BASIC_MTO_CODE] as FormControl;
    }

    get S1_CATEGORY(): FormControl {
        return this.fg.controls[MgControlName.S1_CATEGORY] as FormControl;
    }

    get S1_SHORT_BLOCK(): FormControl {
        return this.fg.controls[MgControlName.S1_SHORT_BLOCK] as FormControl;
    }

    get S1_PACKING_LOT(): FormControl {
        return this.fg.controls[MgControlName.S1_PACKING_LOT] as FormControl;
    }

    get S1_COST_CONTROL(): FormControl {
        return this.fg.controls[MgControlName.S1_COST_CONTROL] as FormControl;
    }

    get S1_FAMILY(): FormControl {
        return this.fg.controls[MgControlName.S1_FAMILY] as FormControl;
    }

    get S1_KD_PACKING_LOT(): FormControl {
        return this.fg.controls[MgControlName.S1_KD_PACKING_LOT] as FormControl;
    }

    get S1_ENGEFM(): FormControl {
        return this.fg.controls[MgControlName.S1_ENGEFM] as FormControl;
    }

    get S1_ENGMTO_CODE(): FormControl {
        return this.fg.controls[MgControlName.S1_ENGMTO_CODE] as FormControl;
    }

    get S1_ATM_MTO_CODE(): FormControl {
        return this.fg.controls[MgControlName.S1_ATM_MTO_CODE] as FormControl;
    }

    get S1_ATM_EFM(): FormControl {
        return this.fg.controls[MgControlName.S1_ATM_EFM] as FormControl;
    }

    get S1_ATM_METHODVARIANT(): FormControl {
        return this.fg.controls[MgControlName.S1_ATM_METHODVARIANT] as FormControl;
    }

    get S1_TACT(): FormControl {
        return this.fg.controls[MgControlName.S1_TACT] as FormControl;
    }

    get S1_KD_MOTHER_FACTORY(): FormControl {
        return this.fg.controls[MgControlName.S1_KD_MOTHER_FACTORY] as FormControl;
    }

    get S1_PORTPRODLEAD_TIME(): FormControl {
        return this.fg.controls[MgControlName.S1_PORTPRODLEAD_TIME] as FormControl;
    }

    get S1_SRS(): FormControl {
        return this.fg.controls[MgControlName.S1_SRS] as FormControl;
    }

    get S1_DESIGNNOISE(): FormControl {
        return this.fg.controls[MgControlName.S1_DESIGNNOISE] as FormControl;
    }

    get S1_DESIGNNO(): FormControl {
        return this.fg.controls[MgControlName.S1_DESIGNNO] as FormControl;
    }

    get S1_VARIANT_NO(): FormControl {
        return this.fg.controls[MgControlName.S1_VARIANT_NO] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}