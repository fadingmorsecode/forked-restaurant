export function initPageLoad() {
    const containerDiv = document.getElementById('content')
    //create the divs
    const headline = document.createElement('div');
    const copy = document.createElement('div');

    //add ID and text to the divs
    headline.id = 'headline';
    headline.textContent = 'Epicurea: Where Flavor Meets Innovation';
    copy.id = 'copy';
    copy.textContent = 'Discover the Magic';

    //append the divs to the content div
    containerDiv.appendChild(headline);
    containerDiv.appendChild(copy);
}