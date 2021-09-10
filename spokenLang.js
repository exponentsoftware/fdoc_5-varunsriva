const getData = async () => {
    try {
      const res = await fetch("https://restcountries.eu/rest/v2/all");
      if (res.ok) {
        console.log("Fetch data successful");
      } else {
        console.log("error");
      }
      const countryData = await res.json();
  
      let totalLanguage = [];
      let countryLanguageName = "";
      //here we can do loop over trough entire countries api
      countryData.forEach((country) => {
        countryLanguageName = country.languages;
        //here we can also loop over each country languages
        countryLanguageName.forEach((language) => {
          totalLanguage.push({ language: language.name, country: country.name });
        });
      });
      s;
  
      var output = Object.values(
        totalLanguage.reduce((obj, { language }) => {
          if (obj[language] === undefined)
            obj[language] = { language: language, country: 1 };
          else obj[language].country++;
          return obj;
        }, {})
      );
  
      const top15MostSpokeLang = [];
      const sortedArray = output.sort((a, b) => b.country - a.country);
      for (let i = 0; i < 15; i++) {
        top15MostSpokeLang.push(sortedArray[i]);
      }
      console.log(top15MostSpokeLang);
    } catch (error) {
      console.log("error");
    }
  };
  
  getData();