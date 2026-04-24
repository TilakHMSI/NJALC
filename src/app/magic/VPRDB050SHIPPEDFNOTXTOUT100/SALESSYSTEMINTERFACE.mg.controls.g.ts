import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    SALESSYSTEMINTERFACE = "SALESSYSTEMINTERFACE",
        Label1 = "Label1",
        Edit2 = "Edit2",
        Edit3 = "Edit3",
        Label4 = "Label4",
        v_Plan_Line = "v_Plan_Line",
        Label5 = "Label5",
        FROM_DATE_V = "FROM_DATE_V",
        Label7 = "Label7",
        TO_DATE_V = "TO_DATE_V",
        Label9 = "Label9",
        OUTPUT_FILE_NAME_V = "OUTPUT_FILE_NAME_V",
        EXECBUTTON = "EXECBUTTON",
        CANCELBUTTON = "CANCELBUTTON",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get v_Plan_Line(): FormControl {
        return this.fg.controls[MgControlName.v_Plan_Line] as FormControl;
    }

    get FROM_DATE_V(): FormControl {
        return this.fg.controls[MgControlName.FROM_DATE_V] as FormControl;
    }

    get TO_DATE_V(): FormControl {
        return this.fg.controls[MgControlName.TO_DATE_V] as FormControl;
    }

    get OUTPUT_FILE_NAME_V(): FormControl {
        return this.fg.controls[MgControlName.OUTPUT_FILE_NAME_V] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}