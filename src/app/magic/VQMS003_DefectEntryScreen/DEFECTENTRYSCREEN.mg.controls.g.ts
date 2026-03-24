import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DEFECTENTRYSCREEN = "DEFECTENTRYSCREEN",
        Label1 = "Label1",
        V_p_LINENO = "V_p_LINENO",
        Label3 = "Label3",
        Label4 = "Label4",
        Label5 = "Label5",
        Edit6 = "Edit6",
        V_Total_DPR_Count = "V_Total_DPR_Count",
        Label8 = "Label8",
        V_Total_Defect_Entered_Count = "V_Total_Defect_Entered_Count",
        Label10 = "Label10",
        V_Total_Defect_Count = "V_Total_Defect_Count",
        Label12 = "Label12",
        Label13 = "Label13",
        v_FRAME_NO = "v_FRAME_NO",
        Label15 = "Label15",
        ModelWiseMapping_MTOMAPCODE = "ModelWiseMapping_MTOMAPCODE",
        btnexit = "btnexit",
        Label17 = "Label17",
        PRD_VQMS_Header_PASS_DESC = "PRD_VQMS_Header_PASS_DESC",
        Label19 = "Label19",
        S5_MTO_CODE = "S5_MTO_CODE",
        DEFECT_ENTRY_SCREEN = "DEFECT_ENTRY_SCREEN",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_p_LINENO(): FormControl {
        return this.fg.controls[MgControlName.V_p_LINENO] as FormControl;
    }

    get Edit6(): FormControl {
        return this.fg.controls[MgControlName.Edit6] as FormControl;
    }

    get V_Total_DPR_Count(): FormControl {
        return this.fg.controls[MgControlName.V_Total_DPR_Count] as FormControl;
    }

    get V_Total_Defect_Entered_Count(): FormControl {
        return this.fg.controls[MgControlName.V_Total_Defect_Entered_Count] as FormControl;
    }

    get V_Total_Defect_Count(): FormControl {
        return this.fg.controls[MgControlName.V_Total_Defect_Count] as FormControl;
    }

    get v_FRAME_NO(): FormControl {
        return this.fg.controls[MgControlName.v_FRAME_NO] as FormControl;
    }

    get ModelWiseMapping_MTOMAPCODE(): FormControl {
        return this.fg.controls[MgControlName.ModelWiseMapping_MTOMAPCODE] as FormControl;
    }

    get PRD_VQMS_Header_PASS_DESC(): FormControl {
        return this.fg.controls[MgControlName.PRD_VQMS_Header_PASS_DESC] as FormControl;
    }

    get S5_MTO_CODE(): FormControl {
        return this.fg.controls[MgControlName.S5_MTO_CODE] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}