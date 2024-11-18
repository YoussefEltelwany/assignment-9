var inoputOne = document.getElementById('SiteName');
var inoputTwo = document.getElementById('url');

var dataInoput = [];


function takeValueFromInput(){
    var value = {
        siteName: inoputOne.value,
        url: inoputTwo.value
    }
    dataInoput.push(value);

    displayData()
}


function displayData(){
    var dataOutoput = "";

    for( var i = 0; i < dataInoput.length; i++){
        dataOutoput += `
    <tr>
        <td>${i + 1}</td>
        <td>${dataInoput[i].siteName}</td>
       <td><a href="${dataInoput[i].url}" class="btn btn-warning"><i class="fa-solid fa-eye pe-2"></i>visit</a></td>
        <td> <button class="btn btn-danger" id="indexToRemove" onclick="removerData(${i})" >Delete</button></td>
    </tr>
        `;
    }
    document.getElementById('printValue').innerHTML = dataOutoput;
}


function removerData(){
    var index = document.getElementById('indexToRemove').value;
    dataInoput.splice(index, 1);
    displayData();
}