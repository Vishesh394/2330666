# Campus Notification System Design

## Problem Statement

Develop a system that fetches notifications and displays the top 10 highest-priority unread notifications.

## Priority Rules

1. Placement
2. Event
3. Result

Within the same type, notifications are ordered by latest timestamp.

## Approach

* Fetch notifications from the Notification API.
* Store notifications in memory.
* Sort notifications based on priority and timestamp.
* Select the top 10 unread notifications.

## Data Structures Used

* Array
* Custom Comparator / Sorting Logic

## Complexity Analysis

Sorting: O(n log n)

Top 10 extraction: O(10)

Overall: O(n log n)

## Assumptions

* Notification timestamps are valid.
* Notification types are one of Placement, Event, or Result.
* Notifications are not persisted in a database.

## Future Improvements

* Use a Min Heap / Priority Queue for efficient streaming updates.
* Real-time notification polling.
