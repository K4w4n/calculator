import { ParametersType } from "../hooks/useParameters";

export function setParametersToURL(newParameters: ParametersType): void {
    const searchParams = new URLSearchParams();
    for (const key in newParameters) {
        searchParams.set(key, newParameters[key]);
    }
    const newURL = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.replaceState({}, '', newURL);
}
