import { createGlobalState } from 'react-hooks-global-state';



const initialState = { state: false };
const { useGlobalState } = createGlobalState(initialState);

export default useGlobalState;


