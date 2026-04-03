import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    FRAME_UPLOAD = "FRAME_UPLOAD",
        Label1 = "Label1",
        btnexit = "btnexit",
        Edit2 = "Edit2",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        FRAME_DETAIL_VIEW = "FRAME_DETAIL_VIEW",
        Label5 = "Label5",
        V_Frame = "V_Frame",
        b_UploadFile_0001 = "b_UploadFile_0001",
        b_PickFile = "b_PickFile",
        vFileName="vFileName",
        vBlob64Format="vBlob64Format"
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

    get V_Frame(): FormControl {
        return this.fg.controls[MgControlName.V_Frame] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}