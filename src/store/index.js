import _ from 'lodash';
import rules from '../config/formRules';

const state = {
  token: false,
  client: 'web',
  isLoading: false,
  leftMainMenus: {
    "first": [0, 1, 2],
    "second": [0]
  },
  subLeftMeuns: [],

  rules: _.defaultsDeep({}, rules),
  userInfo: {},

  //router path
  indexUrl: '',
  routerPath: {},

  // 系统变量
  envPath: '',
};

const mutations = {
  //todo 暂时未启用  用于左侧菜单在状态中的存储
  setMenusStatus(state, setObj) {
    let first = state["leftMainMenus"]["first"];
    let second = state["leftMainMenus"]["second"];
    first = setObj["first"];
    second = setObj["second"];
  },
  setInitRules(state) {
    state["rules"] = _.defaultsDeep({}, rules);
  },


  /**
   * 登录后设置后台返回的Token
   * @param state  {} 状态对象
   *
   * @param token string  server返回的Token
   */
  setToken(state, token) {
    state.token = token;
    if (!state.token) {
      state["userInfo"] = {};
    }
  },
  setFullLoading(state, flag) {
    state.isLoading = flag;
  },


  /**
   * 设置路由默认首页地址
   * @param state  {} 状态对象
   *
   * @param index string "/index/manage"
   */
  setIndexUrl(state, index) {
    state.indexUrl = index;
  },


  //设置账户登录信息(账户\角色信息)
  setUserInfo(state, $vue) {
    let options = {
      ajaxSuccess: (res) => {
        state["userInfo"] = res.data;
      },
      errorTitle: '获取用户信息失败!',
      ajaxParams: {
        url: '/user/getUserInfo'
      }
    };
    //todo 因为接口还未写完，先用假数据
    $vue.ajax(options);
  },

  /**
   * 设置server返回的所有路由地址信息
   * @param state  {} 状态对象
   *
   * @param pathObj {"/index/manage":"/index/manage",.....}
   */

  setRouterPath(state, pathObj) {
    state.routerPath = pathObj;
  },

  // 设置系统变量（登录成功后获取）
  setEnvPath(state, $vue) {
    // state.envPath = path
    let options = {
      ajaxSuccess: (res) => {
        state.envPath = res.data;
      },
      errorTitle: '获取系统常量失败!',
      ajaxParams: {
        url: '/envs'
      }
    };
    $vue.ajax(options);
  }
};

const getters = {
  getMenusStatus: state => {
    return state["leftMainMenus"]
  },
  getToken: state => {
    return state.token;
  },
  getClient: state => {
    return state.client;
  },
  getUserInfo: state => {
    return state.userInfo;
  },
  getIndexUrl: state => {
    return state.indexUrl;
  },
  getRouterPath: state => {
    return state.routerPath;
  },
  getEnvPath: state => {
    return state.envPath
  },
  getFullLoading: state => {
    return state.isLoading;
  },
}

const actions = {
  onLoading(context, flag) {
    context.commit("setFullLoading", flag);
  }
}

export {
  state,
  mutations,
  getters,
  actions
};
