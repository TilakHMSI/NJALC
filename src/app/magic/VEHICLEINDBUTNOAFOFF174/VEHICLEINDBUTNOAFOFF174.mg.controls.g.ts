import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VEHICLEINDBUTNOAFOFF174 = "VEHICLEINDBUTNOAFOFF174",
        Label1 = "Label1",
        v_Radio = "v_Radio",
        Label2 = "Label2",
        v_PlanDateFrom = "v_PlanDateFrom",
        Label4 = "Label4",
        v_PlanDateTo = "v_PlanDateTo",
        Label6 = "Label6",
        v_GenXLorRep = "v_GenXLorRep",
        Label7 = "Label7",
        v_Path = "v_Path",
        v_Generate = "v_Generate",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get v_Radio(): FormControl {
        return this.fg.controls[MgControlName.v_Radio] as FormControl;
    }

    get v_PlanDateFrom(): FormControl {
        return this.fg.controls[MgControlName.v_PlanDateFrom] as FormControl;
    }

    get v_PlanDateTo(): FormControl {
        return this.fg.controls[MgControlName.v_PlanDateTo] as FormControl;
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