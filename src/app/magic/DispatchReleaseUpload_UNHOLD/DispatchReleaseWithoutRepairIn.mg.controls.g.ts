import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DispatchReleaseWithoutRepairIn = "DispatchReleaseWithoutRepairIn",
        Label1 = "Label1",
        Edit2 = "Edit2",
        Label3 = "Label3",
        V_Mode = "V_Mode",
        V_Proeed = "V_Proeed",
        btnexit = "btnexit",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get V_Mode(): FormControl {
        return this.fg.controls[MgControlName.V_Mode] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}