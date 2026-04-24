import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DUMMY = "DUMMY",
        Table1 = "Table1",
        Column2 = "Column2",
        Edit12 = "Edit12",
        V_CHASSIS_NO = "V_CHASSIS_NO",
        Column3 = "Column3",
        V_MTO_NAME = "V_MTO_NAME",
        Column4 = "Column4",
        V_COLOR_CODE = "V_COLOR_CODE",
        Column5 = "Column5",
        V_AFOFF_DATE = "V_AFOFF_DATE",
        Column6 = "Column6",
        V_AFOFF_TIME = "V_AFOFF_TIME",
        Column7 = "Column7",
        V_VQOFF_DATE = "V_VQOFF_DATE",
        Column8 = "Column8",
        V_PACKING_DATE = "V_PACKING_DATE",
        Column9 = "Column9",
        V_SHIPPING_DATE = "V_SHIPPING_DATE",
        Column10 = "Column10",
        V_VIN_TYPE = "V_VIN_TYPE",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
        'Column5',
        'Column6',
        'Column7',
        'Column8',
        'Column9',
        'Column10',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit12(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit12);
    }

    get V_CHASSIS_NO(): FormControl {
        return this.getTableChildFormControl(MgControlName.V_CHASSIS_NO);
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