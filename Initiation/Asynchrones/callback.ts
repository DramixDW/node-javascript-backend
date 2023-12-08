// Afficher une banane
// console.log('ba'+(+'a')+'a');
// console.log(('Na'+(+'a')+'a'+(+'a')+'a'+(+'a')+'a' + 'BATMAAAAAAAAAANeuh').replaceAll('Na', 'sodium'));
type Err = Error;
function myCallBackSumFunction(nbr1: number, nbr2: number, callback: (err: Error | null, result?: number) => void) {
    setTimeout(() => {
        if (nbr1 + nbr2 < 0) {
            return callback(new Error("🍌"));
        } 
        callback(null, nbr1 + nbr2);
    }, 1000)
}

myCallBackSumFunction(
    1,
    -5,
    (err: Error | null, resultFromFunction?: number) => {
        if (err) {
            return console.error(err);
        }
        console.log(`Le résultat de l'addition 1 est ${resultFromFunction}`);
    }    
)

myCallBackSumFunction(
    4,
    2,
    (err: Error | null, resultFromFunction?: number) => {
        if (err) {
            return console.error(err);
        }
        console.log(`Le résultat de l'addition 2 est ${resultFromFunction}`);
    }    
)

myCallBackSumFunction(
    2,
    5,
    (err: Error | null, resultFromFunction?: number) => {
        if (err) {
            return console.error(err);
        }
        console.log(`Le résultat de l'addition 3 est ${resultFromFunction}`);

        return myCallBackSumFunction(
          resultFromFunction as number,
          10,
          (err: Error | null, resultFromFunction?: number) => {
            if (err) {
              return console.error(err);
            }
            console.log(
              `Le résultat de l'addition 2 est ${resultFromFunction}`
            );

            return myCallBackSumFunction(
                resultFromFunction as number,
                 -1000,
                (err: Error | null, resultFromFunction?: number) => {
                    if (err) {
                        return console.error(err);
                    }
                    console.log(`Le résultat de l'addition 2 est ${resultFromFunction}`);
                }    
            )
          }
        );
    }    
)