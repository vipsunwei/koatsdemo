const baseURL = import.meta.env.VITE_API_BASE_URL

export interface HomeItem {
  image: string
  text: string
}

export const home = async () => {
  const url = baseURL + '/'
  let result: HomeItem[] = []
  try {
    result = await fetch(url).then((res) => res.json())
    result = result.map((r) => ({
      ...r,
      image: `${baseURL}/images/${r.image}`,
    }))
  } catch (error) {}
  return result
}
