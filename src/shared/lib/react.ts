/* eslint-disable @typescript-eslint/no-explicit-any */
import { useActionState as useActionStateReact } from "react";

export function useActionState<State, initialState>(
  action: (state: Awaited<State>) => State | Promise<State>,
  initialState: initialState,
  permalink?: string,
): [
  state: Awaited<State> | initialState,
  dispatch: () => void,
  isPending: boolean,
];
export function useActionState<State, initialState, Payload>(
  action: (state: Awaited<State>, payload: Payload) => State | Promise<State>,
  initialState: initialState,
  permalink?: string,
): [
  state: Awaited<State> | initialState,
  dispatch: (payload: Payload) => void,
  isPending: boolean,
];


export function useActionState(
    action: any,
    initialState: any,
    permalink?: string
) {
    return useActionStateReact(action, initialState, permalink)
}