```prettyprint
func greet(name: String, day: String) -> String {
  return "Hello \(name), today is \(day)."
}
greet("Bob", "Tuesday")

// Swift2.0
// 2つめ以降のパラメーターはデフォルトで外部パラメーター名として指定するように変更された。
func greet(name: String, day: String) -> String {
  return "Hello \(name), today is \(day)."
}
greet("Bob", day:"Tuseday")
```