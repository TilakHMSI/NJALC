import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    AFSHIFTTIMING = "AFSHIFTTIMING",
        Label2 = "Label2",
        Label1 = "Label1",
        VShift = "VShift",
        Label4 = "Label4",
        VProd = "VProd",
        Sub1 = "Sub1",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get VShift(): FormControl {
        return this.fg.controls[MgControlName.VShift] as FormControl;
    }

    get VProd(): FormControl {
        return this.fg.controls[MgControlName.VProd] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}