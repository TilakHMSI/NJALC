import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CKDCaseOffPackingStatus251 = "CKDCaseOffPackingStatus251",
        Edit1 = "Edit1",
        Edit2 = "Edit2",
        Label3 = "Label3",
        Label4 = "Label4",
        Plan_Month = "Plan_Month",
        Proceed = "Proceed",
        Exit = "Exit",
        Label6 = "Label6",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit1(): FormControl {
        return this.fg.controls[MgControlName.Edit1] as FormControl;
    }

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get Plan_Month(): FormControl {
        return this.fg.controls[MgControlName.Plan_Month] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}