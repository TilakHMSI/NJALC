import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    UNUNITINGCHOOSE = "UNUNITINGCHOOSE",
        Table3 = "Table3",
        Column4 = "Column4",
        Edit13 = "Edit13",
        Edit14 = "Edit14",
        Column5 = "Column5",
        V_MTO_NAME = "V_MTO_NAME",
        Column6 = "Column6",
        V_COLOR_CODE = "V_COLOR_CODE",
        Column7 = "Column7",
        V_AFOFF_DATE = "V_AFOFF_DATE",
        Column8 = "Column8",
        V_AFOFF_TIME = "V_AFOFF_TIME",
        Column9 = "Column9",
        V_VQOFF_DATE = "V_VQOFF_DATE",
        Column10 = "Column10",
        V_PACKING_DATE = "V_PACKING_DATE",
        Column11 = "Column11",
        V_SHIPPING_DATE = "V_SHIPPING_DATE",
        Column12 = "Column12",
        V_VIN_TYPE = "V_VIN_TYPE",
        Label1 = "Label1",
        Label2 = "Label2",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column4',
        'Column5',
        'Column6',
        'Column7',
        'Column8',
        'Column9',
        'Column10',
        'Column11',
        'Column12',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit13(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit13);
    }

    get Edit14(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit14);
    }

    get V_MTO_NAME(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_MTO_NAME);
    }

    get V_COLOR_CODE(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_COLOR_CODE);
    }

    get V_AFOFF_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_AFOFF_DATE);
    }

    get V_AFOFF_TIME(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_AFOFF_TIME);
    }

    get V_VQOFF_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_VQOFF_DATE);
    }

    get V_PACKING_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_PACKING_DATE);
    }

    get V_SHIPPING_DATE(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_SHIPPING_DATE);
    }

    get V_VIN_TYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_VIN_TYPE);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}