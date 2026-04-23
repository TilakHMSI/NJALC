import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VEHICLEAEOFF = "VEHICLEAEOFF",
        Label1 = "Label1",
        Label2 = "Label2",
        Label6 = "Label6",
        Label7 = "Label7",
        v_DateFrom = "v_DateFrom",
        v_Prod_Line = "v_Prod_Line",
        v_model_code = "v_model_code",
        Label4 = "Label4",
        btn_gZoom = "btn_gZoom",
        v_DateTo = "v_DateTo",
        Label10 = "Label10",
        v_GenXLorRep = "v_GenXLorRep",
        Edit11 = "Edit11",
        v_Generate = "v_Generate",
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

    get v_model_code(): FormControl {
        return this.fg.controls[MgControlName.v_model_code] as FormControl;
    }

    get v_DateTo(): FormControl {
        return this.fg.controls[MgControlName.v_DateTo] as FormControl;
    }

    get v_GenXLorRep(): FormControl {
        return this.fg.controls[MgControlName.v_GenXLorRep] as FormControl;
    }

    get Edit11(): FormControl {
        return this.fg.controls[MgControlName.Edit11] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}