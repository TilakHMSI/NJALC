import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VPRDO001_PLAN_TABLE_MAINTE = "VPRDO001_PLAN_TABLE_MAINTE",
        pLOCATE_P = "pLOCATE_P",
        Label1 = "Label1",
        vSearch = "vSearch",
        btnSearch = "btnSearch",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        Sub1 = "Sub1",
        btnexit = "btnexit",
        BUTTON = "BUTTON",
        BUTTON2 = "BUTTON2",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get pLOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.pLOCATE_P] as FormControl;
    }

    get vSearch(): FormControl {
        return this.fg.controls[MgControlName.vSearch] as FormControl;
    }

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}