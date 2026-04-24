import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    HISTORYINQUIRYDATAENTRY = "HISTORYINQUIRYDATAENTRY",
        Table1 = "Table1",
        Column2 = "Column2",
        SB_EFM = "SB_EFM",
        Column3 = "Column3",
        SB_ENGFRMTYPE = "SB_ENGFRMTYPE",
        Column4 = "Column4",
        SB_CHASSIS_NOFROM = "SB_CHASSIS_NOFROM",
        Column5 = "Column5",
        SB_CHASSIS_NOTO = "SB_CHASSIS_NOTO",
        Column6 = "Column6",
        Edit10 = "Edit10",
}
export enum MgCustomProperties {}
export var
    MgDisplayedColumns = [
        'Column2',
        'Column3',
        'Column4',
        'Column5',
        'Column6',
    ];

export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get SB_EFM(): FormControl {
        return this.getTableChildFormControl(MgControlName.SB_EFM);
    }

    get SB_ENGFRMTYPE(): FormControl {
        return this.getTableChildFormControl(MgControlName.SB_ENGFRMTYPE);
    }

    get SB_CHASSIS_NOFROM(): FormControl {
        return this.getTableChildFormControl(MgControlName.SB_CHASSIS_NOFROM);
    }

    get SB_CHASSIS_NOTO(): FormControl {
        return this.getTableChildFormControl(MgControlName.SB_CHASSIS_NOTO);
    }

    get Edit10(): FormControl {
        return this.getTableChildFormControl(MgControlName.Edit10);
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}