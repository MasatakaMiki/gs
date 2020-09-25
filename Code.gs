function create_insert() {
  var columnRowIndex = 1;
  var typeRowIndex = 2;
  var firstValuesRowIndex = typeRowIndex + 1;
  var range = SpreadsheetApp.getActiveRange();
  var cells = range.getValues();
  var numRows = range.getNumRows();
  var numColumns = range.getNumColumns();

  var tableName = cells[0][0];

  var columnNames = [];
  for (var i = 0; i < numColumns; i++) {
    columnNames.push(cells[columnRowIndex][i]);
  }
  var types = [];
  for (var i = 0; i < numColumns; i++) {
    types.push(cells[typeRowIndex][i]);
  }
  
  var createTable = "CREATE TABLE " + tableName + " (";
  for (var j = 0; j < numColumns; j++) {
    if (j != 0) {
      createTable += ",";
    }
    createTable += columnNames[j] + " " + types[j];
  }
  createTable += ");";
  
  var prefix = "INSERT INTO " + tableName + " (" + columnNames.join(",") + ") VALUES (";

  var newSheet = range.getSheet().getParent().insertSheet();
  var targetCell = newSheet.getActiveCell();

  // create table
  targetCell.setValue(createTable);
  targetCell = targetCell.offset(1, 0);

  // insert into
  for (var i = firstValuesRowIndex; i < numRows; i++) {
    var values = [];
    for (var j = 0; j < numColumns; j++) {
      if (!cells[i][j]) {
        values.push('null');
      } else if (types[j] == 'varchar(255)') {
        values.push("'" + cells[i][j] + "'");
      } else if (types[j] == 'date') {
        values.push("'" + Utilities.formatDate(cells[i][j], "Asia/Tokyo", "yyyy/MM/dd") + "'");
      } else if (types[j] == 'datetime') {
        values.push("'" + Utilities.formatDate(cells[i][j], "Asia/Tokyo", "yyyy/MM/dd HH:mm:ss") + "'");
      } else {
        values.push(cells[i][j]);
      }
    }
    targetCell.setValue(prefix + values.join(",") + "); ");
    targetCell = targetCell.offset(1, 0);
  }
  console.log('done!');
}
