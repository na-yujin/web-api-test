import { getSelectors } from "@/utils/redux/selector";
import { globalStateKeyList } from "@/store/global/slice";

export const { getCount } = getSelectors("global", globalStateKeyList);
