document.getElementById("git-feed").addEventListener("click", feedDisplay);
function feedDisplay() {
  let feedSettings = document.getElementById("github-feed");
  let bookmarkSettings = document.getElementById("bookmark-option");
  let calSettings = document.getElementById("github-cal");
  let weatherSettings = document.getElementById("weatherOpt");
  if (feedSettings.style.display === "none") {
    (feedSettings.style.display = "block"),
      (bookmarkSettings.style.display = "none"),
      (calSettings.style.display = "none"),
      (weatherSettings.style.display = "none");
  } else {
    feedSettings.style.display = "none";
  }
}

document
  .getElementById("bookmark-opt")
  .addEventListener("click", bookmarkDisplay);
function bookmarkDisplay() {
  let bookmarkSettings = document.getElementById("bookmark-option");
  let feedSettings = document.getElementById("github-feed");
  let calSettings = document.getElementById("github-cal");
  let weatherSettings = document.getElementById("weatherOpt");
  if (bookmarkSettings.style.display === "none") {
    (bookmarkSettings.style.display = "block"),
      (calSettings.style.display = "none"),
      (feedSettings.style.display = "none"),
      (weatherSettings.style.display = "none");
  } else {
    bookmarkSettings.style.display = "none";
  }
}

document.getElementById("githubCal").addEventListener("click", calendarDisplay);
function calendarDisplay() {
  let calSettings = document.getElementById("github-cal");
  let bookmarkSettings = document.getElementById("bookmark-option");
  let feedSettings = document.getElementById("github-feed");
  let weatherSettings = document.getElementById("weatherOpt");
  if (calSettings.style.display === "none") {
    (calSettings.style.display = "block"),
      (bookmarkSettings.style.display = "none"),
      (feedSettings.style.display = "none"),
      (weatherSettings.style.display = "none");
  } else {
    calSettings.style.display = "none";
  }
}

document
  .getElementById("weatherInfo")
  .addEventListener("click", weatherDisplay);
function weatherDisplay() {
  let calSettings = document.getElementById("github-cal");
  let bookmarkSettings = document.getElementById("bookmark-option");
  let feedSettings = document.getElementById("github-feed");
  let weatherSettings = document.getElementById("weatherOpt");
  if (weatherSettings.style.display === "none") {
    (weatherSettings.style.display = "block"),
      (calSettings.style.display = "none"),
      (bookmarkSettings.style.display = "none"),
      (feedSettings.style.display = "none");
  } else {
    weatherSettings.style.display = "none";
  }
}
// Get location for weather

document
  .getElementById("submitWeather")
  .addEventListener("click", weatherLocation);
function weatherLocation() {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
    const crd = pos.coords;

    /* console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`); */

    /* sessionStorage.userLatitude = crd.latitude;
    sessionStorage.userLongitude = crd.longitude; */
    chrome.storage.local.set(
      { userLat: crd.latitude, userLong: crd.longitude },
      function() {
        console.log("Location Saved!");
      }
    );
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
}

// Get Github username for feed

document
  .getElementById("submitgituser")
  .addEventListener("click", submitGitUser);
function submitGitUser() {
  let user1 = document.getElementById("gitUser").value;

  if (!user1) {
    console.log("Please submit Github Username!");
    return;
  }
  chrome.storage.local.set({ userGit: user1 }, function() {
    console.log("Setting Saved");
  });
  clearForm();
}

function clearForm() {
  document.getElementById("gitUser").value = "";
  document.getElementById("gitCalUser").value = "";
}

// Get user defined bookmarks

document
  .getElementById("submitbookmark")
  .addEventListener("click", saveBookmarks);
function saveBookmarks() {
  let userBookmarks = [];
  userBookmarks = document.getElementById("bookmarkForm").value;

  let tempBook = new Array();

  tempBook = marked.inlineLexer(userBookmarks, []).split(",");

  chrome.storage.local.set({ userBookmark: tempBook }, function() {
    console.log("Bookmarks Logged");
  });
}
// Set Github calendar username

document.getElementById("submitCalUser").addEventListener("click", function() {
  let calendarName = document.getElementById("gitCalUser").value;
  if (!calendarName) {
    console.log("Please input username");
    return;
  }
  chrome.storage.local.set({ gitCalName: calendarName }, function() {
    console.log("Setting Saved");
  });
  clearForm();
});
