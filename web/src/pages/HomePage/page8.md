## OVERALL DIAGRAM

This is a diagram of what we will be building. It shows the overall structure of the application.

<img src='/ShopNoteOverallDiagram.png' className="w-3/4 mx-auto" />

1. The Home page will use a redwood cell - ShopNotesCell.
2. The ShopNotesCell uses graphql to get all the ShopNote records and returns them ussing the ShopNoteCard component.
3. The ShopNoteCard component displays the ShopNote records and uses the ShopNoteItemsDisplay component to display each of items.
    1. This component has buttons
    - to add a new item
    - to delete the ShopNote
    - to clear all checked Items
4. The ShopNoteItemsDisplay component displays the list of items and uses the ShopNoteItem component to display each item.
    1. Each item line in this component has user selections
    - to set/unset the item's checked status
    - to set/unset the item's urgent status
    - to delete the item
    - to add a new item
