export const emailValid = value => {
  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
  if (!EMAIL_REGEXP.test(value)) return "Invalid email address"
  return undefined
}

export const required = value => {
  if (!value) return "Field is required"
  return undefined
}

export const passwordValid = value => {
  const PASSWORD_REGEXP = /^[a-z\s]+$/i
  if (!PASSWORD_REGEXP.test(value) || value?.length < 8) return "Invalid password"
  return undefined
}