import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PRD001_MAITENANCE = "PRD001_MAITENANCE",
        Label1 = "Label1",
        Label4 = "Label4",
        S1_EFM = "S1_EFM",
        Label2 = "Label2",
        S1_MTO_CODE = "S1_MTO_CODE",
        Label3 = "Label3",
        MTO_NAMEM_V = "MTO_NAMEM_V",
        MTO_NAMET_V = "MTO_NAMET_V",
        MTO_NAMEO_V = "MTO_NAMEO_V",
        Label9 = "Label9",
        S1_PARTS_MTO_CODE = "S1_PARTS_MTO_CODE",
        Label11 = "Label11",
        S1_24G = "S1_24G",
        Label12 = "Label12",
        Label13 = "Label13",
        Label23 = "Label23",
        S1_ENGEFM = "S1_ENGEFM",
        Label25 = "Label25",
        S1_ENGMTO_CODE = "S1_ENGMTO_CODE",
        Label14 = "Label14",
        Label18 = "Label18",
        Label19 = "Label19",
        S1_PRODLINEMAIN = "S1_PRODLINEMAIN",
        Label20 = "Label20",
        S1_PRODLINESUB = "S1_PRODLINESUB",
        Label15 = "Label15",
        Label21 = "Label21",
        S1_TRIAL_PARTS_TBL_CREDATE = "S1_TRIAL_PARTS_TBL_CREDATE",
        Label27 = "Label27",
        S1_USE = "S1_USE",
        PRD090USE_NOTICE_090_NOTICE = "PRD090USE_NOTICE_090_NOTICE",
        Label30 = "Label30",
        S1_MASS_PRODORDER_DATE = "S1_MASS_PRODORDER_DATE",
        Label32 = "Label32",
        S1_BASIC_MTO_CODE = "S1_BASIC_MTO_CODE",
        Label34 = "Label34",
        S1_CATEGORY = "S1_CATEGORY",
        Label36 = "Label36",
        S1_MASS_PRODDATE = "S1_MASS_PRODDATE",
        Label38 = "Label38",
        S1_COOL = "S1_COOL",
        Label39 = "Label39",
        S1_FAMILY = "S1_FAMILY",
        Label41 = "Label41",
        S1_PRODCLOSE_DATE = "S1_PRODCLOSE_DATE",
        Label43 = "Label43",
        S1_CYCLE = "S1_CYCLE",
        Label45 = "Label45",
        S1_PACKING_LOT = "S1_PACKING_LOT",
        Label46 = "Label46",
        Label47 = "Label47",
        Label48 = "Label48",
        S1_CC = "S1_CC",
        Label50 = "Label50",
        S1_KD_PACKING_LOT = "S1_KD_PACKING_LOT",
        Label52 = "Label52",
        S1_DESIGNNOISE = "S1_DESIGNNOISE",
        Label54 = "Label54",
        S1_OEM_CATEGORY = "S1_OEM_CATEGORY",
        Label55 = "Label55",
        S1_KD_MOTHER_FACTORY = "S1_KD_MOTHER_FACTORY",
        Label57 = "Label57",
        S1_DESIGNNO = "S1_DESIGNNO",
        Label59 = "Label59",
        S1_SHORT_BLOCK = "S1_SHORT_BLOCK",
        Label60 = "Label60",
        S1_TACT = "S1_TACT",
        Label62 = "Label62",
        S1_VARIANT_NO = "S1_VARIANT_NO",
        Edit64 = "Edit64",
        S1_DUMMY_MODEL_TYPE = "S1_DUMMY_MODEL_TYPE",
        Label65 = "Label65",
        S1_PORTPRODLEAD_TIME = "S1_PORTPRODLEAD_TIME",
        Label67 = "Label67",
        Label68 = "Label68",
        Label69 = "Label69",
        S1_COST_CONTROL = "S1_COST_CONTROL",
        Label70 = "Label70",
        S1_SRS = "S1_SRS",
        Label72 = "Label72",
        S1_ATM_EFM = "S1_ATM_EFM",
        STAMP = "STAMP",
        S1_ENGFRMTYPE = "S1_ENGFRMTYPE",
        S1_PROD1ST_CHASSIS_NO = "S1_PROD1ST_CHASSIS_NO",
        S1_VIN_TYPE = "S1_VIN_TYPE",
        Label74 = "Label74",
        S1_ATM_MTO_CODE = "S1_ATM_MTO_CODE",
        COLOR = "COLOR",
        Label79 = "Label79",
        Label80 = "Label80",
        CHAR_TYPE = "CHAR_TYPE",
        Label81 = "Label81",
        S1_ATM_METHODVARIANT = "S1_ATM_METHODVARIANT",
        Tab94 = "Tab94",
        Sub2 = "Sub2",
        Sub3 = "Sub3",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get S1_EFM(): FormControl {
        return this.fg.controls[MgControlName.S1_EFM] as FormControl;
    }

    get S1_MTO_CODE(): FormControl {
        return this.fg.controls[MgControlName.S1_MTO_CODE] as FormControl;
    }

    get MTO_NAMEM_V(): FormControl {
        return this.fg.controls[MgControlName.MTO_NAMEM_V] as FormControl;
    }

    get MTO_NAMET_V(): FormControl {
        return this.fg.controls[MgControlName.MTO_NAMET_V] as FormControl;
    }

    get MTO_NAMEO_V(): FormControl {
        return this.fg.controls[MgControlName.MTO_NAMEO_V] as FormControl;
    }

    get S1_PARTS_MTO_CODE(): FormControl {
        return this.fg.controls[MgControlName.S1_PARTS_MTO_CODE] as FormControl;
    }

    get S1_24G(): FormControl {
        return this.fg.controls[MgControlName.S1_24G] as FormControl;
    }

    get S1_ENGEFM(): FormControl {
        return this.fg.controls[MgControlName.S1_ENGEFM] as FormControl;
    }

    get S1_ENGMTO_CODE(): FormControl {
        return this.fg.controls[MgControlName.S1_ENGMTO_CODE] as FormControl;
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

    get S1_USE(): FormControl {
        return this.fg.controls[MgControlName.S1_USE] as FormControl;
    }

    get PRD090USE_NOTICE_090_NOTICE(): FormControl {
        return this.fg.controls[MgControlName.PRD090USE_NOTICE_090_NOTICE] as FormControl;
    }

    get S1_MASS_PRODORDER_DATE(): FormControl {
        return this.fg.controls[MgControlName.S1_MASS_PRODORDER_DATE] as FormControl;
    }

    get S1_BASIC_MTO_CODE(): FormControl {
        return this.fg.controls[MgControlName.S1_BASIC_MTO_CODE] as FormControl;
    }

    get S1_CATEGORY(): FormControl {
        return this.fg.controls[MgControlName.S1_CATEGORY] as FormControl;
    }

    get S1_MASS_PRODDATE(): FormControl {
        return this.fg.controls[MgControlName.S1_MASS_PRODDATE] as FormControl;
    }

    get S1_COOL(): FormControl {
        return this.fg.controls[MgControlName.S1_COOL] as FormControl;
    }

    get S1_FAMILY(): FormControl {
        return this.fg.controls[MgControlName.S1_FAMILY] as FormControl;
    }

    get S1_PRODCLOSE_DATE(): FormControl {
        return this.fg.controls[MgControlName.S1_PRODCLOSE_DATE] as FormControl;
    }

    get S1_CYCLE(): FormControl {
        return this.fg.controls[MgControlName.S1_CYCLE] as FormControl;
    }

    get S1_PACKING_LOT(): FormControl {
        return this.fg.controls[MgControlName.S1_PACKING_LOT] as FormControl;
    }

    get S1_CC(): FormControl {
        return this.fg.controls[MgControlName.S1_CC] as FormControl;
    }

    get S1_KD_PACKING_LOT(): FormControl {
        return this.fg.controls[MgControlName.S1_KD_PACKING_LOT] as FormControl;
    }

    get S1_DESIGNNOISE(): FormControl {
        return this.fg.controls[MgControlName.S1_DESIGNNOISE] as FormControl;
    }

    get S1_OEM_CATEGORY(): FormControl {
        return this.fg.controls[MgControlName.S1_OEM_CATEGORY] as FormControl;
    }

    get S1_KD_MOTHER_FACTORY(): FormControl {
        return this.fg.controls[MgControlName.S1_KD_MOTHER_FACTORY] as FormControl;
    }

    get S1_DESIGNNO(): FormControl {
        return this.fg.controls[MgControlName.S1_DESIGNNO] as FormControl;
    }

    get S1_SHORT_BLOCK(): FormControl {
        return this.fg.controls[MgControlName.S1_SHORT_BLOCK] as FormControl;
    }

    get S1_TACT(): FormControl {
        return this.fg.controls[MgControlName.S1_TACT] as FormControl;
    }

    get S1_VARIANT_NO(): FormControl {
        return this.fg.controls[MgControlName.S1_VARIANT_NO] as FormControl;
    }

    get Edit64(): FormControl {
        return this.fg.controls[MgControlName.Edit64] as FormControl;
    }

    get S1_DUMMY_MODEL_TYPE(): FormControl {
        return this.fg.controls[MgControlName.S1_DUMMY_MODEL_TYPE] as FormControl;
    }

    get S1_PORTPRODLEAD_TIME(): FormControl {
        return this.fg.controls[MgControlName.S1_PORTPRODLEAD_TIME] as FormControl;
    }

    get S1_COST_CONTROL(): FormControl {
        return this.fg.controls[MgControlName.S1_COST_CONTROL] as FormControl;
    }

    get S1_SRS(): FormControl {
        return this.fg.controls[MgControlName.S1_SRS] as FormControl;
    }

    get S1_ATM_EFM(): FormControl {
        return this.fg.controls[MgControlName.S1_ATM_EFM] as FormControl;
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

    get S1_ATM_MTO_CODE(): FormControl {
        return this.fg.controls[MgControlName.S1_ATM_MTO_CODE] as FormControl;
    }

    get CHAR_TYPE(): FormControl {
        return this.fg.controls[MgControlName.CHAR_TYPE] as FormControl;
    }

    get S1_ATM_METHODVARIANT(): FormControl {
        return this.fg.controls[MgControlName.S1_ATM_METHODVARIANT] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}