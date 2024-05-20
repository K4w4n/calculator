import { ParametersType } from "../hooks/useParameters";

export function getParametersFromURL(): ParametersType {
    const searchParams = new URLSearchParams(window.location.search);
    const parameters: ParametersType = {};
    for (const [key, value] of Array.from(searchParams.entries())) {
        parameters[key] = value;
    }
    return parameters;
}
