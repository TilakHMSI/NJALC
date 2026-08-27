import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DETAIL = "DETAIL",
        BtnAdd = "BtnAdd",
        Table1 = "Table1",
        Column23 = "Column23",
        OdoCriteriaMaster_CATEGORY = "OdoCriteriaMaster_CATEGORY",
        Column2 = "Column2",
        SRNO = "SRNO",
        Column3 = "Column3",
        SHIPPINGCRITERIA = "SHIPPINGCRITERIA",
        Column4 = "Column4",
        REMARKS = "REMARKS",
        Column17 = "Column17",
        RANGEFROM = "RANGEFROM",
        Column19 = "Column19",
        RANGETO = "RANGETO",
        Column12 = "Column12",
        EnterRowEditing = "EnterRowEditing",
        SaveRowEditing = "SaveRowEditing",
        CancelRowEditing = "CancelRowEditing",
        btnDelete = "btnDelete",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column23',
        'Column2',
        'Column3',
        'Column4',
        'Column17',
        'Column19',
        'Column12',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get OdoCriteriaMaster_CATEGORY(): FormControl {
        return this.getTableChildFormControl(MgControlName.OdoCriteriaMaster_CATEGORY);
    }

    get SRNO(): FormControl {
        return this.getTableChildFormControl(MgControlName.SRNO);
    }

    get SHIPPINGCRITERIA(): FormControl {
        return this.getTableChildFormControl(MgControlName.SHIPPINGCRITERIA);
    }

    get REMARKS(): FormControl {
        return this.getTableChildFormControl(MgControlName.REMARKS);
    }

    get RANGEFROM(): FormControl {
        return this.getTableChildFormControl(MgControlName.RANGEFROM);
    }

    get RANGETO(): FormControl {
        return this.getTableChildFormControl(MgControlName.RANGETO);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}