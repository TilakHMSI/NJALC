import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VBOMG003_PRD010_GUIDE2_133 = "VBOMG003_PRD010_GUIDE2_133",
        btnexit = "btnexit",
        vSearch = "vSearch",
        Btn_Search = "Btn_Search",
        Sub1 = "Sub1",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get vSearch(): FormControl {
        return this.fg.controls[MgControlName.vSearch] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}