import { ActionContext, ActionTree, MutationTree, GetterTree } from 'vuex';

export type User = {
  displayName: '';
  email: '';
  emailVerified: boolean;
  uid: '';
};

export type UserLoginPayload = {
  email: '',
  password: ''
}

export interface IState {
  isLoading: boolean;
  isLoggedIn: boolean;
  user: User;
  user_id: string;
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
