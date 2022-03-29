function prime_number(n) {
    let m = [];    
    for (let i=1; n > m.length; i++) {
        prime = true;        
        for (let j = 1; j < m.length; j++) {                       
            if (i % m[j] == 0) {                
                prime = false;
                break;
            }    
        }
        if (prime) {            
            m.push(i);
        }
    }
    return m;
}

console.log(prime_number(process.argv[2]));