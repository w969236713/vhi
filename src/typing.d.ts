//声明在window上的自定义属性
declare interface Window {}

//声明vue 文件
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, any>
  export default component
}

declare global {
  declare type Recordable<T = any> = Record<string, T>
}
