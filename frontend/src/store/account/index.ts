import actions from './actions';
import { mutations } from './mutations';
import { AccountStateT } from './types';

const state: AccountStateT = {
  balance: '',
  balanceTokenName: '',
  demoPrintValue: '',
  isLoading: false,
}

export default {
  state,
  actions,
  mutations,
};
