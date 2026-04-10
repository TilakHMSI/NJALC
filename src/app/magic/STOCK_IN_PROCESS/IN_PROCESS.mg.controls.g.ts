import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    IN_PROCESS = "IN_PROCESS",
        Label1 = "Label1",
        btnexit = "btnexit",
        Label71 = "Label71",
        Label74 = "Label74",
        Label73 = "Label73",
        Label72 = "Label72",
        Label76 = "Label76",
        Label75 = "Label75",
        V2CHASSIS_NOFrame = "V2CHASSIS_NOFrame",
        Edit65 = "Edit65",
        S5_SALES_MTOC_CODE = "S5_SALES_MTOC_CODE",
        S5_SALES_MTOC_CODE_0001 = "S5_SALES_MTOC_CODE_0001",
        S5_SALES_MTOC_CODE_0002 = "S5_SALES_MTOC_CODE_0002",
        S5_COLOR_CODE = "S5_COLOR_CODE",
        Label8 = "Label8",
        Label9 = "Label9",
        Label10 = "Label10",
        Label11 = "Label11",
        Label12 = "Label12",
        Label13 = "Label13",
        S5_AFOFF_DATE = "S5_AFOFF_DATE",
        S5_VQON_DATE_0001 = "S5_VQON_DATE_0001",
        S5_VQOFF_DATE_0001 = "S5_VQOFF_DATE_0001",
        S5_RE_VQ_DATE_0001 = "S5_RE_VQ_DATE_0001",
        S5_AFOFF_DATE1 = "S5_AFOFF_DATE1",
        S5_AFOFF_TIME = "S5_AFOFF_TIME",
        S5_VQON_TIME_0001 = "S5_VQON_TIME_0001",
        S5_VQON_TIME_0002 = "S5_VQON_TIME_0002",
        S5_RE_VQ_TIME_0001 = "S5_RE_VQ_TIME_0001",
        S5_AFOFF_TIME1 = "S5_AFOFF_TIME1",
        Label29 = "Label29",
        Label30 = "Label30",
        Label51 = "Label51",
        Label28 = "Label28",
        AE_COUNT_SC = "AE_COUNT_SC",
        PDI_COUNT_SC = "PDI_COUNT_SC",
        S5_PRODLINE = "S5_PRODLINE",
        Label32 = "Label32",
        SI_COUNT_SC = "SI_COUNT_SC",
        Label37 = "Label37",
        Label38 = "Label38",
        Label41 = "Label41",
        AE_COUNT_MC = "AE_COUNT_MC",
        PDI_COUNT_MC = "PDI_COUNT_MC",
        SI_COUNT_MC = "SI_COUNT_MC",
        Label50 = "Label50",
        SI_COUNT_SC_MC = "SI_COUNT_SC_MC",
        Label55 = "Label55",
        CHASSIS_NOFrame = "CHASSIS_NOFrame",
        Label47 = "Label47",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get V2CHASSIS_NOFrame(): FormControl {
        return this.fg.controls[MgControlName.V2CHASSIS_NOFrame] as FormControl;
    }

    get Edit65(): FormControl {
        return this.fg.controls[MgControlName.Edit65] as FormControl;
    }

    get S5_SALES_MTOC_CODE(): FormControl {
        return this.fg.controls[MgControlName.S5_SALES_MTOC_CODE] as FormControl;
    }

    get S5_SALES_MTOC_CODE_0001(): FormControl {
        return this.fg.controls[MgControlName.S5_SALES_MTOC_CODE_0001] as FormControl;
    }

    get S5_SALES_MTOC_CODE_0002(): FormControl {
        return this.fg.controls[MgControlName.S5_SALES_MTOC_CODE_0002] as FormControl;
    }

    get S5_COLOR_CODE(): FormControl {
        return this.fg.controls[MgControlName.S5_COLOR_CODE] as FormControl;
    }

    get S5_AFOFF_DATE(): FormControl {
        return this.fg.controls[MgControlName.S5_AFOFF_DATE] as FormControl;
    }

    get S5_VQON_DATE_0001(): FormControl {
        return this.fg.controls[MgControlName.S5_VQON_DATE_0001] as FormControl;
    }

    get S5_VQOFF_DATE_0001(): FormControl {
        return this.fg.controls[MgControlName.S5_VQOFF_DATE_0001] as FormControl;
    }

    get S5_RE_VQ_DATE_0001(): FormControl {
        return this.fg.controls[MgControlName.S5_RE_VQ_DATE_0001] as FormControl;
    }

    get S5_AFOFF_DATE1(): FormControl {
        return this.fg.controls[MgControlName.S5_AFOFF_DATE1] as FormControl;
    }

    get S5_AFOFF_TIME(): FormControl {
        return this.fg.controls[MgControlName.S5_AFOFF_TIME] as FormControl;
    }

    get S5_VQON_TIME_0001(): FormControl {
        return this.fg.controls[MgControlName.S5_VQON_TIME_0001] as FormControl;
    }

    get S5_VQON_TIME_0002(): FormControl {
        return this.fg.controls[MgControlName.S5_VQON_TIME_0002] as FormControl;
    }

    get S5_RE_VQ_TIME_0001(): FormControl {
        return this.fg.controls[MgControlName.S5_RE_VQ_TIME_0001] as FormControl;
    }

    get S5_AFOFF_TIME1(): FormControl {
        return this.fg.controls[MgControlName.S5_AFOFF_TIME1] as FormControl;
    }

    get AE_COUNT_SC(): FormControl {
        return this.fg.controls[MgControlName.AE_COUNT_SC] as FormControl;
    }

    get PDI_COUNT_SC(): FormControl {
        return this.fg.controls[MgControlName.PDI_COUNT_SC] as FormControl;
    }

    get S5_PRODLINE(): FormControl {
        return this.fg.controls[MgControlName.S5_PRODLINE] as FormControl;
    }

    get SI_COUNT_SC(): FormControl {
        return this.fg.controls[MgControlName.SI_COUNT_SC] as FormControl;
    }

    get AE_COUNT_MC(): FormControl {
        return this.fg.controls[MgControlName.AE_COUNT_MC] as FormControl;
    }

    get PDI_COUNT_MC(): FormControl {
        return this.fg.controls[MgControlName.PDI_COUNT_MC] as FormControl;
    }

    get SI_COUNT_MC(): FormControl {
        return this.fg.controls[MgControlName.SI_COUNT_MC] as FormControl;
    }

    get SI_COUNT_SC_MC(): FormControl {
        return this.fg.controls[MgControlName.SI_COUNT_SC_MC] as FormControl;
    }

    get CHASSIS_NOFrame(): FormControl {
        return this.fg.controls[MgControlName.CHASSIS_NOFrame] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}