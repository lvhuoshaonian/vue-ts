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
  validator?: (rule: any, value: any, callback: () => void) => Promise<void>;
  whitespace?: boolean;
}
