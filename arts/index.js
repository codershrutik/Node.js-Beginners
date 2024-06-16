const figlet = require('figlet');

figlet('HELLO WORLD',function(err, data){
    if(err){
        console.log('Something went wrong');
        console.dir(err);
        return;
    }
    console.log(data);
});