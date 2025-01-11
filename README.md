# FBLA Project 2024-25
If you are reading this (besides me and Kp), this is an extracurricular project. Of course it's going to be shit. Thanks
- placed 4th at RLC (Regional)
- on the way to SLC (State)
### Prompt
Create a website for your school’s guidance department so students can easily search job postings and employers can easily submit them.
Your website must include the following functionalities:
- A page for employers to submit postings (employers)
- A backend panel to approve or delete postings (guidance)
- A page displaying the approved postings (students/listing)
- A page for students to apply for the posting (students/applications)
## Current Activity
- Making mockups of website pages on paper
- Sorting out a calendar for our purposes
## Audit
What do we already have, what do we need to improve, and what do we need to add?
### Already Have
- Pages for each (submit postings, approve/delete, display postings, applications)
- Demo for employer & guidance dept. password authentication for their pages
### Need to Add
- An index page where user can select who they are (students, employers, guidance)
- JavaScript application and posting submission parsing, rather than faking
  - store application and posting information, probably to a JSON file
- Have approve/reject buttons actually work on employers & guidance pages
  - ability to move this data between JSON files (approval)
  - ability to delete this data in a JSON file (denial)
- A sidebar to switch pages when not on index page but on subpages
### Room for Improvement
- Button design
- Aesthetics
- Place approved postings (students/listing) in an iframe rather than directly on main page
