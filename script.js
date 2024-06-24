var count_group = document.querySelectorAll(".list .item").length;
var active = 0;

function load() {
  var item_default = document.getElementById(
    "item_" +
      (active - 2 == -2
        ? count_group - 2
        : active - 2 == -1
        ? count_group - 1
        : active - 2)
  );
  item_default.classList.remove("hide");
  var item_hide = document.getElementById(
    "item_" + (active - 1 < 0 ? count_group - 1 : active - 1)
  );
  item_hide.classList.remove("active");
  item_hide.classList.add("hide");
  var item_active = document.getElementById("item_" + active);
  item_active.classList.add("active");
  item_active.classList.remove("hide");
}
load();

document.getElementById("next").onclick = function () {
  active = active + 1 >= count_group ? 0 : active + 1;
  load();
};
