import { div } from '../framework/element'

export const User = ({firstName, lastName}) => {
  return div`Hello ${firstName} ${lastName}`;
}