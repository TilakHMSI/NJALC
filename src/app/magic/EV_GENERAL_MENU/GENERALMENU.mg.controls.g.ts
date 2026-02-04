import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    GENERALMENU = "GENERALMENU",
        Label1 = "Label1",
        Label2 = "Label2",
        Edit3 = "Edit3",
        Edit4 = "Edit4",
        Label5 = "Label5",
        BUTTONEV_ACTIVE_MODEL = "BUTTONEV_ACTIVE_MODEL",
        BUTTONPUOFF_ENTRY_0001 = "BUTTONPUOFF_ENTRY_0001",
        BUTTONPCUOFF_ENTRY_0001 = "BUTTONPCUOFF_ENTRY_0001",
        BUTTONGPSOFF_ENTRY_0001 = "BUTTONGPSOFF_ENTRY_0001",
        BUTTONIVIOFF_ENTRY = "BUTTONIVIOFF_ENTRY",
        BUTTONSCUOFF_ENTRY_0001 = "BUTTONSCUOFF_ENTRY_0001",
        BUTTONAFOFF_ENTRY_0001 = "BUTTONAFOFF_ENTRY_0001",
        BUTTONPDIOFFENTRY_0001 = "BUTTONPDIOFFENTRY_0001",
        BUTTONBATTERYOFFENTRY_0001 = "BUTTONBATTERYOFFENTRY_0001",
        BUTTONCHARGEROFFENTRY_0001 = "BUTTONCHARGEROFFENTRY_0001",
        btnexit = "btnexit",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit3(): FormControl {
        return this.fg.controls[MgControlName.Edit3] as FormControl;
    }

    get Edit4(): FormControl {
        return this.fg.controls[MgControlName.Edit4] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}