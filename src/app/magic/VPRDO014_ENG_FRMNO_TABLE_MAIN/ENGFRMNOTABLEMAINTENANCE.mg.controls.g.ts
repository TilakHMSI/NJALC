import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ENGFRMNOTABLEMAINTENANCE = "ENGFRMNOTABLEMAINTENANCE",
        MODE_V = "MODE_V",
        V_LOCATE_P = "V_LOCATE_P",
        Label2 = "Label2",
        ENGFRMTYPE_V = "ENGFRMTYPE_V",
        PROD1ST_CHASIS_NO_V = "PROD1ST_CHASIS_NO_V",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        Label7 = "Label7",
        Label8 = "Label8",
        btnexit = "btnexit",
        Sub1 = "Sub1",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get MODE_V(): FormControl {
        return this.fg.controls[MgControlName.MODE_V] as FormControl;
    }

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
    }

    get ENGFRMTYPE_V(): FormControl {
        return this.fg.controls[MgControlName.ENGFRMTYPE_V] as FormControl;
    }

    get PROD1ST_CHASIS_NO_V(): FormControl {
        return this.fg.controls[MgControlName.PROD1ST_CHASIS_NO_V] as FormControl;
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