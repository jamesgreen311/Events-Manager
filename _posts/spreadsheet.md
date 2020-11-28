# Understanding the Spreadsheet

## Tabs    
[Config](#config) | [Event Master](#event-master) | [Event Description](#event-description) | [Event Details](#event-details)

### Config
The Config tab contains lists of values that are used as drop downs selections in the Event Master tab.
The values used for the Status drop down list are added or removed from this tab. 
Initially the Status column contains:
1. Planned
2. Open
3. Closed
4. Cancelled 
5. Postponed

Statuses can be added, but removing or renaming will cause an error in the code. The order these appear in the drop down
list matches the order they appear in the sheet column. 
A feature enhancement could be written to break this dependency by adding an id if that is a desired feature.

Status is currently the only column defined for the Event Master data.

Event data is added to three tabs; Event Master, Event Description, & Event Details

### Event Master
The Event Master contains the core information about the event. There will be one row per event in the Master sheet.

### Event Description
The Event Description sheet contains the text that will be used as the events description and consists of 1 to many rows in the sheet. Each row must have the 
events unique Id in the first column. This will tie it to the correct master row when displayed.

### Event Details
The Event Details sheet contains the bulleted list of items to be displayed in the Event Details section. There can be 1 to many rows for an event and each row 
will be a new bullet item. Just like event description, each row in event details must have the events unique Id in the first column.
