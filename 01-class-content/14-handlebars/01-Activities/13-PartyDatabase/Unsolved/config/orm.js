var orm = {
    displayNames: function(whatToSelect, tableInput){
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatToSelect, tableInput], function (err, result){
            if (err) throw err;
            console.log(result);
        });
    },
    leftJoin: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol){
        var queryString = "SELECT ?? FROM ?? AS tOne";
        queryString+= "";
        queryString+= "";
    }
}