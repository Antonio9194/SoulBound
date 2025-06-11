export function creationchar() {
  const questions = [
    { text: "From what essence were you formed? (Male / Female / Other)", type: "text", name: "sex" },
    { text: "Choose your Path: Mage or Warrior?", type: "select", name: "class", options: ["Mage", "Warrior"] },
    { text: "When the sun first kisses the sky, what calls your spirit to rise?", type: "text", name: "morningRoutine" },
    { text: "What dream tugs gently at your heart, whispering of distant greatness?", type: "text", name: "lifeGoal" },
    { text: "What art or play stirs your soul when duties are done?", type: "text", name: "hobby" }
  ];

  let current = 0;
  const container = document.getElementById('question-container');

  function renderQuestion() {
    const q = questions[current];
    container.innerHTML = '';

    const label = document.createElement('label');
    label.textContent = q.text;

    let input;
    if (q.type === 'select') {
      input = document.createElement('select');
      q.options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt;
        option.textContent = opt;
        input.appendChild(option);
      });
    } else {
      input = document.createElement('input');
      input.type = q.type;
    }
    input.name = q.name;
    input.required = true;

    const button = document.createElement('button');
    button.textContent = 'Next';
    button.onclick = () => {
      if (input.value.trim() !== '') {
        current++;
        if (current < questions.length) {
          renderQuestion();
        } else {
          container.innerHTML = '<p>Your soul is ready to begin the journey... 🌟</p>';
        }
      }
    };

    container.appendChild(label);
    container.appendChild(document.createElement('br'));
    container.appendChild(input);
    container.appendChild(document.createElement('br'));
    container.appendChild(button);
  }

  renderQuestion();
}