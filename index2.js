// Wacht tot de DOM volledig is geladen
document.addEventListener('DOMContentLoaded', () => {
    
    // Selecteer alle elementen met de class 'letter'
    const letters = document.querySelectorAll('.letter');



    letters.forEach(letter => {
        // Wat gebeurt er als de muis eroverheen gaat
        letter.addEventListener('mouseover', () => {
            console.log('mouseover');
            letter.style.animation = 'hazeIn 3s';
                $letterID = Number(letter.id);
                    console.log($letterID);
                $letterNa = $letterID + 1;
                $letterVoor = $letterID - 1;
                console.log($letterNa, $letterVoor);

                // // 3. Selecteer de buur-elementen via hun ID
                // const buurNa = document.getElementById($letterNa.toString());
                // const buurVoor = document.getElementById($letterVoor.toString());

                // // Voorbeeld: Geef de buren ook een kleurtje (als ze bestaan)
                // letter.style.color = 'red'; // De letter zelf
                // if (buurNa) buurNa.style.animation = 'hazeInSmall 3s';
                // if (buurVoor) buurVoor.style.animation = 'hazeInSmall 3s';

        });

        // letter.addEventListener('mouseenter', () => {
        //     console.log('mouseenter');
        //     letter.style.animation = 'hazeOn'; // Maak het vloeiend
        // });

        // Wat gebeurt er als de muis het element verlaat
            letter.addEventListener('mouseout', () => {
            letter.style.animation = 'hazeOut 5s';


        });
    });

});