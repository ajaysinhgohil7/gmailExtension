const saveCount = function() {
  alert("saving counts");
};

const showCount = function() {
  alert("showing counts");
};

document.addEventListener(
  "DOMContentLoaded",
  function() {
    var checkPageButton = document.getElementById("saveCountBtn");
    checkPageButton.addEventListener(
      "click",
      () => {
        saveCount();
      },
      false
    );
  },
  false
);
