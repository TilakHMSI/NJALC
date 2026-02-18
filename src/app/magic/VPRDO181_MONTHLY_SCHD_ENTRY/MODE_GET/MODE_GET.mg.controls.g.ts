import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    MODE_GET = "MODE_GET",
        MODE_V1 = "MODE_V1",
        SelectExcelFileButton = "SelectExcelFileButton",
        SubFormOne = "SubFormOne",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get MODE_V1(): FormControl {
        return this.fg.controls[MgControlName.MODE_V1] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}