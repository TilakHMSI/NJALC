import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VEHICLEAFOFF175 = "VEHICLEAFOFF175",
        Label7 = "Label7",
        Label1 = "Label1",
        Label2 = "Label2",
        Label6 = "Label6",
        v_DateFrom = "v_DateFrom",
        v_Prod_Line = "v_Prod_Line",
        Label4 = "Label4",
        v_ModeList = "v_ModeList",
        v_DateTo = "v_DateTo",
        Label8 = "Label8",
        Edit10 = "Edit10",
        Label9 = "Label9",
        v_GenXLorRep = "v_GenXLorRep",
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

    get v_Prod_Line(): FormControl {
        return this.fg.controls[MgControlName.v_Prod_Line] as FormControl;
    }

    get v_DateTo(): FormControl {
        return this.fg.controls[MgControlName.v_DateTo] as FormControl;
    }

    get Edit10(): FormControl {
        return this.fg.controls[MgControlName.Edit10] as FormControl;
    }

    get v_GenXLorRep(): FormControl {
        return this.fg.controls[MgControlName.v_GenXLorRep] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}