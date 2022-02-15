document.getElementById('error-massege').style.display ='none';
const searchFood = () =>{
    const searchField = document.getElementById('search-field');
    const  searchText = searchField.value;
    searchField.value = '';
    document.getElementById('error-massege').style.display ='none';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then (res => res.json())
    .then(data => displayFood(data.meals) )
    .catch(error => dispalayError(error))
}
const dispalayError = error =>{
    document.getElementById('error-massege').style.display ='block';
}
const displayFood = (meals) =>{
    // console.log(meals)
    const searchReasult = document.getElementById('search-result');
     searchReasult.textContent = '';
    meals.forEach(meal =>{
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =` <div onclick="loardMealDtails(${meal.idMeal})" class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>`
      searchReasult.appendChild(div) 
    })
}

const  loardMealDtails = mealId =>{
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then (res => res.json())
    .then (data => dispalayMealDtails(data.meals[0]))
}

const dispalayMealDtails = meal => {
    console.log(meal)
    const mealDtails = document.getElementById('mealDetails');
    mealDtails.textContent ='';
    const div = document.createElement('div');
    div.classList.add('card')
    div.innerHTML = `    
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
      <a href="${meal.strYoutube}" class="btn btn-primary">Show Youtube</a>
    </div>`

    mealDtails.appendChild(div)
}