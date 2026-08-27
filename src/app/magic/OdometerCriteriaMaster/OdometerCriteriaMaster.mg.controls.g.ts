import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    OdometerCriteriaMaster = "OdometerCriteriaMaster",
        Label1 = "Label1",
        Label6 = "Label6",
        vCategory = "vCategory",
        vSearch = "vSearch",
        btnexit = "btnexit",
        DETAIL = "DETAIL",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get vCategory(): FormControl {
        return this.fg.controls[MgControlName.vCategory] as FormControl;
    }

    get vSearch(): FormControl {
        return this.fg.controls[MgControlName.vSearch] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}