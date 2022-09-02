import { TITLECHANGED, AUTHORCHANGED, TAGCHANGED } from "./actionTypes";

export const titleChanged = (title) => {
  return {
    type: TITLECHANGED,
    payload: title,
  }
}

export const authorChanged = (author) => {
  return {
    type: AUTHORCHANGED,
    payload: author,
  }
}

export const tagChanged = (tag) => {
  return {
    type: TAGCHANGED,
    payload: tag,
  }
}