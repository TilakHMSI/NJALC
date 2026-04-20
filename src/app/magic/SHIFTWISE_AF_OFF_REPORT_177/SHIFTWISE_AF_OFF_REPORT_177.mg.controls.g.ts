import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    SHIFTWISE_AF_OFF_REPORT_177 = "SHIFTWISE_AF_OFF_REPORT_177",
        Label1 = "Label1",
        v_Date = "v_Date",
        Label3 = "Label3",
        v_Shift = "v_Shift",
        Label5 = "Label5",
        v_Plant = "v_Plant",
        Label6 = "Label6",
        v_ReportType = "v_ReportType",
        Label7 = "Label7",
        v_Exec = "v_Exec",
        v_Exit = "v_Exit",
        btn_Close="btn_Close",
        vBlob64base="vBlob64base",
        vFileName="vFileName"
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get v_Date(): FormControl {
        return this.fg.controls[MgControlName.v_Date] as FormControl;
    }

    get v_Shift(): FormControl {
        return this.fg.controls[MgControlName.v_Shift] as FormControl;
    }

    get v_Plant(): FormControl {
        return this.fg.controls[MgControlName.v_Plant] as FormControl;
    }

    get v_ReportType(): FormControl {
        return this.fg.controls[MgControlName.v_ReportType] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}