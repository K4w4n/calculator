import { useState } from "react";
import { getParametersFromURL } from "../util/getParametersFromURL";
import { setParametersToURL } from "../util/setParametersToURL";

export type ParametersType = { [key: string]: string };

export function useParameters(): [ParametersType, (parameters: ParametersType) => void] {

    const [parameters, setParametersState] = useState<ParametersType>(getParametersFromURL());

    function setParameters(newParameters: ParametersType) {
        setParametersToURL(newParameters);
        setParametersState(newParameters);
    }

    return [parameters, setParameters];
}