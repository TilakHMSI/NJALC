import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    CriteriaDetailsView = "CriteriaDetailsView",
        Label36 = "Label36",
        pFrameNo = "pFrameNo",
        Table1 = "Table1",
        Column2 = "Column2",
        Label1 = "Label1",
        Column3 = "Column3",
        SHIPPINGCRITERIA = "SHIPPINGCRITERIA",
        Column34 = "Column34",
        OdoCriteriaMaster_REMARKS = "OdoCriteriaMaster_REMARKS",
        Column4 = "Column4",
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