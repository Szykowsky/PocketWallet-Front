import store from '.';

export const dispatch = (action: string, payload: any = null) => {
    payload !== null ? store.dispatch(action, payload) : store.dispatch(action);
};