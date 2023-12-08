function myPromiseSumFunction (nbr1: number, nbr2: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (nbr1 + nbr2 < 0) {
                reject("🍌");
            }
            resolve(nbr1 + nbr2);
        })   
    })
}

//le .then reçoit l'argument envoyé en resolve
// comme argument
myPromiseSumFunction(-1 , 5)
.then((result: unknown) => {
    console.log(`Le résultat de l'addition est ${result}`)
    return myPromiseSumFunction(result as number, 10); 
})
.then((result: unknown) => {
    console.log(`Le résultat de l'addition est ${result}`)
    return myPromiseSumFunction(result as number, 10); 
})
.then((result: unknown) => {
    console.log(`Le résultat de l'addition est ${result}`)
    return myPromiseSumFunction(result as number, -1000); 
})
.catch(err => {
    console.log(err);
})