/**
 * Chair ---> 3 cft
 * table ---> 10 cft
 * bed -----> 50 cft
 */
function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity*perChairWood;
    const tableTotalWood = tableQuantity*perTableWood;
    const bedTotalWood = bedQuantity*perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}
const wood = woodQuantity(0, 0, 1);
console.log('Wood needed', wood);


/*
HW: 
    Shirt price --->500
    pant price ---> 300
    Shoe price ---> 900

    Calculate total price of 5 Shirt, 3 Pant and 2 Shoe
*/