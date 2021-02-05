/**
 * 用户登陆类型
 */
export interface UserInfo {
  username: string;
  password: string;
}

/**
 * 用户信息验证
 */
export interface RulesUserInfo {
  username?: RulesType[];
  password?: RulesType[];
}

/**
 * 验证规则类型
 */
export interface RulesType {
  required?: boolean;
  min?: number;
  max?: number;
  message?: string;
  enum?: string;
  len?: number;
  trigger?: 'blur' | 'change' | ['change', 'blur'];
  pattern?: RegExp;
  type?: string;
  field?: string;
  fullField?: string;
  validator?: (rule: RulesType, value: string, callback: () => void) => Promise<void>;
  whitespace?: boolean;
}

/**
 * 菜单参数类型
 */
export interface MenuItem {
  domEvent: MouseEvent;
  key: string;
  item: object;
  keyPath: string[];
}

export interface MenuKeys {
  selectedKeys: string[];
  openKeys: string[];
}

/**
 * chart初始化参数类型
 */
export interface ChartOption {
  title?: object;
  legend?: object;
  grid?: object;
  xAxis?: {};
  yAxis?: {};
  radiusAxis?: object;
  angleAxis?: object;
  radar?: object;
  dataZoom?: object[];
  visualMap?: object[];
  axisPointer?: object;
  tooltip?: object;
  toolbox?: object;
  brush?: object;
  geo?: object;
  parallel?: object;
  parallelAxis?: object;
  singleAxis?: object;
  timeline?: object;
  graphic?: object;
  calendar?: object;
  dataset?: object;
  aria?: object;
  series?: object[];
  darkMode?: string;
  color?: string[];
  backgroundColor?: string;
  textStyle?: object;
  animation?: boolean;
  animationThreshold?: number;
  animationDuration?: number;
  animationEasing?: string;
  animationDelay?: number;
  animationDurationUpdate?: number;
  animationEasingUpdate?: string;
  animationDelayUpdate?: number;
  stateAnimation?: object;
  blendMode?: string;
  hoverLayerThreshold?: number;
  useUTC?: boolean;
  options?: ChartOption[];
  media?: object[];
}

