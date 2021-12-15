export {}
declare global {
  type Data<T = any> = {
    [key: string]: T
  }
}
