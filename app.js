const bmi = function () {
  var age = document.getElementById("age_value").value;
  console.log(age);

  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  const result = document.getElementById("result");

  var bmi = weight / (((height / 100) * height) / 100);
  console.log(bmi);
  var total = bmi.toFixed(2);

  result.innerHTML = total ;

}
document.querySelector("#calcu").addEventListener("click",bmi)

