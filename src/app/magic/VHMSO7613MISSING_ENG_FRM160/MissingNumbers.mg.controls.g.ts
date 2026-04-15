import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    MissingNumbers = "MissingNumbers",
        Label1 = "Label1",
        Edit2 = "Edit2",
        Edit3 = "Edit3",
        Label4 = "Label4",
        Label9 = "Label9",
        Label11 = "Label11",
        VGenerate = "VGenerate",
        Label7 = "Label7",
        VDateFrom = "VDateFrom",
        Edit10 = "Edit10",
        V_Operation = "V_Operation",
        Label8 = "Label8",
        VDateTo = "VDateTo",
        EXEC_BUTTON = "EXEC_BUTTON",
        CancelCtl = "CancelCtl",
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

    get VGenerate(): FormControl {
        return this.fg.controls[MgControlName.VGenerate] as FormControl;
    }

    get VDateFrom(): FormControl {
        return this.fg.controls[MgControlName.VDateFrom] as FormControl;
    }

    get Edit10(): FormControl {
        return this.fg.controls[MgControlName.Edit10] as FormControl;
    }

    get V_Operation(): FormControl {
        return this.fg.controls[MgControlName.V_Operation] as FormControl;
    }

    get VDateTo(): FormControl {
        return this.fg.controls[MgControlName.VDateTo] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}