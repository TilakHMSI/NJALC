import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    DispatchStop = "DispatchStop",
        Label1 = "Label1",
        Edit2 = "Edit2",
        Label3 = "Label3",
        Label4 = "Label4",
        V_Mode = "V_Mode",
        Label5 = "Label5",
        r_TitleOption = "r_TitleOption",
        v_Title = "v_Title",
        v_Title_0001 = "v_Title_0001",
        V_Proeed = "V_Proeed",
        V_Exit = "V_Exit",
        btn_Close="btn_Close"
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get Edit2(): FormControl {
        return this.fg.controls[MgControlName.Edit2] as FormControl;
    }

    get V_Mode(): FormControl {
        return this.fg.controls[MgControlName.V_Mode] as FormControl;
    }

    get r_TitleOption(): FormControl {
        return this.fg.controls[MgControlName.r_TitleOption] as FormControl;
    }

    get v_Title(): FormControl {
        return this.fg.controls[MgControlName.v_Title] as FormControl;
    }

    get v_Title_0001(): FormControl {
        return this.fg.controls[MgControlName.v_Title_0001] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}