import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    PRDS024 = "PRDS024",
        Label1 = "Label1",
        Label2 = "Label2",
        Label3 = "Label3",
        V_PAMAIN = "V_PAMAIN",
        Label5 = "Label5",
        Label6 = "Label6",
        Label7 = "Label7",
        Label8 = "Label8",
        V_SENTAKU = "V_SENTAKU",
        V_PAMTO_CODE_LINK1 = "V_PAMTO_CODE_LINK1",
        V_PAMTO_CODE_LINK2 = "V_PAMTO_CODE_LINK2",
        V_PAMTO_NAME_LINK1 = "V_PAMTO_NAME_LINK1",
        V_PAMTO_NAME_LINK2 = "V_PAMTO_NAME_LINK2",
        V_PACOLOR_CODE_LINK1 = "V_PACOLOR_CODE_LINK1",
        V_PACOLOR_CODE_LINK2 = "V_PACOLOR_CODE_LINK2",
        Label12 = "Label12",
        Label16 = "Label16",
        btn_Select = "btn_Select",
        btn_Close="btn_Close"
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V_PAMAIN(): FormControl {
        return this.fg.controls[MgControlName.V_PAMAIN] as FormControl;
    }

    get V_SENTAKU(): FormControl {
        return this.fg.controls[MgControlName.V_SENTAKU] as FormControl;
    }

    get V_PAMTO_CODE_LINK1(): FormControl {
        return this.fg.controls[MgControlName.V_PAMTO_CODE_LINK1] as FormControl;
    }

    get V_PAMTO_CODE_LINK2(): FormControl {
        return this.fg.controls[MgControlName.V_PAMTO_CODE_LINK2] as FormControl;
    }

    get V_PAMTO_NAME_LINK1(): FormControl {
        return this.fg.controls[MgControlName.V_PAMTO_NAME_LINK1] as FormControl;
    }

    get V_PAMTO_NAME_LINK2(): FormControl {
        return this.fg.controls[MgControlName.V_PAMTO_NAME_LINK2] as FormControl;
    }

    get V_PACOLOR_CODE_LINK1(): FormControl {
        return this.fg.controls[MgControlName.V_PACOLOR_CODE_LINK1] as FormControl;
    }

    get V_PACOLOR_CODE_LINK2(): FormControl {
        return this.fg.controls[MgControlName.V_PACOLOR_CODE_LINK2] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}