const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

/*
alice1.animate(aliceTumbling, aliceTiming);
alice2.animate(aliceTumbling, aliceTiming);
alice3.animate(aliceTumbling, aliceTiming);
*/


// async and await version
async function sequencingAnimations() {
  try {
    const animate1 = await alice1.animate(aliceTumbling, aliceTiming).finished;
    const animate2 = await alice2.animate(aliceTumbling, aliceTiming).finished;
    const animate3 = alice3.animate(aliceTumbling, aliceTiming)
  }

  catch(error) {
    console.error(`here is the error ${error}`);
  }
}
sequencingAnimations();


// promise chain version
/*
const sequencingAnimations = alice1.animate(aliceTumbling, aliceTiming);

sequencingAnimations.finished
  .then(() =>alice2.animate(aliceTumbling, aliceTiming).finished)
  .then(() => alice3.animate(aliceTumbling, aliceTiming))
  .catch((error) => {
    console.log(`here is error ${error}`)
  }); 
*/


// callback hell version
/*

function sequencingAnimations() {
  alice1.animate(aliceTumbling, aliceTiming).finished
    .then(() =>
      alice2.animate(aliceTumbling, aliceTiming).finished
        .then(() => alice3.animate(aliceTumbling, aliceTiming)
      )
    )
}

sequencingAnimations();
*/

