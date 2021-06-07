import { ActionContext, ActionTree, MutationTree, GetterTree } from 'vuex';

export type User = {
  name: '';
  email: '';
  id: '';
  role: '';
  from_name: '';
  from_email: '';
};

export type UserLoginPayload = {
  email: '',
  password: ''
}

export interface IState {
  isLoading: boolean;
  isLoggedIn: boolean;
  user: User;
};

export interface IGetters extends GetterTree<IState, IState> {
  getUser(): User;
  isLoggedIn(): boolean;
  isLoading(): boolean;
};

export interface IMutations extends MutationTree<IState> {
  SET_USER(state: IState, payload: User): void;
};

export interface IActions extends ActionTree<IState, IState> {
  login(ctx: ActionContext<IState, IState>, payload?: UserLoginPayload): Promise<UserLoginPayload>;
  register(ctx: ActionContext<IState, IState>, payload?: UserLoginPayload): Promise<UserLoginPayload>;
};
