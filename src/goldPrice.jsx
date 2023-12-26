import axios from 'axios';

export var context = 0;
export default function calculatePrice(formData){
    if(formData.metal == "PL")
        formData.carat = "";
    axios({
        method: "GET",
        headers:{
            'X-RapidAPI-Key': '0504feffd1msh0eb0e3104697e1ap1372f7jsnf643aeb93cf7',
            'X-RapidAPI-Host': 'live-metal-prices.p.rapidapi.com'
        },
        url: `https://live-metal-prices.p.rapidapi.com/v1/latest/${formData.metal}${formData.carat}/${formData.currency}/GRAM` ,
      }).then(function (response) {
            console.log(formData.carat);
            if(formData.carat == "_24K"){
                context = response.data.rates.XAU_24K;
            }else if(formData.carat == "_22K"){
                context = response.data.rates.XAU_22K;
            }else if(formData.carat == "_21K"){
                context = response.data.rates.XAU_21K;
            }else if(formData.carat == "_20K"){
                context = response.data.rates.XAU_20K;
            }else if(formData.metal == "XAG" && formData.carat == ""){
                context = response.data.rates.XAG;
            }else if(formData.carat == "OPEN"){
                context = response.data.rates.XAG_OPEN;
            }else if(formData.metal == "PL"){
                context = response.data.rates.PL;
            }

      }).catch(function(error){
        context = "try Again";
      });
}