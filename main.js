function addClass(element) {
    element.classList.add("www");
}

function removeClass(element) {
    element.classList.remove("www");
}

function checkClass(element) {
    return element.classList.contains("www");
}

function toggleClass(element) {
    element.classList.toggle("www");
}

function getClassCount(element) {
    return element.classList.length;
}

function showAlertForClasses(element) {
    element.classList.forEach((className) => {
        alert(className);
    });
}

console.log(element);

let element = document.querySelector("#elem");
let button = document.querySelector("button");

button.addEventListener("click", function() {
    let topBorderWidth = element.clientTop;
    console.log("Top border width: " + topBorderWidth);
});

button.addEventListener("click", function() {
    let leftBorderWidth = element.clientLeft;
    console.log("Left border width: " + leftBorderWidth);
});

button.addEventListener("click", function() {
    let fullWidth = element.offsetWidth;
    console.log("Full width of the element: " + fullWidth);
});

button.addEventListener("click", function() {
    let fullHeight = element.offsetHeight;
    console.log("Full height of the element: " + fullHeight);
});

button.addEventListener("click", function() {
    let contentWidth = element.clientWidth;
    console.log("Content width of the element (excluding border but including padding): " + contentWidth);
});

button.addEventListener("click", function() {
    let contentHeight = element.clientHeight;
    console.log("Content height of the element (excluding border but including padding): " + contentHeight);
});

const element = document.querySelector("#elem");
const styles = getComputedStyle(element);

const width = parseFloat(styles.width) - parseFloat(styles.borderLeftWidth) - parseFloat(styles.borderRightWidth) - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);
const height = parseFloat(styles.height) - parseFloat(styles.borderTopWidth) - parseFloat(styles.borderBottomWidth) - parseFloat(styles.paddingTop) - parseFloat(styles.paddingBottom);

console.log("Width of the element excluding border and padding:", width);
console.log("Height of the element excluding border and padding:", height);

const scrollButtonTop = document.querySelector("#scroll-top-button");
const scrollButtonLeft = document.querySelector("#scroll-left-button");
const scrollToTopButton = document.querySelector("#scroll-to-top-button");
const scrollDownButton = document.querySelector("#scroll-down-button");

scrollButtonTop.addEventListener("click", function() {
    const scrollTop = element.scrollTop;
    console.log("Element scrolled from the top by", scrollTop, "pixels");
});

scrollButtonLeft.addEventListener("click", function() {
    const scrollLeft = element.scrollLeft;
    console.log("Element scrolled from the left by", scrollLeft, "pixels");
});

scrollToTopButton.addEventListener("click", function() {
    element.scrollTop = 100;
});

scrollDownButton.addEventListener("click", function() {
    const scrollTop = element.scrollTop;
    element.scrollTop = scrollTop + 100;
});

const verticalScrollElement = document.querySelector('#elem');
const horizontalScrollElement = document.querySelector('#elem');
const verticalHeightButton = document.querySelector('#vertical-button');
const horizontalWidthButton = document.querySelector('#horizontal-button');
const scrollButton = document.querySelector('#scroll-button');
const verticalPageScrollButton = document.querySelector('#vertical-page-button');
const horizontalPageScrollButton = document.querySelector('#horizontal-page-button');

verticalHeightButton.addEventListener('click', () => {
    const height = verticalScrollElement.scrollHeight;
    console.log('Height of the element:', height);
});

horizontalWidthButton.addEventListener('click', () => {
    const width = horizontalScrollElement.scrollWidth;
    console.log('Width of the element:', width);
});

scrollButton.addEventListener('click', () => {
    verticalScrollElement.scrollTop = verticalScrollElement.scrollHeight - 100;
});

verticalPageScrollButton.addEventListener('click', () => {
    const verticalScroll = window.pageYOffset;
    console.log('Vertical page scroll:', verticalScroll);
});

horizontalPageScrollButton.addEventListener('click', () => {
    const horizontalScroll = window.pageXOffset;
    console.log('Horizontal page scroll:', horizontalScroll);
});

// Adding window scroll event listeners
const button1 = document.getElementById('button1');
button1.addEventListener('click', () => {
    window.scrollTo(300, 500);
});

const button2 = document.getElementById('button2');
button2.addEventListener('click', () => {
    window.scrollBy(0, 300);
});

const button3 = document.getElementById('button3');
button3.addEventListener('click', () => {
    window.scrollTo(0, document.body.scrollHeight);
});

const button4 = document.getElementById('button4');
button4.addEventListener('click', () => {
    window
});
