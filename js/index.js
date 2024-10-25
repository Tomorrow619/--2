function updateCountryCode() {
  let country = document.getElementById("country").value;
  let updateCountryCode = document.getElementsByClassName("сode");
  let phone = +document.getElementById("phone").value ;
  const UZ_N = "+998";
  const CZ_N = "+420";
  const RU_N = "+7";
  const JP_N = "+81";
  const USA_N = "+1";
  let resultnumber = "";
  if (country == "uz") {
    resultnumber = UZ_N;
  } else if (country == "ru") {
    resultnumber = RU_N;
  } else if (country == "jp") {
    resultnumber = JP_N;
  } else if (country == "usa") {
    resultnumber = USA_N;
  } else if (country == "cz") {
    resultnumber = CZ_N;
  }
} 
