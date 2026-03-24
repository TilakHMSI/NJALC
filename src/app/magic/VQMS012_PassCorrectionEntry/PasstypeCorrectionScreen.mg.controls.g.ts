import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PasstypeCorrectionScreen = "PasstypeCorrectionScreen",
        Label2 = "Label2",
        S5_PRODLINE = "S5_PRODLINE",
        Label1 = "Label1",
        btnexit = "btnexit",
        Edit4 = "Edit4",
        Edit5 = "Edit5",
        Label6 = "Label6",
        Edit7 = "Edit7",
        Edit8 = "Edit8",
        Label9 = "Label9",
        Label10 = "Label10",
        v_FRAME_NO = "v_FRAME_NO",
        Label12 = "Label12",
        ModelWiseMapping_MTOMAPCODE = "ModelWiseMapping_MTOMAPCODE",
        Label14 = "Label14",
        vDesc = "vDesc",
        Label16 = "Label16",
        S5_MTO_CODE = "S5_MTO_CODE",
        Sub1 = "Sub1",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get S5_PRODLINE(): FormControl {
        return this.fg.controls[MgControlName.S5_PRODLINE] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get Edit5(): FormControl {
        return this.fg.controls[MgControlName.Edit5] as FormControl;
    }

    get Edit7(): FormControl {
        return this.fg.controls[MgControlName.Edit7] as FormControl;
    }

    get Edit8(): FormControl {
        return this.fg.controls[MgControlName.Edit8] as FormControl;
    }

    get v_FRAME_NO(): FormControl {
        return this.fg.controls[MgControlName.v_FRAME_NO] as FormControl;
    }

    get ModelWiseMapping_MTOMAPCODE(): FormControl {
        return this.fg.controls[MgControlName.ModelWiseMapping_MTOMAPCODE] as FormControl;
    }

    get vDesc(): FormControl {
        return this.fg.controls[MgControlName.vDesc] as FormControl;
    }

    get S5_MTO_CODE(): FormControl {
        return this.fg.controls[MgControlName.S5_MTO_CODE] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}