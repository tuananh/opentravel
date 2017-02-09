# SSIM sample file and format specifications

## SSIM File Record Layout 

### Header Record – Record Type 1

The record has a standard length of 200 bytes broken into the following fields. The purpose of this record is to assure the users that the data set is being correctly read, and defines, where applicable the number of seasons which follow. 

| Bytes From  | To  | Data Element            | Data Element Status  | Remarks                                          |
| ----------- | --- | ----------------------- | -------------------- | ------------------------------------------------ |
| 1           | 1   | Record Type             | M                    | Always 1                                         |
| 2           | 35  | Title of Contents       | M                    | Always reads AIRLINE STANDARD SCHEDULE DATA SET  |
| 36          | 40  | (Spare)                 | M                    | Blank fill                                       |
| 41          | 41  | Number of Seasons       | O                    | Blank fill                                       |
| 41          | 191 | (Spare)                 | M                    | Blank fill                                       |
| 192         | 194 | Data Set Serial Number  | M                    |                                                  |
| 195         | 200 | Record Serial Number    | M                    | Always ∅∅∅∅∅1                                    |

This block is then padded to the standard length (5 x 200 bytes), zoned, spaced or binary zeros may be used depending on parameter request.

If an airline requests larger blocking factors the block is still only padded to this standard length.

### Header Record – Record Type 2

The record gives an indication of the period(s) of applicability of the schedules that follow on subsequent records. The record has the standard length of 200 bytes broken into the following fields:


### Header Record – Record Type 3

### Header Record – Record Type 4

### Header Record – Record Type 5