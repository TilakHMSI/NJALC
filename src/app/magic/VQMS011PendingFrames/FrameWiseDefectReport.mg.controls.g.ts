import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    FrameWiseDefectReport = "FrameWiseDefectReport",
        Label1 = "Label1",
        Label2 = "Label2",
        Label3 = "Label3",
        Label5 = "Label5",
        vFrom_Date = "vFrom_Date",
        vTo_Date = "vTo_Date",
        Edit7 = "Edit7",
        v_Exec = "v_Exec",
        v_Exit = "v_Exit",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get vFrom_Date(): FormControl {
        return this.fg.controls[MgControlName.vFrom_Date] as FormControl;
    }

    get vTo_Date(): FormControl {
        return this.fg.controls[MgControlName.vTo_Date] as FormControl;
    }

    get Edit7(): FormControl {
        return this.fg.controls[MgControlName.Edit7] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}