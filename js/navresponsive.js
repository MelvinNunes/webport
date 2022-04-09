achad(7,286);

function achad(e, totiene) {
    var i = 1;
    var x;

    while (true) {
        x = e * i % totiene;
        if (x == 1) {
            document.write(i);
            break;
        }
        i++;
    }
}

