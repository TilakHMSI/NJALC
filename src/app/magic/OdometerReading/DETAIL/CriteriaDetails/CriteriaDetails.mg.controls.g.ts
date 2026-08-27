import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CriteriaDetails = "CriteriaDetails",
        btnexit = "btnexit",
        btnUpdate = "btnUpdate",
        Table1 = "Table1",
        Column2 = "Column2",
        Label1 = "Label1",
        Column3 = "Column3",
        SHIPPINGCRITERIA = "SHIPPINGCRITERIA",
        Column34 = "Column34",
        OdoCriteriaMaster_REMARKS = "OdoCriteriaMaster_REMARKS",
        Column4 = "Column4",
        READINGFROM = "READINGFROM",
        pFrameNo = "pFrameNo",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column34',
        'Column4',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get pFrameNo(): FormControl {
        return this.getTableChildFormControl(MgControlName.pFrameNo);
    }

    get SHIPPINGCRITERIA(): FormControl {
        return this.getTableChildFormControl(MgControlName.SHIPPINGCRITERIA);
    }

    get OdoCriteriaMaster_REMARKS(): FormControl {
        return this.getTableChildFormControl(MgControlName.OdoCriteriaMaster_REMARKS);
    }

    get READINGFROM(): FormControl {
        return this.getTableChildFormControl(MgControlName.READINGFROM);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}