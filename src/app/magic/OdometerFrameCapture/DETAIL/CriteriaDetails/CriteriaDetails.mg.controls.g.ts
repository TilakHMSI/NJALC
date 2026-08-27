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
        Column4 = "Column4",
        REMARKS = "REMARKS",
        Column19 = "Column19",
        FLAGON = "FLAGON",
        pFrameNo  = "pFrameNo",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
        'Column19',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get pFrameNo(): FormControl {
        return this.getTableChildFormControl(MgControlName.pFrameNo);
    }

    get SHIPPINGCRITERIA(): FormControl {
        return this.getTableChildFormControl(MgControlName.SHIPPINGCRITERIA);
    }

    get REMARKS(): FormControl {
        return this.getTableChildFormControl(MgControlName.REMARKS);
    }

    get FLAGON(): FormControl {
        return this.getTableChildFormControl(MgControlName.FLAGON);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}