import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PRODSCHEDULECONTROLMENU = "PRODSCHEDULECONTROLMENU",
        V_LOCATE_P = "V_LOCATE_P",
        Label1 = "Label1",
        V_DB_NAME1_P = "V_DB_NAME1_P",
        V_DB_NAME2_P = "V_DB_NAME2_P",
        Edit5 = "Edit5",
        Edit6 = "Edit6",
        Label7 = "Label7",
        BUTTONVPRT0021 = "BUTTONVPRT0021",
        BUTTONVPRT0022 = "BUTTONVPRT0022",
        BUTTONBRRTO027 = "BUTTONBRRTO027",
        Label8 = "Label8",
        Label9 = "Label9",
        BUTTONVMNUO00221 = "BUTTONVMNUO00221",
        Label10 = "Label10",
        BUTTONVMNUO00222 = "BUTTONVMNUO00222",
        Label11 = "Label11",
        BUTTONVMNUO00223 = "BUTTONVMNUO00223",
        Label12 = "Label12",
        BUTTONVMNUO00224 = "BUTTONVMNUO00224",
        Label13 = "Label13",
        Label14 = "Label14",
        BUTTONFILE_REORGANIZE = "BUTTONFILE_REORGANIZE",
        btnexit="btnexit"
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_LOCATE_P(): FormControl {
        return this.fg.controls[MgControlName.V_LOCATE_P] as FormControl;
    }

    get V_DB_NAME1_P(): FormControl {
        return this.fg.controls[MgControlName.V_DB_NAME1_P] as FormControl;
    }

    get V_DB_NAME2_P(): FormControl {
        return this.fg.controls[MgControlName.V_DB_NAME2_P] as FormControl;
    }

    get Edit5(): FormControl {
        return this.fg.controls[MgControlName.Edit5] as FormControl;
    }

    get Edit6(): FormControl {
        return this.fg.controls[MgControlName.Edit6] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}