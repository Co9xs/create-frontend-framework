import { div } from '../framework/element'
import { onClick } from '../framework/event'

export const User = ({firstName, lastName}) => {
  return div`${onClick(() => alert(firstName))} Hello ${firstName} ${lastName}`;
}