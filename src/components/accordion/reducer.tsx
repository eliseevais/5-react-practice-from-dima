export type ActionPropsType = {
  type: string
};

export type StatePropsType = {
  collapsed: boolean
}
export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'
export const reducer = (state: StatePropsType, action: ActionPropsType): StatePropsType => {
  switch (action.type) {
    case TOGGLE_COLLAPSED:
      return {
        ...state,
        collapsed: !state.collapsed
      };
    default:
      throw new Error('Bad action type');
  }
  return state;
};