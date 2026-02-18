import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    SelectExcelFile = "SelectExcelFile",
        Edit5 = "Edit5",
        Label1 = "Label1",
        Select_Excel_File = "Select_Excel_File",
        Execute = "Execute",
        Cancel = "Cancel",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit5(): FormControl {
        return this.fg.controls[MgControlName.Edit5] as FormControl;
    }

    get Select_Excel_File(): FormControl {
        return this.fg.controls[MgControlName.Select_Excel_File] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}