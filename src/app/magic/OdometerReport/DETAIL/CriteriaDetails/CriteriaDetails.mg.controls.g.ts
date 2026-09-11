import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CriteriaDetails = "CriteriaDetails",
        FRAMENO = "FRAMENO",
        pFrameNo = "pFrameNo",
        btnexit = "btnexit",
        Table1 = "Table1",
        Column2 = "Column2",
        Label1 = "Label1",
        Column3 = "Column3",
        SHIPPINGCRITERIA = "SHIPPINGCRITERIA",
        Column4 = "Column4",
        REMARKS = "REMARKS",
        Column34 = "Column34",
        READINGFROM = "READINGFROM",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
        'Column34',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get pFrameNo(): FormControl {
        return this.fg.controls[MgControlName.pFrameNo] as FormControl;
    }

    get SHIPPINGCRITERIA(): FormControl {
        return this.getTableChildFormControl(MgControlName.SHIPPINGCRITERIA);
    }

    get REMARKS(): FormControl {
        return this.getTableChildFormControl(MgControlName.REMARKS);
    }

    get READINGFROM(): FormControl {
        return this.getTableChildFormControl(MgControlName.READINGFROM);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}