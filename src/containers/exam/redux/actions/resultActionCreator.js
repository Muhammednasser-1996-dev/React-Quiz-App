import { RESULT, CLEARRESULT } from '../types'

export const storeResults = (ResultState) => (
    console.log(">> action", ResultState),

    {
        type: RESULT,
        ResultState,
    }
);
export const restoreResults = (resultsData) => (
    {
        type: CLEARRESULT,
        resultsData,
    }
);