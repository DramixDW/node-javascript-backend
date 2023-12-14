process.stdin.on('data', (data) => {
    console.log('Vous avez entré:' + data.toString());
    process.exit()
});

process.on('exit', () => {
    console.log('test');
});

process.on('SIGINT', () => {
    console.log('On a réussi à hijacké le control + c');
    process.exit();
});