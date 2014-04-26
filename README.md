[Notella](http://notella.herokuapp.com/)
============

Clone of the organization web application, Trello. In progress.

## Technical Details

+ Heavy use of jQuery, and the Sortable() library.
+ Use of subviews, taking care to eliminate and prevent zombie views.
+ Styling through a combination of CSS and Boostrap 3.1.
+ Backbone.js front-end with Rails back-end.

## Terse guideline

Make the show, index, and new page for boards. Next, add lists to the boards. Then add cards to the lists. Then add drag and drop functionality. Then make that card modal view.

## Detailed path

### Phase I: Board Index

* Make your Backbone model and collection for boards.
* Make a trellino.js file in your javascripts folder. In it, initialize Backbone.
* Build a `BoardsIndex` view class. Its `render` function should put an unordered list of our boards on the page.
* Add a Backbone router: map "/" to the `BoardsIndex` class.
* Add a new board view class, so that you can create boards.

### Phase II: Board Show and Lists

* Give every board a link to its show page.
* Make the board show page.
* Display the lists in order of their rank.
* When the user creates a board, it should redirect them to the board's show page.
* Add the ability to create lists, via a new list view.
* Add the ability to add board members.
* Add a button to delete the board.

### Phase III: Cards (finally!)

* Make show the cards for each list.
* Make the lists appear next to each other by making each inside a div which you give the CSS setting `float: left`.
* Add the ability to create and delete cards for each list. *TODO: elaborate on how to do this in Backbone.* The card deletion should be accomplished by a button for each card which only appears when you're hovering over the card. Use the JQuery hover event to get this effect.

### Phase IV: Javascript prettiness!

* Implement dragging and dropping of lists.
* Style the lists and cards.
* Style forms, alerts, etc.
* Make a "are you sure?" modal for deletion.

### Phase V: Card modal view

* Make modals for certain cards.
* Within the modal, show the to-do items.
* Cards should have assigned users.
