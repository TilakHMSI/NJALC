import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DAILYPRODUCTIONMERGEREPORT262 = "DAILYPRODUCTIONMERGEREPORT262",
        Edit1 = "Edit1",
        Label2 = "Label2",
        Label3 = "Label3",
        v_Date = "v_Date",
        Label5 = "Label5",
        v_Shift = "v_Shift",
        Label6 = "Label6",
        v_Prod_Line = "v_Prod_Line",
        v_Exec = "v_Exec",
        v_Exit = "v_Exit",
        Edit7 = "Edit7",
        Edit8 = "Edit8",
         btn_Close="btn_Close",
        vBlob64base="vBlob64base",
        vFileName="vFileName"
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

    get v_Prod_Line(): FormControl {
        return this.fg.controls[MgControlName.v_Prod_Line] as FormControl;
    }

    get Edit7(): FormControl {
        return this.fg.controls[MgControlName.Edit7] as FormControl;
    }

    get Edit8(): FormControl {
        return this.fg.controls[MgControlName.Edit8] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}