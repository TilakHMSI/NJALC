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
        Label11 = "Label11",
        S1_MTO_CODE = "S1_MTO_CODE",
        Label4 = "Label4",
        S1_EFM = "S1_EFM",
        Label2 = "Label2",
        MTO_NAMEM_V = "MTO_NAMEM_V",
        MTO_NAMET_V = "MTO_NAMET_V",
        MTO_NAMEO_V = "MTO_NAMEO_V",
        Label8 = "Label8",
        S1_PARTS_MTO_CODE = "S1_PARTS_MTO_CODE",
        Label10 = "Label10",
        S1_24G = "S1_24G",
        Label12 = "Label12",
        Label27 = "Label27",
        Label20 = "Label20",
        Label32 = "Label32",
        S1_ENGFRMTYPE = "S1_ENGFRMTYPE",
        S1_PROD1ST_CHASSIS_NO = "S1_PROD1ST_CHASSIS_NO",
        PRD001_S1_VIN_TYPE = "PRD001_S1_VIN_TYPE",
        Label13 = "Label13",
        Label29 = "Label29",
        Label22 = "Label22",
        Label16 = "Label16",
        Label36 = "Label36",
        S1_COOL = "S1_COOL",
        S1_CYCLE = "S1_CYCLE",
        S1_USE = "S1_USE",
        PRD090USE_NOTICE_090_NOTICE = "PRD090USE_NOTICE_090_NOTICE",
        Label14 = "Label14",
        Label17 = "Label17",
        Label23 = "Label23",
        Label34 = "Label34",
        S1_PRODLINEMAIN = "S1_PRODLINEMAIN",
        S1_PRODLINESUB = "S1_PRODLINESUB",
        Label15 = "Label15",
        Label18 = "Label18",
        Label25 = "Label25",
        Label39 = "Label39",
        Label30 = "Label30",
        S1_TRIAL_PARTS_TBL_CREDATE = "S1_TRIAL_PARTS_TBL_CREDATE",
        S1_MASS_PRODORDER_DATE = "S1_MASS_PRODORDER_DATE",
        S1_MASS_PRODDATE = "S1_MASS_PRODDATE",
        S1_PRODCLOSE_DATE = "S1_PRODCLOSE_DATE",
        Label41 = "Label41",
        Label48 = "Label48",
        S1_BASIC_MTO_CODE = "S1_BASIC_MTO_CODE",
        Label50 = "Label50",
        Label54 = "Label54",
        Label44 = "Label44",
        S1_CC = "S1_CC",
        S1_CATEGORY = "S1_CATEGORY",
        S1_FAMILY = "S1_FAMILY",
        Label42 = "Label42",
        Label46 = "Label46",
        Label52 = "Label52",
        Label56 = "Label56",
        Label58 = "Label58",
        S1_OEM_CATEGORY = "S1_OEM_CATEGORY",
        S1_SHORT_BLOCK = "S1_SHORT_BLOCK",
        S1_PACKING_LOT = "S1_PACKING_LOT",
        S1_KD_PACKING_LOT = "S1_KD_PACKING_LOT",
        Label43 = "Label43",
        Label47 = "Label47",
        Label53 = "Label53",
        S1_DUMMY_MODEL_TYPE = "S1_DUMMY_MODEL_TYPE",
        S1_COST_CONTROL = "S1_COST_CONTROL",
        Label60 = "Label60",
        Label71 = "Label71",
        Label64 = "Label64",
        Label83 = "Label83",
        S1_ENGMTO_CODE = "S1_ENGMTO_CODE",
        S1_ENGEFM = "S1_ENGEFM",
        Label61 = "Label61",
        Label65 = "Label65",
        Label85 = "Label85",
        Label72 = "Label72",
        Label77 = "Label77",
        S1_ATM_MTO_CODE = "S1_ATM_MTO_CODE",
        S1_ATM_EFM = "S1_ATM_EFM",
        S1_ATM_METHODVARIANT = "S1_ATM_METHODVARIANT",
        Label62 = "Label62",
        Label79 = "Label79",
        Label74 = "Label74",
        Label67 = "Label67",
        Label87 = "Label87",
        S1_TACT = "S1_TACT",
        S1_KD_MOTHER_FACTORY = "S1_KD_MOTHER_FACTORY",
        S1_PORTPRODLEAD_TIME = "S1_PORTPRODLEAD_TIME",
        S1_SRS = "S1_SRS",
        Label63 = "Label63",
        Label66 = "Label66",
        Label89 = "Label89",
        Label81 = "Label81",
        Label69 = "Label69",
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

    get S1_ENGFRMTYPE(): FormControl {
        return this.fg.controls[MgControlName.S1_ENGFRMTYPE] as FormControl;
    }

    get S1_PROD1ST_CHASSIS_NO(): FormControl {
        return this.fg.controls[MgControlName.S1_PROD1ST_CHASSIS_NO] as FormControl;
    }

    get PRD001_S1_VIN_TYPE(): FormControl {
        return this.fg.controls[MgControlName.PRD001_S1_VIN_TYPE] as FormControl;
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

    get S1_BASIC_MTO_CODE(): FormControl {
        return this.fg.controls[MgControlName.S1_BASIC_MTO_CODE] as FormControl;
    }

    get S1_CC(): FormControl {
        return this.fg.controls[MgControlName.S1_CC] as FormControl;
    }

    get S1_CATEGORY(): FormControl {
        return this.fg.controls[MgControlName.S1_CATEGORY] as FormControl;
    }

    get S1_FAMILY(): FormControl {
        return this.fg.controls[MgControlName.S1_FAMILY] as FormControl;
    }

    get S1_OEM_CATEGORY(): FormControl {
        return this.fg.controls[MgControlName.S1_OEM_CATEGORY] as FormControl;
    }

    get S1_SHORT_BLOCK(): FormControl {
        return this.fg.controls[MgControlName.S1_SHORT_BLOCK] as FormControl;
    }

    get S1_PACKING_LOT(): FormControl {
        return this.fg.controls[MgControlName.S1_PACKING_LOT] as FormControl;
    }

    get S1_KD_PACKING_LOT(): FormControl {
        return this.fg.controls[MgControlName.S1_KD_PACKING_LOT] as FormControl;
    }

    get S1_DUMMY_MODEL_TYPE(): FormControl {
        return this.fg.controls[MgControlName.S1_DUMMY_MODEL_TYPE] as FormControl;
    }

    get S1_COST_CONTROL(): FormControl {
        return this.fg.controls[MgControlName.S1_COST_CONTROL] as FormControl;
    }

    get S1_ENGMTO_CODE(): FormControl {
        return this.fg.controls[MgControlName.S1_ENGMTO_CODE] as FormControl;
    }

    get S1_ENGEFM(): FormControl {
        return this.fg.controls[MgControlName.S1_ENGEFM] as FormControl;
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