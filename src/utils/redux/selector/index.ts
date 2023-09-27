import { capitalize } from "@/utils/string";
import { RootState } from "@/store/types";

export function getStateKeyList<State extends {}>(state: State) {
  return Object.keys(state) as (keyof State)[];
}

type GetSelectorsReturnType<
  StateKey extends keyof RootState,
  State = RootState[StateKey],
> = {
  [k in keyof State as `get${Capitalize<k & string>}`]: (
    state: RootState,
  ) => State[k];
};

export function getSelectors<
  StateKey extends keyof RootState,
  State extends RootState[StateKey],
>(stateKey: StateKey, stateKeyList: (keyof State)[]) {
  return stateKeyList.reduce(
    (prev, cur) => ({
      ...prev,
      [`get${capitalize(cur.toString())}`]: (state: RootState) => {
        const selectState: State = state[stateKey] as State;
        return selectState![cur];
      },
    }),
    {} as GetSelectorsReturnType<StateKey>,
  );
}
