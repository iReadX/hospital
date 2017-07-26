/**
 * Created by Administrator on 2017/7/24.
 */

const api = {
  rulesgetGet: {//细则-查看-第一步 科室周期设置
    path :  '/rotaryBasis/rulesTraining/rulesget/',//{rtId}
    method : 'get'
  },

  rulesDepRequirementAddOrEdit: {//第二步-添加或修改科室指标
    path :  '/rotaryBasis/rulesTraining/rulesDepRequirementAddOrEdit/',//{rtId}-{rdId}
    method : 'post'
  },

  rulesAddOrEdit: {//添加-第一步-设置周期
    path :  '/rotaryBasis/rulesTraining/rulesAddOrEdit',//
    method : 'post'
  },
  rulesgetPageList: {//细则分页列表
    path :  '/rotaryBasis/rulesTraining/rulesget/pageList',//
    method : 'get'
  },
  rulesgetList: {//细则集合
    path :  '/rotaryBasis/rulesTraining/rulesget/list',//
    method : 'get'
  },
  modifyRulesState: {//细则启用禁用
    path :  '/rotaryBasis/rulesTraining/modifyRulesState',//{rtId}
    method : 'put'
  },
  removeRules: {//细则删除
    path :  '/rotaryBasis/rulesTraining/removeRules',//{rtId}
    method : 'delete'
  },
  getRulesDepRequirement: {//第二步-查看科室指标
    path :  '/rotaryBasis/rulesTraining/getRulesDepRequirement/',//{rtId}-{rdId}
    method : 'get'
  },
  getRulesDep: {//第二步-查看科室指标
    path :  '/rotaryBasis/rulesTraining/getRulesDep/',//{rtId}
    method : 'get'
  },
  searhDepAndSpecialty: { //查询所有启用的科室（查询所有启用的科室，不带分页）
    path: "/hospital/dept/queryAll",
    method: 'get'
  },
  // searhDepAndSpecialty: { //查询标准科室科室（查询所有启用的科室，不带分页）
  //   path: "/criterion/dept/list",
  //   method: 'get'
  // },



  BaseManageGetList: { //基地集合
    path: "/rotaryBasis/BaseManage/getList",
    method: 'get'
  },
};

export default api

