"use strict"

// Header

document.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    const scrollThreshold = 84;
    if (window.scrollY > scrollThreshold) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled")
    }

})

// Slider
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index > 20) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const translationValue = -currentIndex * 100 + '%';
    document.querySelector('.slider').style.transform = 'translateX(' + translationValue + ')';
}

function nextSlide() {
    showSlide(currentIndex + 3);
}

function prevSlide() {
    showSlide(currentIndex - 3);
}

function autoplay() {
    nextSlide();
}

setInterval(autoplay, 5000);

// FAQ

const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    let imgClass = item.querySelectorAll(".arrow-down")
    header.addEventListener("click", () => {
        item.classList.toggle("open");

        imgClass.forEach(function(img) {
            img.classList.toggle("arrow-up")
        })
        let description = item.querySelector(".description")
        if (item.classList.contains("open")) {
            description.style.height = `${description.scrollHeight}px`;
        } else {
            description.style.height = "0px";
        }
        removeOpen(index)
        console.log(item)
    })
})

function removeOpen(index1) {
    accordionContent.forEach((item2, index2) => {
        if (index1 != index2) {
            item2.classList.remove("open")

            let answer = item2.querySelector(".description")
            answer.style.height = "0px";
        }
    })
}

// Footer copyright
const date = document.querySelector(".copyright")
let html = new Date().getFullYear();
date.insertAdjacentHTML("beforeend", html)