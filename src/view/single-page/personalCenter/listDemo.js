const todo_order_list = [
  { 'A': 'RES.2017814162422', 'B': 'BBOSS新增测试机器申请存储资源', 'C': '网管审批', 'D': '2017-08-16 12:06:16' },
  { 'A': 'RES.20151126142737', 'B': '申请资源', 'C': '网管审批', 'D': '2017-08-16 12:06:16' },
  { 'A': 'VERSION20191103080300003', 'B': '一级开发测试平台2019年11月版本发布', 'C': '版本计划', 'D': '2019-11-03 12:06:16' }
]
const tofinish_order_list = []
const system_notice_list = [
  { 'A': '2019-10-19', 'children': ['一级系统测试管理平台：将于2019年10月30日晚8：00上线升级，请勿进行任何操作!'] },
  { 'A': '2019-10-11', 'children': ['一级系统测试管理平台：新增物理机资源主动回收功能'] },
  { 'A': '2019-10-19', 'children': ['一级系统测试管理平台：新增IP资源到期提醒', '一级系统测试管理平台：新增IP资源到期提醒', '一级系统测试管理平台：新增IP资源到期提醒'] }
]
const resource_alarm_list = [
  { 'A': 'xhw201', 'B': '10.248.50.225', 'C': '系统瘫痪', 'D': '2019-10-18 16:13:33', 'E': '历时1m 12d 1h', 'F': '灾难告警' },
  { 'A': 'xhw367', 'B': '10.248.51.136', 'C': 'CPU使用率超过80%', 'D': '2019-10-18 16:13:33', 'E': '历时1d 1h 1m', 'F': '一般严重' },
  { 'A': 'CMIOT自动化测试_0515', 'B': '10.248.63.173', 'C': '主机10分钟内ping不通，则告警', 'D': '2019-11-04  20:11:30', 'E': '历时13h 57m 11s', 'F': '严重告警' },
  { 'A': 'xhw232', 'B': '10.248.51.1', 'C': '数据缺失超过10分钟', 'D': '2019-10-18 20:12:23', 'E': '', 'F': '普通告警' },
  { 'A': 'xhw233', 'B': '10.248.51.2', 'C': '数据缺失超过10分钟', 'D': '2019-10-18 20:12:23', 'E': '历时17d 18h 11m', 'F': '普通告警' }
]
const demand_alarm_list = [
  { 'A': '2019-11-09 需求搁置提醒', 'B': 'TESTREQ20191104140458596 | 2019年需求187：商机冲突业务功能需求-地址查询功能01 |  需求还剩2天将自动提交需求搁置申请，请注意需求处理状态！' },
  { 'A': '2019-10-19 需求上线提醒', 'B': 'TESTREQ20191104125132770 | 2019年需求189：云MAS业务资费调整需求 | 需求将于1天后上线，请注意需求处理状态！' },
  { 'A': '2019-10-11 需求搁置提醒', 'B': 'TESTREQ20191104140438041 | CR-ZQ-201909-06-S1-N1-云MAS业务资费调整需求 | 需求还剩7天将自动提交需求搁置申请，请注意需求处理状态！' },
  { 'A': '2019-10-09 需求上线提醒', 'B': 'TESTREQ20191104125132770 | 2019年需求189：云MAS业务资费调整需求 | 需求将于3天后上线，请注意需求处理状态！' },
  { 'A': '2019-10-05 需求上线提醒', 'B': 'TESTREQ20191104125132770 | 2019年需求189：云MAS业务资费调整需求 | 需求将于7天后上线，请注意需求处理状态！' }
]
const physical_columns = [
  {
    title: '序号',
    type: 'index',
    align: 'center'
  },
  {
    title: '名称',
    align: 'center',
    key: 'A'
  },
  {
    title: 'CPU',
    align: 'center',
    key: 'B'
  },
  {
    title: 'CPU使用率',
    align: 'center',
    key: 'C'
  },
  {
    title: '内存',
    align: 'center',
    key: 'D'
  },
  {
    title: '内存使用率',
    align: 'center',
    key: 'E'
  },
  {
    title: 'DISK',
    align: 'center',
    key: 'F'
  },
  {
    title: '磁盘使用率',
    align: 'center',
    key: 'G'
  },
  {
    title: 'IP',
    align: 'center',
    key: 'H'
  },
  {
    title: '责任人',
    align: 'center',
    key: 'T'
  }
]
const physical_data = [
  {
    A: 'John Brown',
    B: '4*12',
    C: '3.11%',
    D: '64G',
    E: '3.85%',
    F: '300G',
    G: '41.12%',
    H: '10.248.30.28',
    T: '熊敏娟'
  },
  {
    A: 'John Brown',
    B: '4*12',
    C: '3.11%',
    D: '64G',
    E: '3.85%',
    F: '300G',
    G: '41.12%',
    H: '10.248.30.28',
    T: '熊敏娟'
  }
]
const virtual_columns = [
  {
    title: '序号',
    type: 'index',
    align: 'center'
  },
  {
    title: '名称',
    align: 'center',
    key: 'A'
  },
  {
    title: 'IP',
    align: 'center',
    key: 'B'
  },
  {
    title: 'CPU',
    align: 'center',
    key: 'C'
  },
  {
    title: 'CPU使用率',
    align: 'center',
    key: 'D'
  },
  {
    title: '内存',
    align: 'center',
    key: 'E'
  },
  {
    title: '内存使用率',
    align: 'center',
    key: 'F'
  },
  {
    title: '云盘数量',
    align: 'center',
    key: 'G'
  },
  {
    title: '云盘容量',
    align: 'center',
    key: 'H'
  },
  {
    title: '系统盘容量',
    align: 'center',
    key: 'I'
  },
  {
    title: '磁盘使用率',
    align: 'center',
    key: 'J'
  },
  {
    title: '责任人',
    align: 'center',
    key: 'K'
  }
]
const virtual_data = [
  {
    A: 'BOSS容器化联调测试',
    B: '10.248.22.36',
    C: '4',
    D: '0.04%',
    E: '32G',
    F: '1.68%',
    G: '1',
    H: '700G',
    I: '10G',
    J: '85.00%',
    K: '熊敏娟'
  },
  {
    A: '一级能力开放平台',
    B: '10.248.22.36',
    C: '4',
    D: '0.04%',
    E: '32G',
    F: '1.68%',
    G: '1',
    H: '700G',
    I: '10G',
    J: '85.00%',
    K: '王欢'
  }
]
const demand_info_columns = [
  {
    title: '序号',
    type: 'index',
    align: 'center'
  },
  {
    title: '需求编号',
    align: 'center',
    key: 'A'
  },
  {
    title: '需求名称',
    align: 'center',
    key: 'B'
  },
  {
    title: '核算工作量',
    align: 'center',
    key: 'C'
  },
  {
    title: '文档个数',
    align: 'center',
    key: 'D'
  },
  {
    title: '计划上线时间',
    align: 'center',
    key: 'E'
  },
  {
    title: '是否已延期',
    align: 'center',
    key: 'F'
  },
  {
    title: '是否重点需求',
    align: 'center',
    key: 'G'
  },
  {
    title: '需求来源',
    align: 'center',
    key: 'H'
  },
  {
    title: '项目组',
    align: 'center',
    key: 'T'
  }
]
const demand_info_data = [
  {
    A: 'w123456789',
    B: '项目名称',
    C: '66',
    D: '66',
    E: '2019-12.12',
    F: '是',
    G: '否',
    H: '需求来源',
    T: '项目组'
  },
  {
    A: 'w123456789',
    B: '项目名称',
    C: '66',
    D: '66',
    E: '2019-12.12',
    F: '是',
    G: '否',
    H: '需求来源',
    T: '项目组'
  }
]
export default {
  todo_order_list: todo_order_list,
  tofinish_order_list: tofinish_order_list,
  system_notice_list: system_notice_list,
  resource_alarm_list: resource_alarm_list,
  demand_alarm_list: demand_alarm_list,
  physical_columns: physical_columns,
  physical_data: physical_data,
  virtual_columns: virtual_columns,
  virtual_data: virtual_data,
  demand_info_columns: demand_info_columns,
  demand_info_data: demand_info_data
}