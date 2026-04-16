import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    REPRINTENTRYFVISFECARD = "REPRINTENTRYFVISFECARD",
        Label1 = "Label1",
        MODE_V = "MODE_V",
        Label2 = "Label2",
        ENGFRMTYPE_V = "ENGFRMTYPE_V",
        CHASSIS_NOFROM_V = "CHASSIS_NOFROM_V",
        Label3 = "Label3",
        Label12 = "Label12",
        CHASSIS_NOTO_V = "CHASSIS_NOTO_V",
        Label4 = "Label4",
        Edit14 = "Edit14",
        Label5 = "Label5",
        V_LOCATE_P = "V_LOCATE_P",
        Label9 = "Label9",
        Edit6 = "Edit6",
        Edit7 = "Edit7",
        ConfirmEntry = "ConfirmEntry",
        PRINT_BOTTON_V = "PRINT_BOTTON_V",
        DEL = "DEL",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get MODE_V(): FormControl {
        return this.fg.controls[MgControlName.MODE_V] as FormControl;
    }

    get ENGFRMTYPE_V(): FormControl {
        return this.fg.controls[MgControlName.ENGFRMTYPE_V] as FormControl;
    }

    get CHASSIS_NOFROM_V(): FormControl {
        return this.fg.controls[MgControlName.CHASSIS_NOFROM_V] as FormControl;
    }

    get CHASSIS_NOTO_V(): FormControl {
        return this.fg.controls[MgControlName.CHASSIS_NOTO_V] as FormControl;
    }

    get Edit14(): FormControl {
        return this.fg.controls[MgControlName.Edit14] as FormControl;
    }

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
    }

    get Edit6(): FormControl {
        return this.fg.controls[MgControlName.Edit6] as FormControl;
    }

    get Edit7(): FormControl {
        return this.fg.controls[MgControlName.Edit7] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}