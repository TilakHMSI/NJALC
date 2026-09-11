import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    FrameReport = "FrameReport",
        Label1 = "Label1",
        btnexit = "btnexit",
        FrameNo = "FrameNo",
        Label3 = "Label3",
        InitiatedDate = "InitiatedDate",
        Label4 = "Label4",
        InitiatedToDate = "InitiatedToDate",
        vFlag = "vFlag",
        btnPdf = "btnPdf",
        DETAIL = "DETAIL",
        vBlobResponseBase64="vBlobResponseBase64",
        vFileName="vFileName"
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get FrameNo(): FormControl {
        return this.fg.controls[MgControlName.FrameNo] as FormControl;
    }

    get InitiatedDate(): FormControl {
        return this.fg.controls[MgControlName.InitiatedDate] as FormControl;
    }

    get InitiatedToDate(): FormControl {
        return this.fg.controls[MgControlName.InitiatedToDate] as FormControl;
    }

    get vFlag(): FormControl {
        return this.fg.controls[MgControlName.vFlag] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}