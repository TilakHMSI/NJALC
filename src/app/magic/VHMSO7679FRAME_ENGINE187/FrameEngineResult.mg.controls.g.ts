import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    FrameEngineResult = "FrameEngineResult",
        Label1 = "Label1",
        Label2 = "Label2",
        Label3 = "Label3",
        OK_V = "OK_V",
        Label4 = "Label4",
        VCHOICE = "VCHOICE",
        Label6 = "Label6",
        Label8 = "Label8",
        CancelCtl = "CancelCtl",
        DATE_V_FROM = "DATE_V_FROM",
        DATE_V_TO = "DATE_V_TO",
        Label9 = "Label9",
        btn_Close="btn_Close",
        vBlob64base="vBlob64base",
        vFileName="vFileName",
        vBlob64base1="vBlob64base1",
        vFileName1="vFileName1"
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get VCHOICE(): FormControl {
        return this.fg.controls[MgControlName.VCHOICE] as FormControl;
    }

    get DATE_V_FROM(): FormControl {
        return this.fg.controls[MgControlName.DATE_V_FROM] as FormControl;
    }

    get DATE_V_TO(): FormControl {
        return this.fg.controls[MgControlName.DATE_V_TO] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}