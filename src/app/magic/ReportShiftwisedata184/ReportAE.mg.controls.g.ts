import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    ReportAE = "ReportAE",
        Group1 = "Group1",
        Label2 = "Label2",
        Date_From = "Date_From",
        Label4 = "Label4",
        Date_To = "Date_To",
        Label6 = "Label6",
        B_OK = "B_OK",
        B_Exit = "B_Exit",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Date_From(): FormControl {
        return this.fg.controls[MgControlName.Date_From] as FormControl;
    }

    get Date_To(): FormControl {
        return this.fg.controls[MgControlName.Date_To] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}