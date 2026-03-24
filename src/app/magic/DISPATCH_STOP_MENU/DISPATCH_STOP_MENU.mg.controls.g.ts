import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DISPATCH_STOP_MENU = "DISPATCH_STOP_MENU",
        P_DB_NAME1_P = "P_DB_NAME1_P",
        P_DB_NAME2_P = "P_DB_NAME2_P",
        P_LOCATE_P = "P_LOCATE_P",
        Label1 = "Label1",
        Edit6 = "Edit6",
        Edit7 = "Edit7",
        Label8 = "Label8",
        btnexit = "btnexit",
        BUTTONDispatchHold = "BUTTONDispatchHold",
        BUTTONDispatchREPAIRIN = "BUTTONDispatchREPAIRIN",
        BUTTONDispatchREPAIROut = "BUTTONDispatchREPAIROut",
        BUTTONDispatchReleaseUpload = "BUTTONDispatchReleaseUpload",
        BUTTONDispatchReleaseBatch = "BUTTONDispatchReleaseBatch",
        BUTTONDispatchStopReport_0001 = "BUTTONDispatchStopReport_0001",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get P_DB_NAME1_P(): FormControl {
        return this.fg.controls[MgControlName.P_DB_NAME1_P] as FormControl;
    }

    get P_DB_NAME2_P(): FormControl {
        return this.fg.controls[MgControlName.P_DB_NAME2_P] as FormControl;
    }

    get P_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.P_LOCATE_P] as FormControl;
    }

    get Edit6(): FormControl {
        return this.fg.controls[MgControlName.Edit6] as FormControl;
    }

    get Edit7(): FormControl {
        return this.fg.controls[MgControlName.Edit7] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}