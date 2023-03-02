export const getData = async ({ page, number }) => {
  const response = await fetch("./src/data.json");
  const data = await response.json();

  const pageData = []
  const start = page * number - number
  const end = start + number > data.length ? data.length : start + number

  for (let i = start; i < end; i++) {
    pageData.push(data[i])
  }

  return { data: pageData, total: data.length }
}