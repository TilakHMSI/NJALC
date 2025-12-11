import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PrintScreen = "PrintScreen",
        Table1 = "Table1",
        Column11 = "Column11",
        PrintDetails_CreatedDate = "PrintDetails_CreatedDate",
        Column12 = "Column12",
        PrintDetails_CreatedTime = "PrintDetails_CreatedTime",
        Column13 = "Column13",
        PrintDetails_FileName = "PrintDetails_FileName",
        Column14 = "Column14",
        PrintDetails_PRGName = "PrintDetails_PRGName",
        Column15 = "Column15",
        PrintDetails_PrintType = "PrintDetails_PrintType",
        Column16 = "Column16",
        PrintDetails_PrinterType = "PrintDetails_PrinterType",
        btn_Close="btn_Close",
        Column17="Column17",
        btn_download="btn_download",
        vBlobResponseBase64="vBlobResponseBase64",
       
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column16',
        'Column15',
        'Column14',
        'Column13',
        'Column11',
        'Column12',
        'Column17',
        
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get PrintDetails_CreatedDate(): FormControl {
        return this.getTableChildFormControl(MgControlName.PrintDetails_CreatedDate);
    }

    get PrintDetails_CreatedTime(): FormControl {
        return this.getTableChildFormControl(MgControlName.PrintDetails_CreatedTime);
    }

    get PrintDetails_FileName(): FormControl {
        return this.getTableChildFormControl(MgControlName.PrintDetails_FileName);
    }

    get PrintDetails_PRGName(): FormControl {
        return this.getTableChildFormControl(MgControlName.PrintDetails_PRGName);
    }

    get PrintDetails_PrintType(): FormControl {
        return this.getTableChildFormControl(MgControlName.PrintDetails_PrintType);
    }

    get PrintDetails_PrinterType(): FormControl {
        return this.getTableChildFormControl(MgControlName.PrintDetails_PrinterType);
    }

    get vBlobResponseBase64(): FormControl {
        return this.getTableChildFormControl(MgControlName.vBlobResponseBase64);
    }
    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}