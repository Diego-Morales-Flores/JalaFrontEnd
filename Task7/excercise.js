class Pizza {
    ingredients = [];
  
    cook = async function () {
      await sleep(6000);
      console.log("The pizza is ready");
    };

    addIngredients = async function(ingredient){
        return new Promise((resolve)=>{
            console.log("Adding... ", ingredient);
            resolve(ingredient);})
            .then(() => sleep(1000).then(() => this.ingredients.push(ingredient) ))
            .then(() => console.log("The " + ingredient + " was added"))
        }
    
    }
function pushing(item){
this.ingredient.push(item)
} 
function sleep(ms) {
return new Promise((resolve) => setTimeout(resolve, ms));
}
  
  let p = new Pizza();
  const callTasks = () => p.addIngredients("tomate")
  .then(() => sleep(1000).then(() => { p.addIngredients("queso") }))
  .then(() => sleep(1000).then(() => { p.addIngredients("harina") }))
  .then(() => sleep(1000).then(() => { p.addIngredients("pollo") }))
  .catch(console.error);
  callTasks();
  p.cook().finally(()=>console.log(p.ingredients));
