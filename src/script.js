/* loading pagination from js*/

var pagination = document.createElement('div');
pagination.setAttribute("class","pagination");

var page ="";

pagination.appendChild(buttonCreation(1,'First'));
pagination.appendChild(buttonCreation(1,'Previous'));

for(var i=2;i<=10;i++){
    page = buttonCreation(i,i);
    pagination.appendChild(page);
}

function buttonCreation(elemValue,elamLabel) {
    var button = document.createElement('button');
    button.setAttribute('value',elemValue);
    button.setAttribute('id',elamLabel);
    button.innerHTML = elamLabel;
    return button;    
}

document.body.append(pagination);

/* loading data from json*/

var udata = [];
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
     udata = JSON.parse(this.responseText);
     dataLoad(1);
  }
};
xmlhttp.open("GET", "./data/data.json", true);
xmlhttp.send();

/* load data based on button click*/

$("button").click(function ()
{       
var a = $(this).attr("value");
(a==1) ?  document.getElementById('Previous').value=1 :  document.getElementById('Previous').value=a-1;
updateData(a); 
});


/* function to load table for initial screen */

function dataLoad(a){
    var header = ['ID','Name','Email'];
    var table = document.getElementById('user');
    var row = document.createElement('tr');
    row.setAttribute('class','header');
    for(var i=0;i<3;i++){
        var cell = document.createElement('td');
        cell.setAttribute('id',header[i]);
        cell.innerHTML=header[i];
        row.appendChild(cell);
    }
    table.appendChild(row);

    for(i=((a-1)*10);i<(a*10);i++)
    {
        var dataRow = document.createElement('tr');
            var datacell1 = document.createElement('td');
            datacell1.setAttribute('id','id'+i);
            datacell1.innerHTML=udata[i].id;
            dataRow.appendChild(datacell1);
            var datacell2 = document.createElement('td');
            datacell2.setAttribute('id','name'+i);
            datacell2.innerHTML=udata[i].name;
            dataRow.appendChild(datacell2);
            var datacell3 = document.createElement('td');
            datacell3.setAttribute('id','email'+i);
            datacell3.innerHTML=udata[i].email;
            dataRow.appendChild(datacell3);
    
        table.appendChild(dataRow);
    }
}

/* function to update table based on button click */

function updateData(a){

    var j=0;
    for(i=((a-1)*10);i<(a*10);i++)
    {
       
            var datacell1 = document.getElementById('id'+j);
            datacell1.innerHTML=udata[i].id;
            var datacell2 = document.getElementById('name'+j);
            datacell2.innerHTML=udata[i].name;
            var datacell3 = document.getElementById('email'+j);
            datacell3.innerHTML=udata[i].email;
           
            j++;
    }

}