//Convert the following callback-based program to a Promise-based program:

/* function upload(url, successCallback, failureCallback) {
  setTimeout(() => {
    // script to download the picture here
    console.log(`Uploading the picture ${url} ...`);
    !url ? failureCallback(url) : successCallback(url);
  }, 1000);
}

function process(picture) {
  console.log(`Processing the picture ${picture}`);
}

let URL = "https://www.javascripttutorial.net/pic.jpg";

upload(URL, process, (url) => console.log(`The URL ${url} is not valid`));
upload('', process, (url) => console.log(`The URL ${url} is not valid`)); */

// Solution using promises
function upload(url) {
    console.log(`Uploading the picture ${url} ...`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url) {
          resolve(url);
        } else {
          reject(url);
        }
      }, 1000);
    });
  }
  
  let URL = "https://www.javascripttutorial.net/pic.jpg";
  
  upload(URL)
    .then((url) => console.log(`Processing the picture ${url}`))
    .catch((url) => console.log(`The URL ${url} is not valid`));