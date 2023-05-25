fetch('https://www.coursehubiitg.in/api/codingweek/contributions')
  .then((response) => response.json())
  .then((data) => {
    data.sort((a, b) => b.points - a.points);

    
    let table=""
    table = `
        <div class="second">
            <p class="rank2">${2}</p>
            <img class="img2" src="${data[1].avatar}">
            <p class="ns2">${data[1].name}-${data[1].points}</p>
        </div>
        <div class="first">
            <p class="rank1">${1}</p>
            <img class="img1" src="${data[0].avatar}">
            <p class="ns1">${data[0].name}-${data[0].points}</p>
        </div>
        <div class="third">
            <p class="rank3">${3}</p>
            <img class="img3" src="${data[2].avatar}">
            <p class="ns3">${data[2].name}-${data[2].points}</p>
        </div>
    `;
    document.getElementsByClassName("upperBar")[0].innerHTML = table;
   
    let tableData = "";
    for (let index = 3; index < data.length; index++) {
        const values = data[index];
        const position = index+1;
        tableData += `
            <div class="row">
                <div class="phle2">
                    <div class="rank">${position}</div>
                    <img class="img" src="${values.avatar}"/>
                </div>
                <div class="name">${values.name}</div>
                <div class="score">${values.points}</div>
            </div>
        `;
    }
    document.getElementsByClassName("table")[0].innerHTML = tableData;

  })
  .catch((error) => {
    console.log("Error in fetching data:", error);
  });