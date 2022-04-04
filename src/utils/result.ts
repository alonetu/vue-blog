interface Result<T> {
  code: number,
  message: string,
  data: Array<T>
}
export default Result