// 여기에 정답을 작성해주세요
const target_01 = document.getElementById("target-1");
const target_02 = document.querySelector(".target-2");
const target_03 = document.getElementById("target-3");
const target_04 = document.getElementById("target-4");

// #target-1
target_01.classList.remove("border");
target_01.style.left = "250px";

// .target-2
target_02.classList.remove("border");
target_02.classList.add("blue");
target_02.style.left = "50px";
target_02.style.marginTop = "-15px";

// #target-3
let opacity = 1;

function fadeOut() {
  if (opacity > 0) {
    opacity -= 0.05;
    target_03.style.opacity = opacity;
    requestAnimationFrame(fadeOut);
  } else {
    target_03.style.display = "none";
    target_04.classList.add("green");
  }
}

fadeOut();


// 아래 코드는 수정하지 않습니다

// 1
$("#target-1").removeClass("border");

// 2
$("#target-1").css("left", "250px");

// 3
$(".target-2").removeClass("border").addClass("blue");

// 4
$(".target-2").css({ left: 50, "margin-top": "-15px" });

// 5
$("#target-3").fadeOut(() => $("#target-4").addClass("green"));
