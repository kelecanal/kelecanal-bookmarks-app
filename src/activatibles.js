//store is from API
import $ from 'jquery';

function buttonActive() {
    $('.newButtons').on('click', () => {
        console.log('newThingsComingSoon');
    })
}


export default {
    thing;
}
 


function generateBookmark(userInput) {
    return 
}

//things to do
//render page with inactive bookmarks, add new bookmark button, view bookmarks button
//PAGE RENDER INITIAL: (TITLE, ADD/VIEW BUTTONS (fields appear when clicked), MOST RECENTLY SUBMITTED BOOKMARKS)

function renderBookmarks() {
    //render title (in html), add & view buttons, and recently submitted bookmarks
    return `<div `
}

function addBookmarkToList() {

}

function handleNewBookmarkSubmit () {
    $('#newUserBookmark').submit(function(event) {
        event.preventDefault;
        const newBookmarkName = $('.userBookmark').val();
        addBookmark
    })
}

//submit new bookmark (text box, submit button, star rating) mouseover toggle
//NEW BOOKMARK PAGE: (URL FORM, SUBMIT BUTTON, DESCRIPTION FIELD, STAR RATING (DROP DOWN??))
// handleNewBookmarkSubmit (new bookmark submission)
// addBookmark (add bookmark to list of bookmarks)
// 
//when submitting bookmark, fields may not be blank for star rating OR description
//may add "Favorite has been added" page
//view bookmarks (search bar, enter, filter by dropdown), mouseover toggle
//VIEW BOOKMARKS PAGE: (SEARCH BAR, SUBMIT BUTTON, DROPDOWN FILTER BY RATING, SUBMIT)
//view bookmarks (no filtering) MUST CONTAIN: URL (may be link), star rating, and detailed description
//DETAILED BOOKMARKS (ON CLICK) PAGE: (URL LINK, STAR RATING, DETAILED DESCRIPTION)