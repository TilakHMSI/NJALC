import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DAILYPRODUCTIONREPORT179 = "DAILYPRODUCTIONREPORT179",
        Edit1 = "Edit1",
        Label2 = "Label2",
        Label3 = "Label3",
        v_Date = "v_Date",
        Label5 = "Label5",
        v_Shift = "v_Shift",
        v_Page_type = "v_Page_type",
        Label6 = "Label6",
        v_Prod_Line = "v_Prod_Line",
        v_Exec = "v_Exec",
        v_Exit = "v_Exit",
        Edit8 = "Edit8",
        Edit7 = "Edit7",
        btn_Close="btn_Close",
        vBlob64base="vBlob64base",
        vFileName="vFileName",
        vBlob64base1="vBlob64base1",
        vFileName1="vFileName1"
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit1(): FormControl {
        return this.fg.controls[MgControlName.Edit1] as FormControl;
    }

    get v_Date(): FormControl {
        return this.fg.controls[MgControlName.v_Date] as FormControl;
    }

    get v_Shift(): FormControl {
        return this.fg.controls[MgControlName.v_Shift] as FormControl;
    }

    get v_Page_type(): FormControl {
        return this.fg.controls[MgControlName.v_Page_type] as FormControl;
    }

    get v_Prod_Line(): FormControl {
        return this.fg.controls[MgControlName.v_Prod_Line] as FormControl;
    }

    get Edit8(): FormControl {
        return this.fg.controls[MgControlName.Edit8] as FormControl;
    }

    get Edit7(): FormControl {
        return this.fg.controls[MgControlName.Edit7] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}