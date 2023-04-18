const baseURL = import.meta.env.VITE_API_BASE_URL

export interface User {
  name: string
  age: number
}

export const users = async () => {
  const url = baseURL + '/users'

  let result: User[] = []
  try {
    result = await fetch(url).then((r) => r.json())
  } catch (error) {}

  return result
}
