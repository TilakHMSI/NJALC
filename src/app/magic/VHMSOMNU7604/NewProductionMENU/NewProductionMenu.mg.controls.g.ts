import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    NewProductionMenu = "NewProductionMenu",
        btnexit = "btnexit",
        VFRAME_HOLD_UTILITY = "VFRAME_HOLD_UTILITY",
        VFRAMEENGINE = "VFRAMEENGINE",
        VHOLD_FRAME_REPORT = "VHOLD_FRAME_REPORT",
        v_Mapping_Master = "v_Mapping_Master",
        VSHIFTPDI = "VSHIFTPDI",
        v_CKD_CaseOffPackingStatus = "v_CKD_CaseOffPackingStatus",
        Card_RePrintNew = "Card_RePrintNew",
        VAFUNITEUTIL = "VAFUNITEUTIL",
        BNew_Card_Print = "BNew_Card_Print",
        vAEAFSHIFT = "vAEAFSHIFT",
        B_AEOFF_REPORT = "B_AEOFF_REPORT",
        vAEHOURMST = "vAEHOURMST",
        VAF_Target = "VAF_Target",
        vAFHOURMST = "vAFHOURMST",
        VAF_ShiftTime = "VAF_ShiftTime",
        vPRODSEQPLAN = "vPRODSEQPLAN",
        VAE_Target = "VAE_Target",
        VAE_ShiftTime = "VAE_ShiftTime",
        VDISPLAY_BOARD_MONITOR = "VDISPLAY_BOARD_MONITOR",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}