class Pizza{
    ingredients=[];
    cook = async function(){
    await sleep(5000)
    console.log("The pizza is ready");
    }
    constructor(){
     

    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let p=new Pizza()
p.ingredients.push('tomate')
p.ingredients.push('queso')
p.ingredients.push('harina')
p.cook()