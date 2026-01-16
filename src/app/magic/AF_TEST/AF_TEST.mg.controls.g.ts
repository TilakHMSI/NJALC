import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    AF_TEST = "AF_TEST",
        L_A = "L_A",
        V_A = "V_A",
        L_B = "L_B",
        V_B = "V_B",
        L_C = "L_C",
        V_C = "V_C",
        L_D = "L_D",
        V_D = "V_D",
        L_E = "L_E",
        V_E = "V_E",
        L_F = "L_F",
        V_F = "V_F",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_A(): FormControl {
        return this.fg.controls[MgControlName.V_A] as FormControl;
    }

    get V_B(): FormControl {
        return this.fg.controls[MgControlName.V_B] as FormControl;
    }

    get V_C(): FormControl {
        return this.fg.controls[MgControlName.V_C] as FormControl;
    }

    get V_D(): FormControl {
        return this.fg.controls[MgControlName.V_D] as FormControl;
    }

    get V_E(): FormControl {
        return this.fg.controls[MgControlName.V_E] as FormControl;
    }

    get V_F(): FormControl {
        return this.fg.controls[MgControlName.V_F] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}