import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    UTILITYFORHOLDFRAMES239 = "UTILITYFORHOLDFRAMES239",
        V_Date = "V_Date",
        V_Time = "V_Time",
        Label3 = "Label3",
        Sub1 = "Sub1",
        Label4 = "Label4",
        Label5 = "Label5",
        V_F_no = "V_F_no",
        V_Ch_no = "V_Ch_no",
        V_MTO_Code = "V_MTO_Code",
        Label6 = "Label6",
        V_Ind_dat = "V_Ind_dat",
        Label7 = "Label7",
        V_PLN_Dat = "V_PLN_Dat",
        Label8 = "Label8",
        Flag = "Flag",
        Frame_no = "Frame_no",
        Label15 = "Label15",
        V_Day_Count = "V_Day_Count",
        Label16 = "Label16",
        Label17 = "Label17",
        V_All_Count = "V_All_Count",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_Date(): FormControl {
        return this.fg.controls[MgControlName.V_Date] as FormControl;
    }

    get V_Time(): FormControl {
        return this.fg.controls[MgControlName.V_Time] as FormControl;
    }

    get V_F_no(): FormControl {
        return this.fg.controls[MgControlName.V_F_no] as FormControl;
    }

    get V_Ch_no(): FormControl {
        return this.fg.controls[MgControlName.V_Ch_no] as FormControl;
    }

    get V_MTO_Code(): FormControl {
        return this.fg.controls[MgControlName.V_MTO_Code] as FormControl;
    }

    get V_Ind_dat(): FormControl {
        return this.fg.controls[MgControlName.V_Ind_dat] as FormControl;
    }

    get V_PLN_Dat(): FormControl {
        return this.fg.controls[MgControlName.V_PLN_Dat] as FormControl;
    }

    get Flag(): FormControl {
        return this.fg.controls[MgControlName.Flag] as FormControl;
    }

    get Frame_no(): FormControl {
        return this.fg.controls[MgControlName.Frame_no] as FormControl;
    }

    get V_Day_Count(): FormControl {
        return this.fg.controls[MgControlName.V_Day_Count] as FormControl;
    }

    get V_All_Count(): FormControl {
        return this.fg.controls[MgControlName.V_All_Count] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}