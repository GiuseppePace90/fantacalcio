const voti = await fetch("https://www.fantacalcio.it/api/v1/Excel/votes/19/2", {
  "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "none",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      "cookie": "cto_bundle=8qzvG191VTRmMENLdFFUMTV4JTJCR295bThPbUdiSTlKUUo4WWJGbERLM3d5JTJGeFI5Qng5ZEkzaXJuMEpHNGdSd1RXR0VKViUyQjdTOHhCb1FsV2V2cVBPSzRDZHVkTjRrRVFoaFl6V1BqamNnQUpReXdBQ0tpOFdRdFBNMkxuM1ZDdHRPJTJGdDFoMGpYdzFjZ3FrNUNGOHhCSjFRcFBOTUhyNWpObWFma0kyZ2hjQ2cyOEMwWSUzRA; euconsent-v2=CP8mHYAP8mHYAAKA0AITAvEgAAAAAEPgABCYAAAUHAKMBAAgCBIEBAAAAAIAACAACAAgAAAAAgBQAAAiCABCBgEAIAEAIAAAAgAAgAAQkAAAAAQABAAABACAQAAACBQAAgAAAAAAMAAAGACQEAAAAAJAhTAgAUCgACAgAgCAACACCAEIIEAgCABACAAo4CAABAgUAAAJAAWAAACwEAwAICUgQABEQDAAAEACAQQgQCIRoQBDACJBVTCiZRhKAEAkAUJBeAAQAAuACgAKgAcAA8ACCAF4AYQAyADUAHgARAAmABVADMAG8APQAfgBCQCGAIkARwAlgBNADAAGHAMoAywBsgDngHcAd8A9gD4gH2AfsA_wEAAIpARcBGACNQEiASWAn4CgwFQAVcAuYBegDFAGiANoAbgA4kCPQJFATsAocBR4CkQFsALkAXeAvMBgwDDYGRgZIAycBlwDMwGcwNXA1kBsYDaAG3gNzAbqA4IByYDlwHjgPaAf8BBMCDAEIYIWgheBDmCHoIfwR9BH8CRQEkIJMAkyBLACWYEtwJfATAgmWCZgEzgJuATmAnSBO4CeAFCCUDkABAACwAKAAcgBgAGIAPAAiABMACqAFwAMUAhgCJAEcAKMAYAA2QB3gD8gKiAq4BcwDFAHUAQgAiYBF8CPQJFAUeApoBYoC2AF5wMjAyQBk4DOQGsANvAe0BAECB4EGAIQgQ9Aj6BIoCSAElQJMgS6Al9BMsEzAJnATcAnCBOYCdwE8AJ5joOQAC4AKAAqABwAEEALgA1AB4AEQAJgAUwAqwBcAF0AMQAZgA3gB6AD9AIYAiQBLACaAE4AKMAYAAwwBlADRAGyAOeAdwB3wD2APiAfYB-gD_gIoAjEBHQElgJ-AoMBUQFXALEAXOAvIC9AGKANoAbgA4gB1AD7AIQARfAj0CRQEyAJ2AUPAo8CkAFNAKsAWLAtgC2QFugLgAXIAu0Bd4C8wF9AMGAYaAx6BkYGSAMnAZVAywDLgGZgM5AaaA1WBq4GsANoAbeA3UBxYDkwHLgPHAeSA9oB9YD7gH9gP-AgCBBgCFsEOQQ6Ah7BH0EfwJFASQAkyBKgCWAEswJdAS-AmABMwCZwE3AJvAThAnMBOmCdoJ3ATwAnmBQACgxCBoAAsACgALgAYgA1ACYAFUALgAYgA3gB6AEcAMAAc8A7gDvAH-ARQAlIBQYCogKuAXMAxQBtADqAI9AU0AqwBYoC0QFwALkAZGAycBnIDVQHjgP7AgwBCgCFoEOgIegSKAkgBJkCXQEzgJzATuAngBPMCgxSCsAAuACgAKgAcABBADAANQAeABEACYAFIAKoAYgAzAB-gEMARIAowBgADKAGiANkAc4A74B-AH6ARYAjEBHQElAKDAVEBVwC5gF5AMUAbQA3AB1AD2gH2ARMAi-BHoEigJ2AUOApABTQCrAFigLYAXAAuQBdoC8wF9AMNgZGBkgDJ4GWAZcAzmBrAGsgNvAbqA4IByYDxQHjgPaAf2A_4CCYEGAIQgQtAhnBDkEOoI-gj-BIoCSEEmASZAlmBLoCXwEwAJmATOAm8BOYCdwE8AJ5gAAA.YAAAAAAAAAAA; addtl_consent=1~; _gid=GA1.2.1644434817.1713079911; fantacalcio.it=4Ptsdkw9TVhUEclvb3a%2BTCa4Co99jgjta920C4CXVRU6UCI8dPxRwKkniDOhry74%2F4UBqy6bCFCuvBGrGz%2F01waxiPiqPIWmuo1%2BTMgpONXknI8TG4o8zeosxsAVxXvhg00dv6AS55LjNwahf0iR4FPtn%2F0fWWJdWcjYsNGpIHYiFPE71qFs9Gw7BRQ8Az69VPIwLB3AGkhJcdRORijFYBqDCCekMH6nr0zSi0QNKAgahcsnPrv6iWICSNBj8h%2FhPSVupsUIzmM2NC4xlL4GJ8Nplh9KtCq5b%2BF7vvMav4A%2BNu6GzBUduhhyOlkUtw8BCApsZsyvRgsblgAUbxV3YpZUDg6p12EVz%2BU54IO8JZFwVQQZ3S%2FVbh9pPqGjY7Q8YU1HJ6cOvlr%2BueOnbijArtiiWxU6Siid4vqcVWeCYkiOoeZBhQtVEvRA7JfbCk%2FE6lRSwML6p5dqC4rXPAfnOESOAFYDsAMj; client.fantacalcio.it=pace.giuseppe90%40gmail.com; _ga=GA1.2.781674636.1709319592; _ga_KVFYCX9ZTZ=GS1.1.1713161130.8.1.1713161401.60.0.0",
      "Referer": "http://localhost:4200/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
  }).then((res, err) => {
      if(!err) {
          resultMessage += "Dati recuperati con successo!"
          return res.blob();
      } else {
          resultMessage += "Errore nel download dei dati: " + err;
          HTTP_Response.send({ message: resultMessage });
      }
  });

  const buffer = Buffer.from(await listone.arrayBuffer());
  const workbook = XLSX.read(buffer, { type: 'buffer' });
  const sheetNamesList = workbook.SheetNames;
  const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNamesList[0]]);

  for(let i=0; i<jsonData.length; i++){
    var array = [];
    for(const prop in jsonData[i]){
        if(jsonData[i]["__EMPTY"]) {
            array.push(jsonData[i][prop]);
        }
    };
    if(array.length > 0) {
        homeService.salvaListone(...array.slice(1));
    }
  }


resultMessage += " Ed anche correttamente salvati!";
HTTP_Response.send({ message: resultMessage });

/******************************************************/

  const listone = await fetch(`https://leghe.fantacalcio.it/servizi/fantaasta?cacheBuster=${new Date().getTime()}`, {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
      "authorization": "AC1F2CA43857E05A4D1A09EF177395ED971041A461BF0C3687C1EFC9D6FE047FF7E",
      "codice_fiscale": "FSSPLA69D06F205B",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      // Aggiunta dell'intestazione Cache-Control
      "Cache-Control": "no-cache"
    },
    "referrer": "https://fanta-asta-live.fantacalcio.it/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
  }).then((res, err) => {
    if(!err) {
        resultMessage += "Dati recuperati con successo!"
        return res.text();

    } else {
        resultMessage += "Errore nel download dei dati: " + err;
        HTTP_Response.send({ message: resultMessage });
    }
  }).then(data =>  {
    let o = data.split(',');
    let arrayData = [];
    for(i=0; i <=o.length; i+=21) {
      arrayData.push(o.slice(i, 21+i));
    }
    HTTP_Response.send(arrayData);
  });
