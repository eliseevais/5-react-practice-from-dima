import {reducer, StatePropsType, TOGGLE_COLLAPSED} from "./reducer";

test('collapsed should be true', () => {
  // data
  const state: StatePropsType = {
    collapsed: false
  }

  // action
  const newState = reducer(state, {type: TOGGLE_COLLAPSED})

  // expect
  expect(newState.collapsed).toBe(true)

});

test('collapsed should be false', () => {
  // data
  const state: StatePropsType = {
    collapsed: true
  }

  // action
  const newState = reducer(state, {type: TOGGLE_COLLAPSED})

  // expect
  expect(newState.collapsed).toBe(false)

});

test('test with error', () => {
  // data
  const state: StatePropsType = {
    collapsed: true
  }
  // action

  // expect
  expect(() => {
    reducer(state, {type: 'fdsfdf'})
  }).toThrowError()
});