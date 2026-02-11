import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    SALESMTOCODEENTRY = "SALESMTOCODEENTRY",
        ENTRY_MODE_V = "ENTRY_MODE_V",
        SALES_MTO_2_1_V = "SALES_MTO_2_1_V",
        SALES_MTO_1_111_V = "SALES_MTO_1_111_V",
        SALES_MTO_2_2_V = "SALES_MTO_2_2_V",
        SALES_MTO_2_3_V = "SALES_MTO_2_3_V",
        SALES_MTO_2_4_V = "SALES_MTO_2_4_V",
        Label5 = "Label5",
        SALES_MTO_2_5_V = "SALES_MTO_2_5_V",
        SALES_MTO_2_6_V = "SALES_MTO_2_6_V",
        SALES_MTO_2_7_V = "SALES_MTO_2_7_V",
        SALES_MTO_1_24_V = "SALES_MTO_1_24_V",
        SALES_MTO_2_8_V = "SALES_MTO_2_8_V",
        SALES_MTO_2_9_V = "SALES_MTO_2_9_V",
        Label6 = "Label6",
        SALES_MTO_2_10_V = "SALES_MTO_2_10_V",
        SALES_MTO_1_33_V = "SALES_MTO_1_33_V",
        SALES_MTO_2_11_V = "SALES_MTO_2_11_V",
        SALES_MTO_2_12_V = "SALES_MTO_2_12_V",
        SALES_MTO_2_13_V = "SALES_MTO_2_13_V",
        SALES_MTO_1_411_V = "SALES_MTO_1_411_V",
        SALES_MTO_2_14_V = "SALES_MTO_2_14_V",
        Label7 = "Label7",
        SALES_MTO_2_15_V = "SALES_MTO_2_15_V",
        SALES_MTO_2_16_V = "SALES_MTO_2_16_V",
        SALES_MTO_2_17_V = "SALES_MTO_2_17_V",
        SALES_MTO_2_18_V = "SALES_MTO_2_18_V",
        SALES_MTO_2_19_V = "SALES_MTO_2_19_V",
        Label8 = "Label8",
        SALES_MTO_2_20_V = "SALES_MTO_2_20_V",
        SALES_MTO_2_21_V = "SALES_MTO_2_21_V",
        SALES_MTO_2_22_V = "SALES_MTO_2_22_V",
        SALES_MTO_2_23_V = "SALES_MTO_2_23_V",
        SALES_MTO_2_24_V = "SALES_MTO_2_24_V",
        Label9 = "Label9",
        SALES_MTO_2_25_V = "SALES_MTO_2_25_V",
        SALES_MTO_2_26_V = "SALES_MTO_2_26_V",
        SALES_MTO_2_27_V = "SALES_MTO_2_27_V",
        SALES_MTO_2_28_V = "SALES_MTO_2_28_V",
        SALES_MTO_2_29_V = "SALES_MTO_2_29_V",
        Label10 = "Label10",
        SALES_MTO_2_30_V = "SALES_MTO_2_30_V",
        SALES_MTO_2_31_V = "SALES_MTO_2_31_V",
        SALES_MTO_2_32_V = "SALES_MTO_2_32_V",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get ENTRY_MODE_V(): FormControl {
        return this.fg.controls[MgControlName.ENTRY_MODE_V] as FormControl;
    }

    get SALES_MTO_2_1_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_1_V] as FormControl;
    }

    get SALES_MTO_1_111_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_1_111_V] as FormControl;
    }

    get SALES_MTO_2_2_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_2_V] as FormControl;
    }

    get SALES_MTO_2_3_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_3_V] as FormControl;
    }

    get SALES_MTO_2_4_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_4_V] as FormControl;
    }

    get SALES_MTO_2_5_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_5_V] as FormControl;
    }

    get SALES_MTO_2_6_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_6_V] as FormControl;
    }

    get SALES_MTO_2_7_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_7_V] as FormControl;
    }

    get SALES_MTO_1_24_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_1_24_V] as FormControl;
    }

    get SALES_MTO_2_8_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_8_V] as FormControl;
    }

    get SALES_MTO_2_9_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_9_V] as FormControl;
    }

    get SALES_MTO_2_10_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_10_V] as FormControl;
    }

    get SALES_MTO_1_33_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_1_33_V] as FormControl;
    }

    get SALES_MTO_2_11_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_11_V] as FormControl;
    }

    get SALES_MTO_2_12_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_12_V] as FormControl;
    }

    get SALES_MTO_2_13_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_13_V] as FormControl;
    }

    get SALES_MTO_1_411_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_1_411_V] as FormControl;
    }

    get SALES_MTO_2_14_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_14_V] as FormControl;
    }

    get SALES_MTO_2_15_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_15_V] as FormControl;
    }

    get SALES_MTO_2_16_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_16_V] as FormControl;
    }

    get SALES_MTO_2_17_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_17_V] as FormControl;
    }

    get SALES_MTO_2_18_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_18_V] as FormControl;
    }

    get SALES_MTO_2_19_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_19_V] as FormControl;
    }

    get SALES_MTO_2_20_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_20_V] as FormControl;
    }

    get SALES_MTO_2_21_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_21_V] as FormControl;
    }

    get SALES_MTO_2_22_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_22_V] as FormControl;
    }

    get SALES_MTO_2_23_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_23_V] as FormControl;
    }

    get SALES_MTO_2_24_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_24_V] as FormControl;
    }

    get SALES_MTO_2_25_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_25_V] as FormControl;
    }

    get SALES_MTO_2_26_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_26_V] as FormControl;
    }

    get SALES_MTO_2_27_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_27_V] as FormControl;
    }

    get SALES_MTO_2_28_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_28_V] as FormControl;
    }

    get SALES_MTO_2_29_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_29_V] as FormControl;
    }

    get SALES_MTO_2_30_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_30_V] as FormControl;
    }

    get SALES_MTO_2_31_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_31_V] as FormControl;
    }

    get SALES_MTO_2_32_V(): FormControl {
        return this.fg.controls[MgControlName.SALES_MTO_2_32_V] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}