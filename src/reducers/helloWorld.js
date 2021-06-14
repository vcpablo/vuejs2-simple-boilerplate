import { toUpper } from 'lodash/fp'

const parseMessage = (msg) => toUpper(msg)

export { parseMessage }
