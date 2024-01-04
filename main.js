import "./style.scss";

var modal = document.getElementById("exampleModal");
var saveButton = modal.querySelector(".modal-footer .btn-primary");

saveButton.addEventListener("click", function (e) {
  e.preventDefault();

  var dob = document.getElementById("dob").value;
  var fullName = document.getElementById("fullName").value;
  var nickName = document.getElementById("nickName").value;

  // Create a new Date object from the dob value
  var date = new Date(dob);

  // Define an array of month names
  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var formattedDate =
    monthNames[date.getMonth()] +
    " " +
    date.getDate() +
    ", " +
    date.getFullYear();

  var activityDiv = document.createElement("div");
  activityDiv.classList.add(
    "activity",
    "border-top",
    "d-flex",
    "justify-content-between",
    "align-items-center",
    "gap-5",
    "px-3"
  );

  // Create a div for the activity details
  var activityDetails = document.createElement("div");
  activityDetails.innerHTML =
    "<strong>" +
    fullName +
    "</strong><br />" +
    formattedDate +
    "  " +
    " | " +
    "  " +
    nickName;

  // Add the activity details to the activity div
  activityDiv.appendChild(activityDetails);

  // Create the dropdown menu
  var dropdownMenu = document.createElement("div");
  dropdownMenu.classList.add("dropdown");
  dropdownMenu.innerHTML = `
      <i class="fa-solid fa-ellipsis-vertical" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"></i>
      <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton">
        <li><a href="#" class="dropdown-item" id="markAsDone">Mark as Done</a></li>
        <li><a href="#" class="dropdown-item" id="delete">Delete</a></li>
      </ul>
    `;

  // Add the dropdown menu to the activity div
  activityDiv.appendChild(dropdownMenu);

  dropdownMenu.querySelector("#delete").addEventListener("click", function () {
    activityDiv.remove();
  });

  dropdownMenu
    .querySelector("#markAsDone")
    .addEventListener("click", function () {
      var checkIcon = document.createElement("i");
      checkIcon.classList.add("fa-solid", "fa-check");

      activityDiv.insertBefore(checkIcon, dropdownMenu);
    });

  document.getElementById("activities").appendChild(activityDiv);

  // Close the modal
  var bootstrapModal = bootstrap.Modal.getInstance(modal);
  bootstrapModal.hide();
});
