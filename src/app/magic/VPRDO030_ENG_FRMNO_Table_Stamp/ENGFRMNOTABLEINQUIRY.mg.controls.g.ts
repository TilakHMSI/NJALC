import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ENGFRMNOTABLEINQUIRY = "ENGFRMNOTABLEINQUIRY",
        V_LOCATE_P = "V_LOCATE_P",
        Label2 = "Label2",
        Label5 = "Label5",
        GROUP_VT1 = "GROUP_VT1",
        ENGFRMTYPE_VT1 = "ENGFRMTYPE_VT1",
        PROD1ST_NO_VT1 = "PROD1ST_NO_VT1",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        Label9 = "Label9",
        Label10 = "Label10",
        Label11 = "Label11",
        Label12 = "Label12",
        btnexit = "btnexit",
        Sub1 = "Sub1",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
    }

    get GROUP_VT1(): FormControl {
        return this.fg.controls[MgControlName.GROUP_VT1] as FormControl;
    }

    get ENGFRMTYPE_VT1(): FormControl {
        return this.fg.controls[MgControlName.ENGFRMTYPE_VT1] as FormControl;
    }

    get PROD1ST_NO_VT1(): FormControl {
        return this.fg.controls[MgControlName.PROD1ST_NO_VT1] as FormControl;
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