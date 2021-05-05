const createElement = tagName => (strings, ...args) => ({
  type: tagName,
  template: strings.reduce(
    (acc, current, index) => acc + current + (args[index] || ""),
    ""
  )
})

export const div = createElement('div')
export const p = createElement('p')