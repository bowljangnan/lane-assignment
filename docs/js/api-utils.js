function getPerfectMembers() {
  const spreadSheetUrl = 'https://sheets.googleapis.com/v4/spreadsheets/1Vh6MyPi5RFYFgmqBa7L6t3Krra2-wXaULc_5XEWoAAY/values/perfect?key=AIzaSyC7Sh_mpcpjyEcnowiGHiwfM8PZbwWHtAY'

  return fetch(spreadSheetUrl, null)
    .then((response) => response.json())
    .then((datas) => {
      const perfectMembers = []

      if (datas.values === undefined || datas.values.length === 0) {
        return perfectMembers
      }

      for (let i = 0; i < datas.values.length; i++) {
        let perfect = {};
        perfect.name = datas.values[i][0]
        perfect.date = new Date(datas.values[i][1])
        perfectMembers.push(perfect)
      }

      return perfectMembers
    })
    .catch((error) => console.log("error:", error))
}