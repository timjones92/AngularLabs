module.exports = function(http) {

    // Starts the server
    let server = http.listen(3000, function() {
        let host = server.address().address;
        let port = server.address().port;
        var d = new Date();
        var n = d.getHours();
        var m = d.getMinutes();
        console.log("Server has been started at: " + n + ':' + m)
        console.log("Server listening on: " + host + "port: " + port);
    });
}