import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DISPLAYBOARD = "DISPLAYBOARD",
        Label4 = "Label4",
        VWorkstatione = "VWorkstatione",
        Label6 = "Label6",
        VProd = "VProd",
        VOK = "VOK",
        btnexit = "btnexit",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get VWorkstatione(): FormControl {
        return this.fg.controls[MgControlName.VWorkstatione] as FormControl;
    }

    get VProd(): FormControl {
        return this.fg.controls[MgControlName.VProd] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}