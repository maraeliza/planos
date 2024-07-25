dados = "";
function preload() {
  dados = loadJSON("dadosOABES.json");
}
var newData = {};
function setup() {
 
  

    newData = dados;
    for (var i in dados) {

        switch (dados[i]["tipo_perfil"]) {
            case 0:
            newData[i]["plano"] = 'Cancelado';
            break;
        case 1:
            newData[i]["plano"] = 'Premium';
            break;
        case 2:
            newData[i]["plano"] = "Convênio";
            break;
        case 3:
            newData[i]["plano"] = "Starter";
            break;
        case 4:
            newData[i]["plano"] = "Standard";
            break;
        case 5:
            newData[i]["plano"] = "Growth";
            break;
        case 6:
            newData[i]["plano"] = "Growth+";
            break;
        default:
            break;
        }
    }
    console.log(newData[0])
   setTimeout(()=>{saveJSON(newData, "dadosOABESPlano.json")}, 30000);
}