const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Enter No', n => {
    // For the first loop: i =0 ; n =5
    for (var i =0; i < n;i++){
        // For the inner first loop: j = 5-0 = 5; 5>1
        // 5 4 3 2 
        //" "
        // 5 4 3
        // 5 4
        for (var j=n-i;j>1;j--){
            process.stdout.write(" ")
        }
        // " * *"
        // " * * *"
        for (var j=0;j<=i;j++){
            process.stdout.write(" *")
        }
        process.stdout.write('\n')
    }
    readline.close();
  });