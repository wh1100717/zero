const types = {
  SYNC_EDITOR: 'SYNC_Editor'
}

export function syncEditor (index, markdownType, value) {
  return {
    type: types.SYNC_EDITOR,
    index,
    markdownType,
    value
  }
}