const createElement = tagName => (strings, ...args) => ({
  type: tagName,
  template: strings.reduce(
    (acc, current, index) => acc + current + (args[index] || ""),
    ""
  )
})

const div = createElement('div')
const p = createElement('p')

const firstName = "Marvin"
const lastName = "Frachet"

const template = p`Hello ${firstName} ${lastName} !`
console.log(template);