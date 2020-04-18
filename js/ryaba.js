const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";
const params = ['var1','var2','var3','var4', 'var5','var6','speach']

function handleButton(event) {
  let textJson = $.getJSON(dataURL, handleData);

  event.preventDefault();
}

function GetReplaseObj () {
  let returnObj = {};

  params.forEach(function(param, index) {
      returnObj[param] = $("input[name=" + param + "]").val()
    });
  return returnObj;
}

function handleData(textJson) {
  let replaseObj = GetReplaseObj();

  let resMessage = "";

  textJson["text"].forEach(function(strJSON, index) {
      for (str in replaseObj) {
        strJSON = strJSON.replace('{' + str + '}', replaseObj[str]);
    }
    resMessage = resMessage + strJSON + "<br>"
  }
);
// html() вставляет текс и при этом названия тэгов в тексте выводит как элементы html
	$("#result").html(resMessage);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
