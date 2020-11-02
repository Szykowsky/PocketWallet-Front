import { ref, watch } from "vue";

export const useInputValidator = (startVal: string | undefined, validators: Array<Function>, onValidate: Function) => {
    const input = ref(startVal);
    const errors = ref(new Array<string>());

    watch(input, value => {
        errors.value = validators.map(validator => validator(value));
        onValidate(value);
    });
    return {
        input,
        errors
    };
};