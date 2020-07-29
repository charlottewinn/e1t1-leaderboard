import config from "../../resources/config";

export default function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Points 8/2!I11:R70"
      })
      .then(
        response => {
          const data = response.result.values;
          console.log(data);
          const interns = data || [];
          callback({
            interns
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}