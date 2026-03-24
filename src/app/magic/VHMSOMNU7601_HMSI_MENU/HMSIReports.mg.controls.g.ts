import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    HMSIReports = "HMSIReports",
        Label1 = "Label1",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        Edit5 = "Edit5",
        Production_Control = "Production_Control",
        IPP_MENU = "IPP_MENU",
        QC = "QC",
        MISREPORT = "MISREPORT",
        CKD = "CKD",
        LOGISTICREPORT_0001 = "LOGISTICREPORT_0001",
        Logostic_IN = "Logostic_IN",
        BUTTONDISPATCH_STOP_0001 = "BUTTONDISPATCH_STOP_0001",
        Imported_Engine_0001 = "Imported_Engine_0001",
        Production_Monitoring_Das_0001 = "Production_Monitoring_Das_0001",
        btnexit ="btnexit",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get Edit5(): FormControl {
        return this.fg.controls[MgControlName.Edit5] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}