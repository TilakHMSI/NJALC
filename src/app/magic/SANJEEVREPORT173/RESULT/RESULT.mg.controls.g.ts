import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    RESULT = "RESULT",
        Label1 = "Label1",
        Edit2 = "Edit2",
        Label3 = "Label3",
        Edit4 = "Edit4",
        Label5 = "Label5",
        Edit6 = "Edit6",
        Label7 = "Label7",
        V_COUNT_V = "V_COUNT_V",
        btn_Exit = "btn_Exit",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get Edit6(): FormControl {
        return this.fg.controls[MgControlName.Edit6] as FormControl;
    }

    get V_COUNT_V(): FormControl {
        return this.fg.controls[MgControlName.V_COUNT_V] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}