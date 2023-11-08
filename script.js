//asyn and await for fetching the API URL data of New Delhi postal data
document.getElementById("getit").addEventListener("click", async () => {
    let response = await fetch(`https://api.postalpincode.in/postoffice/New Delhi`);
   let data = await response.json();
   //after getting the data from API ,Display the data by getting Data and stores in ID.
   document.getElementById(
      "posts"
    ).innerHTML = `postoffice Name: ${data[0].PostOffice[0].Name}`;
    document.getElementById(
      "posts1"
    ).innerHTML =`BranchType:  ${data[0].PostOffice[0].BranchType}`;
   
    document.getElementById(
      "posts2"
    ).innerHTML =` DeliveryStatus: ${data[0].PostOffice[0].DeliveryStatus}`;
  
  document.getElementById(
    "posts3"
  ).innerHTML =` Division: ${data[0].PostOffice[0].Division},Region:${data[0].PostOffice[0].Region}`;
  });


  
  //asyn and await for fetching the API URL data of Pondicherry postal data
  document.getElementById("getit1").addEventListener("click", async () => {
    let response = await fetch(`https://api.postalpincode.in/postoffice/pondicherry`);
   let data = await response.json();
   //after getting the data from API ,Display the data by getting Data and stores in ID.
   document.getElementById(
      "posts-a"
    ).innerHTML = `postoffice Name: ${data[0].PostOffice[0].Name}`;
    document.getElementById(
      "posts1a"
    ).innerHTML =`BranchType:  ${data[0].PostOffice[0].BranchType}`;
   
    document.getElementById(
      "posts2a"
    ).innerHTML =` DeliveryStatus: ${data[0].PostOffice[0].DeliveryStatus}`;
  
  document.getElementById(
    "posts3a"
  ).innerHTML =` Division: ${data[0].PostOffice[0].Division},Region:${data[0].PostOffice[0].Region}`;
  });