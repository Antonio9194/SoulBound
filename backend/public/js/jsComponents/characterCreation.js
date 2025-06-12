export function creationchar() {
  const questions = [
    {
      text: "What essence forms your soul?",
      type: "select",
      name: "sex",
      options: ["Male", "Female", "Other"]
    },
    {
      text: "Choose your Path",
      type: "select",
      name: "class",
      options: ["Mage", "Warrior"]
    },
    {
      text: "Why are you embarking on this journey?",
      type: "text",
      name: "journeyReason"
    },
    {
      text: "What is one thing in your life you want to change or heal?",
      type: "text",
      name: "lifeFix"
    },
    {
      text: "What small routines would you like to insert into your daily life?",
      type: "text",
      name: "dailyRoutines"
    },
    {
      text: "What is a deep goal you're working toward in this lifetime?",
      type: "text",
      name: "lifeGoal"
    },
    {
      text: "How do you enjoy recharging your spirit during rest or free time?",
      type: "text",
      name: "hobby"
    }
  ];

  let current = 0;
  const container = document.getElementById('question-container');
  const answers = {};

  function renderQuestion() {
    const q = questions[current];
    container.innerHTML = '';

    const label = document.createElement('label');
    label.textContent = q.text;
    label.htmlFor = q.name;

    let input;

    if (q.type === "select") {
      input = document.createElement("select");
      input.name = q.name;
      input.id = q.name;

      q.options.forEach(opt => {
        const option = document.createElement("option");
        option.value = opt;
        option.textContent = opt;
        input.appendChild(option);
      });

      if (q.name === "class") {
        const imageContainer = document.createElement("div");
        imageContainer.style.display = "flex";
        imageContainer.style.gap = "20px";
        imageContainer.style.marginTop = "10px";

        const mageImg = document.createElement("img");
        mageImg.src = "/images/wizard.png";
        mageImg.alt = "Mage";
        mageImg.style.width = "120px";

        const warriorImg = document.createElement("img");
        warriorImg.src = "/images/warrior.png";
        warriorImg.alt = "Warrior";
        warriorImg.style.width = "120px";

        imageContainer.appendChild(mageImg);
        imageContainer.appendChild(warriorImg);
        container.appendChild(imageContainer);

        input.addEventListener("change", () => {
          mageImg.style.opacity = input.value === "Mage" ? "1" : "0.3";
          warriorImg.style.opacity = input.value === "Warrior" ? "1" : "0.3";
        });
      }
    } else {
      input = document.createElement("input");
      input.type = q.type;
      input.name = q.name;
      input.id = q.name;
      input.autocomplete = "off";
      input.required = true;
    }

    const button = document.createElement("button");
    button.textContent = current === questions.length - 1 ? "Finish" : "Next";
    button.type = "button";

    button.addEventListener("click", () => {
      if (input.value.trim() === "") {
        alert("Please answer this question before continuing, brave soul ✨");
        return;
      }

      answers[q.name] = input.value.trim();
      current++;

      if (current < questions.length) {
        renderQuestion();
      } else {
        container.innerHTML = '<p class="final-message">Your soul is ready to begin the journey... ✨</p>';
        console.log("Answers:", answers);
        setTimeout(() => {
        window.location.href = "../../pages/dashboard.html";  // change this to your target page URL
        }, 2500);
      }
    });


    container.appendChild(label);
    container.appendChild(document.createElement("br"));
    container.appendChild(input);
    container.appendChild(document.createElement("br"));
    container.appendChild(button);
  }

  renderQuestion();
}