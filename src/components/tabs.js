//import topics from "./mocks/data";

//const topics = ["JAVASCRIPT", "BOOTSTRAP", "TECHNOLOGY", "JQUERY", "NODE.JS"];

import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const topicsEl = document.createElement("div");
  const topic1 = document.createElement("div");
  const topic2 = document.createElement("div");
  const topic3 = document.createElement("div");
  const topic4 = document.createElement("div");
  const topic5 = document.createElement("div");

  topicsEl.classList.add("topics");
  topic1.classList.add("tab");
  topic2.classList.add("tab");
  topic3.classList.add("tab");
  topic4.classList.add("tab");
  topic5.classList.add("tab");

  topic1.textContent = topics[0];
  topic2.textContent = topics[1];
  topic3.textContent = topics[2];
  topic4.textContent = topics[3];
  topic5.textContent = topics[4];

  topicsEl.appendChild(topic1);
  topicsEl.appendChild(topic2);
  topicsEl.appendChild(topic3);
  topicsEl.appendChild(topic4);
  topicsEl.appendChild(topic5);

  return topicsEl;
};

for (let i = 0; i < topics.length; i++) {
  tabsAppender(topics[i]);

const tabsAppender = (topics) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios
    .get(`http://localhost:5000/api/topics`)
    .then((resp) => {
      document.querySelector(".topics").appendChild(Tabs(resp.data));
    })
    .catch((err) => console.error(err));
};

export { Tabs, tabsAppender };
