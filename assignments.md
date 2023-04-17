# Day 1: Date: 17-April-2023
1. Modify the SelectCompoent for using Context to received data from its parent as well as implementing the Callback to emit data to parent

2. Complete the DataGridContextComponent based on the following needs
    - Pass the CanDelete property from parent of the type boolean
        - If the value is 'true', for each record in table show the delete button
        - Once this button is clicked, the record fro the collection received from parent must be deleted
    - When the column header for each coloumn in DataGrid is clicked  sort the data in DataGird based on the values in that column for the second click rebverse it     
