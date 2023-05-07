import fs from 'fs';

fs.readFile('orderNumber.txt', function (err, data) {
    if (err) throw err;
    const originalInt = parseInt(data);
    const newInt = originalInt + 1;
    var newIntToString = String(newInt);
    fs.writeFile('orderNumber.txt', newIntToString, function (err, data) {
        if (err) throw err;
        else {
            console.log("Value updated");
        }
    });
});
