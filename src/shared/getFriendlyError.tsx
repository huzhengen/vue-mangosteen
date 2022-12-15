const map: Record<string, string> = {
  "is invalid": "is invalid",
  "can't be blank": "can't be blank"
}

export const getFriendlyError = (error: string) => {
  return map[error] || error
}