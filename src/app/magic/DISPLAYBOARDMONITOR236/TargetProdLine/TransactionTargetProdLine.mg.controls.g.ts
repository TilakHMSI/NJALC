import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    TransactionTargetProdLine = "TransactionTargetProdLine",
        Label2 = "Label2",
        V_VTarget = "V_VTarget",
        btnexit = "btnexit",
        Label4 = "Label4",
        V_VPlan = "V_VPlan",
        Label6 = "Label6",
        V_VActual = "V_VActual",
        V_VMessage = "V_VMessage",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_VTarget(): FormControl {
        return this.fg.controls[MgControlName.V_VTarget] as FormControl;
    }

    get V_VPlan(): FormControl {
        return this.fg.controls[MgControlName.V_VPlan] as FormControl;
    }

    get V_VActual(): FormControl {
        return this.fg.controls[MgControlName.V_VActual] as FormControl;
    }

    get V_VMessage(): FormControl {
        return this.fg.controls[MgControlName.V_VMessage] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}