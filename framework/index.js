import { div } from './element'

export const init = (selector, component) => {
  const app = document.querySelector(selector)
  const newElement = document.createElement(component.type)
  const newTextContent = document.createTextNode(component.template)
  newElement.append(newTextContent)
  app.append(newElement)
}

const firstName = "Marvin";
const lastName = "Frachet";

init("#app", div`Hello ${firstName} ${lastName}`);