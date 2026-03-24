import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    FRAMERANGE_UNHOLD_ENTRY = "FRAMERANGE_UNHOLD_ENTRY",
        Label1 = "Label1",
        Edit2 = "Edit2",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        Sub1 = "Sub1",
        Label5 = "Label5",
        Label6 = "Label6",
        Label8 = "Label8",
        V_Frame = "V_Frame",
        V_Frame_To_0001 = "V_Frame_To_0001",
        b_Submit = "b_Submit",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get V_Frame(): FormControl {
        return this.fg.controls[MgControlName.V_Frame] as FormControl;
    }

    get V_Frame_To_0001(): FormControl {
        return this.fg.controls[MgControlName.V_Frame_To_0001] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}