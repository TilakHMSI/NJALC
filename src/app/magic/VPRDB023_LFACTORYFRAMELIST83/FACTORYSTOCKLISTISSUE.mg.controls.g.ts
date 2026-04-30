import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    FACTORYSTOCKLISTISSUE = "FACTORYSTOCKLISTISSUE",
        V_LOCATE_P = "V_LOCATE_P",
        Label2 = "Label2",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        Label5 = "Label5",
        v_plant = "v_plant",
        SELECT_V = "SELECT_V",
        DAY_V = "DAY_V",
        Label7 = "Label7",
        EXECBUTTON = "EXECBUTTON",
        CANCELBUTTON = "CANCELBUTTON",
        vBlob64base="vBlob64base",
        vFileName="vFileName",
        btn_Close="btn_Close"
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
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