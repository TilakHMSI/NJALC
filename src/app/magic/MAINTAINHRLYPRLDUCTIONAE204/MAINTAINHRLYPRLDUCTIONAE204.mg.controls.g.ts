import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    MAINTAINHRLYPRLDUCTIONAE204 = "MAINTAINHRLYPRLDUCTIONAE204",
        Label1 = "Label1",
        Label2 = "Label2",
        Label4 = "Label4",
        Label3 = "Label3",
        V_SHIFT = "V_SHIFT",
        V_PRD_LINE = "V_PRD_LINE",
        Sub1 = "Sub1",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_SHIFT(): FormControl {
        return this.fg.controls[MgControlName.V_SHIFT] as FormControl;
    }

    get V_PRD_LINE(): FormControl {
        return this.fg.controls[MgControlName.V_PRD_LINE] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}