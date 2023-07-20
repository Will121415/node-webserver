const http = require('http');


http.createServer((req, res) => {

    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');

    res.writeHead(200, {
        // 'Content-Type': 'text/plain'
        // 'Content-Type': 'application/json'
        'Content-Type': 'application/csv'
    });


    // const person = {
    //     id: 1,
    //     name: 'Will'
    // }

    // res.write(JSON.stringify( person ));


    res.write('id, nombre\n');
    res.write('1, Juan\n');
    res.write('2, Maria\n');
    res.write('3, Pedro\n');

    res.end();
}).listen(8080);