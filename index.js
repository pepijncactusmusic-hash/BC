// Wacht tot de DOM volledig is geladen
document.addEventListener('DOMContentLoaded', () => {
    
    // Selecteer alle elementen met de class 'letter'
    const letters = document.querySelectorAll('.letter');

    letters.forEach(letter => {

        $letterID = Number(letter.id /20);
        console.log($letterID);
        
        letter.style.animation = 'hazeInOut 4s';
        letter.style.animationIterationCount = 'infinite';
        letter.style.animationDelay = `${$letterID}s`;
                    

        // Wat gebeurt er als de muis eroverheen gaat
        // letter.addEventListener('mouseover', () => {
        //     console.log('mouseover');
        //     letter.style.animation = 'hazeIn 3s';
        // });
        
        // // Wat gebeurt er als de muis het element verlaat
        //     letter.addEventListener('mouseout', () => {
        //     letter.style.animation = 'hazeOut 5s';


        // });
    });

});