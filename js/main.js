$(document).ready(function () {
  let currentFloor = 2;
  let counterUp = $(".counter-up");
  let counterDown = $(".counter-down");
  const floorPath = $(".home-image path");
  const navbar = $(".navbar-item");
  const modal = $(".modal");
  const modalCloseButton = $(".modal-close-button");
  const viewFlatsButton = $(".view-flats");
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor");
    $(".counter").text(currentFloor);
  });

  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor-two");
    $(".counter-two").text(currentFloor);
  });

  floorPath.on("click", function () {
    modal.toggleClass("is-open");
  });

  viewFlatsButton.on("click", function () {
    modal.toggleClass("is-open");
  });

  modalCloseButton.on("click", function () {
    modal.toggleClass("is-open");
  });

  navbar.on("click", function () {
    navbar.removeClass("active");
    $(this).toggleClass("active");
  });

  counterUp.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      usCurrentFloorTwo = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 1,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      $(".counter-two").text(usCurrentFloorTwo);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      usCurrentFloorTwo = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 1,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      $(".counter-two").text(usCurrentFloorTwo);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
});
