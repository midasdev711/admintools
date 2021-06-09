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

export type UserProfilePayload = {
  uid: "",
  firstname: "",
  lastname: "",
  email: "",
  timezone: "",
  country: "",
  state: "",
  city: "",
  postalcode: "",
  streetaddress: "",
  countryphone: "",
  phonenumber: ""
}

export interface IState {
  user: any;
  user_id: any;
};

export interface IGetters extends GetterTree<IState, IState> {
  userId(): string;
};

export interface IMutations extends MutationTree<IState> {
  SET_USER(state: IState, payload: User): void;
};

export interface IActions extends ActionTree<IState, IState> {
  login(ctx: ActionContext<IState, IState>, payload?: UserLoginPayload): Promise<UserLoginPayload>;
  register(ctx: ActionContext<IState, IState>, payload?: UserLoginPayload): Promise<UserLoginPayload>;
  logout(ctx: ActionContext<IState, IState>): Promise<boolean>;
  setProfile(ctx: ActionContext<IState, IState>, payload?: UserProfilePayload): Promise<boolean>;
  getProfile(ctx: ActionContext<IState, IState>, uid?: string): Promise<any>;
};
