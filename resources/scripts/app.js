let singlePostCard = document.querySelectorAll(".singlePostCard");

singlePostCard.forEach((grade) => {
  if (window.location.href.indexOf("arskurs-1") > -1) {
    grade.classList.add("firstGrade");
  } else {
    grade.classList.remove("firstGrade");
  }

  if (window.location.href.indexOf("arskurs-2") > -1) {
    grade.classList.add("secondGrade");
  } else {
    grade.classList.remove("secondGrade");
  }

  if (window.location.href.indexOf("arskurs-3") > -1) {
    grade.classList.add("thirdGrade");
  } else {
    grade.classList.remove("thirdGrade");
  }

  if (window.location.href.indexOf("arskurs-4") > -1) {
    grade.classList.add("fourthGrade");
  } else {
    grade.classList.remove("fourthGrade");
  }

  if (window.location.href.indexOf("arskurs-5") > -1) {
    grade.classList.add("fifthGrade");
  } else {
    grade.classList.remove("fifthGrade");
  }

  if (window.location.href.indexOf("arskurs-6") > -1) {
    grade.classList.add("sixthGrade");
  } else {
    grade.classList.remove("sixthGrade");
  }

  if (window.location.href.indexOf("arskurs-7") > -1) {
    grade.classList.add("seventhGrade");
  } else {
    grade.classList.remove("seventhGrade");
  }

  if (window.location.href.indexOf("arskurs-8") > -1) {
    grade.classList.add("eighthGrade");
  } else {
    grade.classList.remove("eighthGrade");
  }

  if (window.location.href.indexOf("arskurs-9") > -1) {
    grade.classList.add("ninthGrade");
  } else {
    grade.classList.remove("ninthGrade");
  }
});
