import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    COLORWISEINDICATIOINLIST176 = "COLORWISEINDICATIOINLIST176",
        Label1 = "Label1",
        v_DateFrom = "v_DateFrom",
        Label3 = "Label3",
        v_DateTo = "v_DateTo",
        Label5 = "Label5",
        v_GenXLorRep = "v_GenXLorRep",
        Label6 = "Label6",
        v_Path = "v_Path",
        v_Generate = "v_Generate",
       CancelCtl="CancelCtl",
       btn_Close="btn_Close",
       vBlob64base="vBlob64base",
        vFileName="vFileName"
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get v_DateFrom(): FormControl {
        return this.fg.controls[MgControlName.v_DateFrom] as FormControl;
    }

    get v_DateTo(): FormControl {
        return this.fg.controls[MgControlName.v_DateTo] as FormControl;
    }

    get v_GenXLorRep(): FormControl {
        return this.fg.controls[MgControlName.v_GenXLorRep] as FormControl;
    }

    get v_Path(): FormControl {
        return this.fg.controls[MgControlName.v_Path] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}