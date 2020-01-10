function isBalanced(string) {
  let stack = new Array()
  for (const bracket of string) {
    if (bracket === "[" || bracket === "{" || bracket === "(") {
      stack.push(bracket)
    } else if (bracket === "]") {
      if (stack[stack.length - 1] === "[") {
        stack.pop()
      } else {
        return false
      }
    } else if (bracket === "}") {
      if (stack[stack.length - 1] === "{") {
        stack.pop()
      } else {
        return false
      }
    } else if (bracket === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop()
      } else {
        return false
      }
    }
  }
  if (stack.length === 0) {
    return true
  } else {
    return false
  }
}
