import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DispatchStopReport = "DispatchStopReport",
        Label1 = "Label1",
        Edit2 = "Edit2",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        Label6 = "Label6",
        v_FilterOption = "v_FilterOption",
        Label7 = "Label7",
        v_FilterEndDate = "v_FilterEndDate",
        v_FilterEndFromDate_0001 = "v_FilterEndFromDate_0001",
        Label10 = "Label10",
        v_OutputOption = "v_OutputOption",
        b_ApplyFilter = "b_ApplyFilter",
        btnexit = "btnexit",
        vBlobResponseBase64="vBlobResponseBase64",
        v_FileName="v_FileName"
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

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get v_FilterOption(): FormControl {
        return this.fg.controls[MgControlName.v_FilterOption] as FormControl;
    }

    get v_FilterEndDate(): FormControl {
        return this.fg.controls[MgControlName.v_FilterEndDate] as FormControl;
    }

    get v_FilterEndFromDate_0001(): FormControl {
        return this.fg.controls[MgControlName.v_FilterEndFromDate_0001] as FormControl;
    }

    get v_OutputOption(): FormControl {
        return this.fg.controls[MgControlName.v_OutputOption] as FormControl;
    }
     get v_FileName(): FormControl {
        return this.fg.controls[MgControlName.v_FileName] as FormControl;
    }
     get vBlobResponseBase64(): FormControl {
                return this.fg.controls[MgControlName.vBlobResponseBase64] as FormControl;
            }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}