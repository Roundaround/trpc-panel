import React from "react";
import { Control, useController } from "react-hook-form";
import { BaseSelectField } from "./base/BaseSelectField";

export function EnumField({
    name,
    control,
    options,
}: {
    name: string;
    control: Control<any>;
    options: string[];
}) {
    const { field, fieldState } = useController({
        name,
        control,
    });
    return (
        <BaseSelectField
            options={options}
            value={field.value}
            onChange={field.onChange}
            errorMessage={fieldState.error?.message}
            label={name}
        />
    );
}
