const storeData = async (name, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await localStorage.setItem(name, jsonValue)
  } catch (e) {
    // saving error
  }
}

const getData = async (name) => {
  try {
    const value = await localStorage.getItem(name)
    if (value !== null) {
      return JSON.parse(value)
    }
  } catch (e) {
    // error reading value
  }
}

export { storeData, getData }
