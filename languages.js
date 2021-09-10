import axios from "axios";

var Countriesdata;

const getData = async () => {
  const url = "https://restcountries.eu/rest/v2/all";
  const arr = [];
  const arr2 = [];
  const res = await axios.get(url);
//   console.log(res);
  Countriesdata = res.data;

  let languageLength;

  // Question1. How many languages are there in the countries API
  Countriesdata.map((item, index) => {
    const countryName = item.name;
    const Language = item.languages.map((language, index) => language.name);
    const numOfLanguages = Language.length;
    const output = countryName + " has "+ numOfLanguages + " languages, i.e. " + Language;
    console.log(output);
  });
  const getAllCountriesArea = () => {
    const sorted = Countriesdata.sort((a, b) => b.area - a.area).slice(0, 10);
    sorted.map((item, index) => {
      const name = item.name;
      const area = item.area;
      console.log(name + ", area: " + area + " sq.km");
    });
  };
  getAllCountriesArea();

  //Question3. Find specific language spoken in different countries
  const getLanguage = (lan) => {
    Countriesdata.map((item, index) => {
      const Language = item.languages.map((language) => language.name);
      languageLength = Language.filter((word) => word == lan).length;
      arr.push(languageLength);
    });
    const SumOfLanguage = arr.reduce((a, b) => a + b);

    console.log(
      "language: " + lan + ", spoken in" + SumOfLanguage + " countries"
    );
  };
  getLanguage("Spanish");

  //Question4. All The languages
  const getAllLanguage = () => {
    Countriesdata.map((item, index) => {
      const Language = item.languages.map((language) => language.name);
      arr2.push(Language);
    });

    arr2.map((item, index) => {
      const newArrays = [...item];
      console.log(newArrays);
      return newArrays;
    });
  };
  getAllLanguage();
};
getData()
