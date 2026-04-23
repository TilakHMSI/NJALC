import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    MissingFrameNumberModify = "MissingFrameNumberModify",
        Label1 = "Label1",
        Edit2 = "Edit2",
        Edit3 = "Edit3",
        Label5 = "Label5",
        VFrom_Date = "VFrom_Date",
        Label7 = "Label7",
        VTo_Date = "VTo_Date",
        VOkButton = "VOkButton",
        btnexit = "btnexit",
        btnHelp = "btnHelp",
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

    get VFrom_Date(): FormControl {
        return this.fg.controls[MgControlName.VFrom_Date] as FormControl;
    }

    get VTo_Date(): FormControl {
        return this.fg.controls[MgControlName.VTo_Date] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}