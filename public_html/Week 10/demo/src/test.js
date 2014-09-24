

function hello(){
    return 'hello';
}

function addTen( amt ) {
    return amt + 10;
}

function percent( amt ) {
    return amt / 100 + '%';
}

function dollar( amt ) {
    amt = amt.replace("$", '');
    return parseInt(amt,10);
}