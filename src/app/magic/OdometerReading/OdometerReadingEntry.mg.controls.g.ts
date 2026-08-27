import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    OdometerReadingEntry = "OdometerReadingEntry",
        Label1 = "Label1",
        btnexit = "btnexit",
        Label6 = "Label6",
        FrameNo = "FrameNo",
        FLAGOFF = "FLAGOFF",
        DETAIL = "DETAIL",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get FrameNo(): FormControl {
        return this.fg.controls[MgControlName.FrameNo] as FormControl;
    }

    get FLAGOFF(): FormControl {
        return this.fg.controls[MgControlName.FLAGOFF] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}