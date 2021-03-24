const { feedTheCat, checkFoodStock,breakfastFeeding} = require('./FeedCatFunctions')

function feedCats(isTheCatHungry, doIHaveCatFood, isItBreakfastTime) {
    console.log("Is the cat hungry")
    if(isTheCatHungry) {
       feedTheCat()
   }
    console.log("Do I have cat food")
    if(doIHaveCatFood) {
        checkFoodStock()
    }
    console.log("Is it breakfast time")
    if(isItBreakfastTime) {
        breakfastFeeding()
    }
    console.log("Done - repeat later")
}

feedCats(true,true,true,)