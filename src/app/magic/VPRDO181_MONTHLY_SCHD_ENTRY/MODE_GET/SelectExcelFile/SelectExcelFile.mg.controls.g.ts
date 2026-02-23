import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    SelectExcelFile = "SelectExcelFile",
        vBlob64Format = "vBlob64Format",
        Label1 = "Label1",
        Select_Excel_File = "Select_Excel_File",
        Execute = "Execute",
        Cancel = "Cancel",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get vBlob64Format(): FormControl {
        return this.fg.controls[MgControlName.vBlob64Format] as FormControl;
    }

    get Select_Excel_File(): FormControl {
        return this.fg.controls[MgControlName.Select_Excel_File] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}