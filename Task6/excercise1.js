const PrintName = async (name) => {
    await sleep(5000)
    console.log("Waited 5s");
    console.log(`The name received is: ${name}`);
  };

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

PrintName('Diego')


