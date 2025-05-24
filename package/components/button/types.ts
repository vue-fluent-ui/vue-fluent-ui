export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonHtmlType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  /**
   * 按钮的样式变体
   * @default 'primary'
   */
  variant?: ButtonVariant;
  
  /**
   * 按钮的尺寸
   * @default 'medium'
   */
  size?: ButtonSize;
  
  /**
   * 是否禁用按钮
   * @default false
   */
  disabled?: boolean;
  
  /**
   * 是否将按钮宽度设置为其父容器的宽度
   * @default false
   */
  block?: boolean;
  
  /**
   * 原生button元素的type属性
   * @default 'button'
   */
  htmlType?: ButtonHtmlType;
}

export interface ButtonEmits {
  /**
   * 点击按钮时触发
   */
  click: (event: MouseEvent) => void;
}
