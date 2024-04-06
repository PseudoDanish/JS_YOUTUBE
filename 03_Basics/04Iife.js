// Immediately Invoked Function Expression = IIFE
// IIFe Is used bcoz -To remove the global scope pullution affecting our definitions and variables in our funcitons
(function chai(){
    // Named IIFE
    console.log('DB CONNECTED');
})();


((name)=>{
    // Parametered IIFE, Unnamed IIFE, Arrowed IIFE
    console.log(`${name} is Pagaal`);
})("Muski")
