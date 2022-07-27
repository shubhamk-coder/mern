
function upload(url) {
    console.log(`Uploading the picture ${url} ...`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(url);
      }, 1000);
    });
}
  
function process(url) {
    console.log(`Processing the picture ${url} ...`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(url);
      }, 2 * 1000);
    });
}

let URL = "https://www.javascripttutorial.net/pic.jpg";

//   upload("URL")
//     .then((url) => console.log(`Processing the picture ${url}`))
//     .catch((url) => console.log(`The URL ${url} is not valid`));

async function showStatus() {
    let getUpload = await upload(URL);
    let getProcess = await process(URL);
    console.log(`The Uploading & Processing of ${URL} is Completed`);
}
  
showStatus();  
  
  //Q: promises

/* function getUser(userId) {
    return new Promise((resolve, reject) => {
      console.log("Get user from the database.");
      setTimeout(() => {
        resolve({
          userId: userId,
          username: "john",
        });
      }, 1000);
    });
  }
  
  function getServices(user) {
    return new Promise((resolve, reject) => {
      console.log(`Get services of ${user.username} from the API.`);
      setTimeout(() => {
        resolve(["Email", "VPN", "CDN"]);
      }, 2 * 1000);
    });
  }
  
  function getServiceCost(services) {
    return new Promise((resolve, reject) => {
      console.log(`Calculate service costs of ${services}`);
      setTimeout(() => {
        resolve(services.length * 100);
      }, 3 * 1000);
    });
  }
  
  // Using promises
  getUser(100).then(getServices).then(getServiceCost).then(console.log);
  
  // Using async/await
  async function showServiceCost() {
    let user = await getUser(100);
    let services = await getServices(user);
    let cost = await getServiceCost(services);
    console.log(`The service cost is ${cost}`);
  }
   */
  