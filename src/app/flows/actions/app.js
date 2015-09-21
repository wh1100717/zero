import * as types from '../ActionTypes'

export function syncEditor (index, markdownType, value) {
  return {
    type: types.SYNC_EDITOR,
    index,
    markdownType,
    value
  }
}