import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    Prd_hold_frameReport = "Prd_hold_frameReport",
        Label1 = "Label1",
        Label3 = "Label3",
        Label8 = "Label8",
        Label2 = "Label2",
        Label4 = "Label4",
        Button_Execute = "Button_Execute",
        Plan_date_From = "Plan_date_From",
        Selection = "Selection",
        Label6 = "Label6",
        Button_Cancel = "Button_Cancel",
        Plan_date_To = "Plan_date_To",
        btn_Close="btn_Close",
        vBlob64base="vBlob64base",
        vFileName="vFileName"
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Plan_date_From(): FormControl {
        return this.fg.controls[MgControlName.Plan_date_From] as FormControl;
    }

    get Selection(): FormControl {
        return this.fg.controls[MgControlName.Selection] as FormControl;
    }

    get Plan_date_To(): FormControl {
        return this.fg.controls[MgControlName.Plan_date_To] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}