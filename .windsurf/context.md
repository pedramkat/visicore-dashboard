# @windsurf-context
This file contains the project context, to be automatically included in every conversation.

A dashboard for the Visicore platform that allows doctors to see and manage their patient's MRI images analisis and medical information.

It has a login page then enters the doctor's dashboard. The dashboard has a sidebar with the following options:

- Patients
- Reports
- Settings
- Profile
- Logout

Patients page shows a list of the doctor's patients. Each patient has the following information:

- image
- name
- age
- gender

Clicking on a patient opens a new page with the following information:

- image
- name
- age
- gender
- medical information
- MRI images
- analysis
- reports

The project is in React with TypeScript and Tailwind CSS.
There is no database and all the images are stored in the public folder.