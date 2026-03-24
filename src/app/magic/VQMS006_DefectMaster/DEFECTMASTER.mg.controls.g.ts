import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DEFECTMASTER = "DEFECTMASTER",
        v_Option = "v_Option",
        Edit2 = "Edit2",
        Label1 = "Label1",
        Edit3 = "Edit3",
        Label5 = "Label5",
        Label6 = "Label6",
        PModel = "PModel",
        btnexit = "btnexit",
        Edit4 = "Edit4",
        DETAIL = "DETAIL",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get v_Option(): FormControl {
        return this.fg.controls[MgControlName.v_Option] as FormControl;
    }

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get PModel(): FormControl {
        return this.fg.controls[MgControlName.PModel] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}