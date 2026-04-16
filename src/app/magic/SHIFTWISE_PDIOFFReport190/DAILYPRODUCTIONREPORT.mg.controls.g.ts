import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DAILYPRODUCTIONREPORT = "DAILYPRODUCTIONREPORT",
        Edit1 = "Edit1",
        Label2 = "Label2",
        Group6 = "Group6",
        Label7 = "Label7",
        v_DateFrom = "v_DateFrom",
        Label9 = "Label9",
        v_DateTo = "v_DateTo",
        Label11 = "Label11",
        v_Prod_Line = "v_Prod_Line",
        v_Exec = "v_Exec",
        v_Exit = "v_Exit",
        Edit4 = "Edit4",
        Edit3 = "Edit3",
        Label5 = "Label5",
        v_Shift = "v_Shift",
        v_Page_type = "v_Page_type",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit1(): FormControl {
        return this.fg.controls[MgControlName.Edit1] as FormControl;
    }

    get v_DateFrom(): FormControl {
        return this.fg.controls[MgControlName.v_DateFrom] as FormControl;
    }

    get v_DateTo(): FormControl {
        return this.fg.controls[MgControlName.v_DateTo] as FormControl;
    }

    get v_Prod_Line(): FormControl {
        return this.fg.controls[MgControlName.v_Prod_Line] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get v_Shift(): FormControl {
        return this.fg.controls[MgControlName.v_Shift] as FormControl;
    }

    get v_Page_type(): FormControl {
        return this.fg.controls[MgControlName.v_Page_type] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}