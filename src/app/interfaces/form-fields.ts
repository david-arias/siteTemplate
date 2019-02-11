export interface FormFields {
     name: string;
     type: string;
     required: boolean;
     options: Array<FormFieldsOptions>;
     placeHolder: string;
     icon: string;
}
export interface FormFieldsOptions {
     name: string;
     value: string;
     label: string;
}
