import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    VPRDB023_LFACTORYFRAMELIST249 = "VPRDB023_LFACTORYFRAMELIST249",
        LOCATE_P = "LOCATE_P",
        Label2 = "Label2",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        Label5 = "Label5",
        v_plant = "v_plant",
        Group7 = "Group7",
        Label9 = "Label9",
        vDateRange = "vDateRange",
        Label10 = "Label10",
        vTimeRange = "vTimeRange",
        SELECT_V = "SELECT_V",
        DAY_V = "DAY_V",
        Label14 = "Label14",
        EXECBUTTON = "EXECBUTTON",
        CANCELBUTTON = "CANCELBUTTON",
        Label18 = "Label18",
        Label19 = "Label19",
        Label20 = "Label20",
        btn_Close="btn_Close",
        vBlob64base="vBlob64base",
        vFileName="vFileName",
        vBlob64base1="vBlob64base1",
        vFileName1="vFileName1"

}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.LOCATE_P] as FormControl;
    }

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get v_plant(): FormControl {
        return this.fg.controls[MgControlName.v_plant] as FormControl;
    }

    get vDateRange(): FormControl {
        return this.fg.controls[MgControlName.vDateRange] as FormControl;
    }

    get vTimeRange(): FormControl {
        return this.fg.controls[MgControlName.vTimeRange] as FormControl;
    }

    get SELECT_V(): FormControl {
        return this.fg.controls[MgControlName.SELECT_V] as FormControl;
    }

    get DAY_V(): FormControl {
        return this.fg.controls[MgControlName.DAY_V] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}