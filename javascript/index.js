// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  1,
  (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  2,
  (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  3,
  (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  4,
  (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  },
  (error) => console.log(error)
); */

// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step5}</li>`;
        });
      });
    });
  });
});
// ...

// Iteration 2 - using promises

obtainInstruction("steak", 0).then((step1) => {
  document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
  console.log(step1);
  return obtainInstruction(step1);
});
obtainInstruction("steak", 1).then((step2) => {
  document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
  console.log(step2);
  return obtainInstruction(step2);
});
obtainInstruction("steak", 2).then((step3) => {
  document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
  console.log(step3);
  return obtainInstruction(step3);
});
obtainInstruction("steak", 3).then((step4) => {
  document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
  console.log(step4);
  return obtainInstruction(step4);
});
obtainInstruction("steak", 4).then((step5) => {
  document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
  console.log(step5);
  return obtainInstruction(step5);
});
obtainInstruction("steak", 5).then((step6) => {
  document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
  console.log(step6);
  return obtainInstruction(step6);
});
obtainInstruction("steak", 6).then((step7) => {
  document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
  console.log(step7);
  return obtainInstruction(step7);
});
obtainInstruction("steak", 7)
  .then((step8) => {
    document.querySelector("#steak").innerHTML += `<li>${step8}</li>`;
    console.log(step8);
    return obtainInstruction(step8);
  })
  .catch(() => console.error("Something went wrong"));

// ... Your code here
// ...

// Iteration 3 using async/await
async function makeBroccoli() {
  try {
    let step1 = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    let step2 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    let step3 = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    let step4 = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    let step5 = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
    let step6 = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
    let step7 = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`;

    console.log("Broccoli Finished!");
  } catch (err) {
    console.log(err);
  }
}

makeBroccoli();
// ...

// Bonus 2 - Promise all
// ...
