import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PLAN_TABLE_MAINTE_CM = "PLAN_TABLE_MAINTE_CM",
        Label18 = "Label18",
        P15_PS_CODE = "P15_PS_CODE",
        Label19 = "Label19",
        P15_APPL_MODELTYPE = "P15_APPL_MODELTYPE",
        btnSave = "btnSave",
        btnexit = "btnexit",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get P15_PS_CODE(): FormControl {
        return this.fg.controls[MgControlName.P15_PS_CODE] as FormControl;
    }

    get P15_APPL_MODELTYPE(): FormControl {
        return this.fg.controls[MgControlName.P15_APPL_MODELTYPE] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}