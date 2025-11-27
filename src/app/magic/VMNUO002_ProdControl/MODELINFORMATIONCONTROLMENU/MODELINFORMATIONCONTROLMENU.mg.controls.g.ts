import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    MODELINFORMATIONCONTROLMENU = "MODELINFORMATIONCONTROLMENU",
        V_LOCATE_P = "V_LOCATE_P",
        Label2 = "Label2",
        V_DB_NAME1_P = "V_DB_NAME1_P",
        V_DB_NAME2_P = "V_DB_NAME2_P",
        Edit5 = "Edit5",
        Edit6 = "Edit6",
        Label7 = "Label7",
        BUTTONVPRT0011 = "BUTTONVPRT0011",
        BUTTONVPRT0012 = "BUTTONVPRT0012",
        BUTTONVPRT0013 = "BUTTONVPRT0013",
        BUTTONVPRDO001 = "BUTTONVPRDO001",
        BUTTONVPRDO028 = "BUTTONVPRDO028",
        BUTTONVPRDO014029 = "BUTTONVPRDO014029",
        BUTTONVPRDO068030 = "BUTTONVPRDO068030",
        BUTTONVPRT0015 = "BUTTONVPRT0015",
        Label8 = "Label8",
        Label10 = "Label10",
        BUTTONMTOC_MASTER_LIST = "BUTTONMTOC_MASTER_LIST",
        BUTTONMTOC_MAINT_CHK_LSIT = "BUTTONMTOC_MAINT_CHK_LSIT",
        BUTTONVSHPO021 = "BUTTONVSHPO021",
        BUTTONVSHPO022 = "BUTTONVSHPO022",
        Label9 = "Label9",
        Label11 = "Label11",
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