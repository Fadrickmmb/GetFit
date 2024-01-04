
let totalCalories = 0;

//Harris Benedict Calculator
function calculateCalories() {
  const age = parseInt(document.getElementById('age').value);
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const activityLevel = parseFloat(document.getElementById('activityLevel').value);

  const baseCalories = (gender === 'male') ? 88.362 : 447.593;
  const calories = Math.round(baseCalories + (13.397 * weight) + (4.799 * height) - (5.677 * age) * activityLevel);

  totalCalories = calories;

  document.getElementById('caloriesResult').innerHTML = `Daily Calories: ${calories}`;
  updateCounters();
}

function updateCounters() {
  document.getElementById('remainingCount').textContent = totalCalories;
  document.getElementById('foodRemainingCount').textContent = totalCalories;
  document.getElementById('summaryRemainingCount').textContent = totalCalories;
}

function addFoodEntry() {
  const food = document.getElementById('foodName').value;
  const time = document.getElementById('time').value;
  const caloriesConsumed = parseInt(document.getElementById('caloriesConsumed').value);

  totalCalories -= caloriesConsumed;

  const foodEntry = `<p>At ${time}, you ate ${food} (${caloriesConsumed} calories)</p>`;
  document.getElementById('foodEntries').innerHTML += foodEntry;
  
  updateCounters();
}

function showDaySummary() {
  let summary = '';

  if (totalCalories < 0) {
    const calorieDeficit = Math.abs(totalCalories);
    summary = `You exceeded your daily calorie intake by ${calorieDeficit} calories. `;
  } else {
    summary = `You stayed within your daily calorie intake. `;
  }

  summary += `<br>Meals Consumed: <br>${document.getElementById('foodEntries').innerHTML}`;
  document.getElementById('daySummary').innerHTML = summary;
}

function openTab(tabName) {
  const tabContents = document.getElementsByClassName('tab-content');
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = 'none';
  }
  document.getElementById(tabName).style.display = 'block';
}
