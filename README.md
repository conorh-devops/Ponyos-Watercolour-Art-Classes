# Ponyos Watercolour Art Classes
BScDevOps Assign - Team Marvel

# Table of Contents

1. [Scrum Master](#scrum-master)
2. [Product Owner](#product-owner)
3. [Rockstars](#rockstars)
4. [Project Deadline](#project-deadline)
5. [Project Specification](#project-specification)
6. [Frameworks](#frameworks)
7. [How To Install Locally](#how-to-install-locally)
8. [Useful Links](#useful-links)
10. [Risk Register](#risk-register)
11. [Tenants of Design](#tenants-of-design)
12. [Security](#security)
13. [Testing](#testing)
14. [Environments](#environments)
15. [Github Version Control](#github-version-control)
16. [Agile Methods](#agile-methods)
17. [Social Contract](#social-contract)
18. [Meetings](#meetings)
19. [Communication](#communication)
20. [Agile Way of Working](#agile-way-of-working)
21. [Other](#other)
23. [Estimating Story Points](#estimating-story-points)
24. [Definistion of Ready](#definition-of-ready)
25. [Definition of Done](#definition-of-done)



This is the online repository for the DevOps Assignment.

Our product will be delivered using an Agile methodology that embraces the DevOps culture. 

Please note that our culture embraces change and these documents are treated as living, breathing artefacts that will be continuously updated.

# Scrum Master
Rotating scrum master so that everyone gets to experience the role once.


19/12/2022 - Alan Staunton

02/01/2023 - Airton Esmerio

09/01/2023 - Mara Lima

16/01/2023 - Conor Horan

23/01/2023 - Louise MacBride

30/01/2023 - Monish Pawar

06/02/2022 - Alan Staunton

13/02/2023 - Airton Esmerio

20/02/2023 - Mara Lima

27/02/2023 - Conor Horan

06/03/2023 - Louise MacBride

13/03/2023 - Monish Pawar

20/03/2023 - Alan Staunton

# Product Owner

Pauric Dawson

# Rockstars
 
Airton Esmerio

Conor Horan

Mara Lima

Louise MacBride

Monish Pawar

Alan Staunton


# Project Deadline

Thursday, 23 March 2023 23:59

# Project Specification

 - The system should be clean and simple.
 - The team has been tasked with creating the pipeline for the SDLC. 
 - The team has been asked to provide a simple prototype page(s) to test the pipeline. 
 - The system needs to take into account the usual security requirements. 
 - The administrator of the end system (Ghibli Studios) should be able to access detailed information and edit as appropriate.
 - Once the client enters details it should not be able to be changed by the class attendees.
 - User access levels should include both client and administrator.
 - The project should include at least one self developed api and one webservice.
 - The project should be run on AWS.

# Frameworks
We will be using MongoDB for our database

Node.js is used for the frontend.

Project will be hosted on AWS but can also run locally. Instructions are provided below.


# How to install locally

Intellij IDE
 - Download project from Git.
 - Import project from downloaded folder. 
 - You may need to install neo-async and yarn
 - npm install
 - npm run serve
 - Click on the link to open the webserver.

# Useful Links
 - Project Slack: https://atudevops.slack.com #pgdip_devops_prj_man_group_3
 - GitHub: https://github.com/conorh-devops/Ponyos-Watercolour-Art-Classes.git
 - Development Server: http://ponyos-watercolour-art-classes-dev.s3-website-eu-west-1.amazonaws.com/#/home
 - Production Server: http://ponyos-watercolour-art-classes-prd.s3-website-eu-west-1.amazonaws.com 


# Risk Register
This repository contains the project's risk register. 

A risk register is a document that lists potential risks and threats to a project, along with plans to mitigate or manage those risks. 

The purpose of the risk register is to ensure that potential risks are identified, evaluated, and addressed in a proactive manner, so that the project can be completed on time, within budget, and to the desired quality.

The risk register is updated regularly and reviewed by the project team and stakeholders to ensure that it remains accurate and relevant. 

If you have any questions or concerns about the risks listed in this repository, please do not hesitate to reach out to the project team. 

Together, we can work to minimize the impact of risks and ensure the success of the project.

___Risk___

Deadlines being missed

___Contingency___

Attend 2 standups per week 

___Mitigation___

If there are any questions, we can contact each other via Teams or Slack

___Risk___

One person being overworked  

___Contingency___

That person must speak up 

___Mitigation___

Discuss as a group the options available to reduce the workload.

___Risk___

Security vulnerabilities

___Contingency___

Conduct regular security audits and penetration testing; implement multi-factor authentication and other security measures

___Mitigation___

Follow secure coding practices, perform regular security reviews, and stay up-to-date on the latest security threats and best practices

___Risk___

Compatibility issues

___Contingency___

Conduct extensive testing on various web browsers and operating systems; develop a responsive design

___Mitigation___

Use widely-supported web technologies, conduct thorough testing, and provide clear documentation on supported configurations

___Risk___

Technical Challenges

___Contingency___

Conduct thorough research and prototyping before committing to a technology stack; stay up-to-date on the latest developments in relevant technologies

___Mitigation___

Allocate time and resources for research and prototyping, engage with developer communities, and seek expert advice if necessary

___Risk___

Integration issues

___Contingency___

Conduct extensive testing and develop clear documentation on how to integrate with other systems

___Mitigation___

Use well-documented and widely-used APIs, conduct thorough testing, and involve stakeholders in the integration process

___Risk___

User adoption

___Contingency___

Conduct extensive user testing and gather feedback throughout the development process; provide clear documentation and support

___Mitigation___

Use user-centered design methodologies, conduct extensive user testing, and engage with users to understand their needs and preferences

___Risk___

Communication breakdown

___Contingency___

Establish clear communication channels and protocols; provide regular updates and documentation

___Mitigation___

Use project management tools, establish clear communication channels and protocols, and conduct regular stakeholder meetings

___Risk___

Resource constraints

___Contingency___

Prioritise features and requirements; seek external funding or additional resources if necessary

___Mitigation___

Use agile development methodologies, prioritize requirements, and seek external funding or additional resources if necessary

___Risk___

Project management issues

___Contingency___

Use established project management methodologies and tools; track progress and communicate regularly with stakeholders

___Mitigation___

Use established project management methodologies and tools, prioritize stakeholder engagement, and identify and address issues early

___Risk___

Legal or regulatory issues

___Contingency___

Stay up-to-date on relevant laws and regulations; work with legal and regulatory experts if necessary

___Mitigation___

Conduct regular legal and regulatory reviews, engage with legal and regulatory experts, and follow best practices for compliance

# Tenants of Design

The code framework to be used will be Node.js, we will be programming using the IDE IntelliJ IDEA.

# Security

** THIS SECTION TO BE FILLED IN

- << >>: uses static analysis to find bugs in code. 
 
- <<>>.

# Testing

The quality of the application will be assessed through three main testing types as defined below.

- Unit Test - For better code coverage, code will be written with the unit test. The developer will be responsible for writing the unit test. These unit tests will be used in our pipeline to achieve our CI approach.

- Functional Test: The test engineer will conduct functional testing via automated test scripts created through the Playwrite automation tool for UI (black box testing). The Regression pack will be created via a subset of the Automated test suite. This regression pack will be utilized in the Pipeline before the deployment stage to achieve our CD approach. Also, a tester will assess the scope of API test and write API automation tests in Postman(if required) 

- Exploratory Test: Along with UI and API tests, the tester will perform an Exploratory test to make sure the non-functional aspects of the application like responsiveness, usability, etc

    
# Environments

Below are the environment proposed for this project 
    
Dev, Test, Stage and Production

- Dev - All Development activities will be peformed in this environment
- Test - All QA activities will be done in the Test environment 
- Stage - All Pre-production test will be performed on the Stage environment.
- Production - Live environment. No development activities can be performed in this environment without prior approval.
    
Tight configuration management for consistency and reproducibility

Automated creation and deployments

Integrated and automated pipeline (commit -> test -> Stage -> deploy)

# Github version control

Branches used:
- Main - This is the main branch where all users must merge their branches into.

Any merge to be implemented, must be approved by at least one other person.

# Agile Methods

Jira

GitHub

Confluence

Individuals and Interactions: Prioritizing the value of individuals and their interactions over processes and tools.

Working Software: Focusing on delivering working software over comprehensive documentation.

Customer Collaboration: Encouraging collaboration with customers to ensure that the project is aligned with their needs and expectations.

Responding to Change: Embracing change and adapting to it quickly, rather than following a rigid plan.

Iterative Development: Breaking down the project into smaller, manageable iterations and regularly delivering working software.

Sustainability: Ensuring a sustainable pace of work to prevent burnout and maintain productivity.

Technical Excellence: Promoting technical excellence and good design to ensure that the project can be maintained and scaled over time.


# Social Contract

Mobile phones be left on silent during sprint sessions and class time.

Be on time for team meetings and class, if you are running late let the group know by sending a message into the Slack channel.

Everyone has an equal voice and valuable contribution.

When you are assigned a job, take ownership of it and keep it up to date, do not be afraid to ask others for help, always be honest about your work.

Do not speak over someone when they are expressing a point, everyone has an equal voice.

No blame culture.   

Do not be afraid to ask for help, we are all learning.

No invisble work.

Ask questions to make sure you understand the task given to you.

Try have some fun, team work makes the dream work.

Use Agile methodoligies in the project at all times.

# Meetings

Stand-ups will occur on Every Monday @ 18:30, during class and every Thursday @ 18:30. Stands up will occur a minimum of twice weekly.

The order that people give their updates will be random.

Updates will be in the form: What I've done, Impediments, What I plan to do.

Sprint planning will occur at 18:30 every week.

Please add and update items within Jira prior to the sprint planning session.

Jira link is: https://atudevops.atlassian.net/jira/software/projects/PWA/boards/7

Sprint retro will at the end of our sprint on <<Date/Time>> (timebox retro for 15 minutes, to be organised by the scrum master).

The order that people present their sprint retro updates will be based on The Team 1 list in the Assign_BSc_DevOps_2022.pdf file on blackboard of those present at the meeting.

Points raised in the sprint retro will be noted and posted on the slack channel by the Scrum Master. The Scrum Master is rotated per team member every week.

Backlog refinement will happen on Thursdays @ 18.30 during our sprint.

Task estimation will be done using Poker Planner. 

Come prepared to meetings.

Be on time for Stand Ups and meetings.

Mobile phones on silent.

Everyone has equal voice and valuable contribution.

Keep your language and tone professional at all times.

Be honest.

# Communication

Slack is the preferred method of communication.

Communication in this order: Slack, Teams, Email.

If a demonstration is required use Teams, record the session and upload to the Slack channel.

No Slack or Teams communications between 21:00 - 09:00.

Raise a problem as soon as you see it.

Respect each other and understand differences in knowledge.

All team documents are to be created using Markdown language and shared on GitHub.

There are no silly questions, if you don’t understand, ask.

Share success stories.

Focus on the positives.

Don’t make assumptions.

Don’t interrupt and cut another person off while they are talking.

Listen when someone is talking, don’t interject.

Zero tolerance for bullying.

# Agile way of working

If are assigned a job, take ownership of it and keep it up to date.

Stick to your agreed working patterns. Let the team know when you are late or going early.

Keep JIRA board updated at all times.

Update the Scrum Board as you progress the story i.e. don’t update at standup.

Don't be afraid to ask for help.

Don't be afraid to give constructive criticism, as long as it is constructive.

Solve roadblocks within the team. If the impediment can’t be solved within the team then give it to the Scrum Master.

# Other

Sprints will start after the stand up that happens at the start of class each week.

The Scrum Master role rotates each week, the schedule is available on the on the process section.

Standup Alice will be used for task management and planning.

Each member of the team will work approximitely 3 hours per week, unless they are on vacation.

Our branching stategy will start with github then the issue number followed by wip

# Estimating Story Points

Story points are a unit of measurement used in agile project management to estimate the relative size and complexity of tasks or user stories. 

Story points are subjective and help teams to determine how much effort a particular task or story will require, compared to other tasks or stories in the project. 

Here are the steps to estimate story points in a project:

Define the estimation scale: Determine the unit of measurement to be used for story points, such as Fibonacci numbers (1, 2, 3, 5, 8, 13, etc.) or a modified Fibonacci scale.

Gather the team: Involve the team members who will be working on the tasks or stories in the estimation process. This helps to ensure that the estimates are based on a collective understanding of the work.

Review the user stories: Review each user story or task and have a discussion about its complexity and the effort required to complete it.

Assign story points: Based on the discussion, each team member assigns a story point value to the task or story.

Compare and refine estimates: Compare the estimates assigned by each team member and refine them if necessary. The goal is to reach a consensus on the final story point estimate for each task or story.

Refine the process: Regularly review and refine the estimation process to ensure that it remains accurate and effective over time.


# Definition of Ready

Before the team starts estimating the Stories from complexity perspective everyone must understand what "Ready" means. Although this varies significantly per Scrum Team, members must have a shared understanding of what it means for a Story to be "Ready" for estimation. This is the "Definition of "Ready" " for the Scrum Team and is used to assess when the Story can be included in the estimation.

The following checks should be marked as done before declaring a Story ready to be estimated. Unless all the steps are marked the Story will not be moved to the product backlog and therefore not be estimated. 

- The Story template is filled in
- The Story is understood by all
- The Story has been estimated by the team (and can be re-estimated in planning if necessary)
- The Story is testable within the sprint
- The Story can be completed (Definition of Done) in approx. 1/3 of a sprint
- The Story does NOT include known impediments
- The way to demo the Story is understood (or is conceivable)


# Definition of Done

When the Story is described as "Done", everyone must understand what "Done" means. Although this varies significantly per Scrum Team, members must have a shared understanding of what it means for work to be complete, to ensure transparency. This is the "Definition of "Done"" for the Scrum Team and is used to assess when work is complete on the Product Increment.

The same definition guides the Development Team in knowing how many Stories it can select during a Sprint Planning Meeting. The purpose of each Sprint is to deliver increments of potentially shippable functionality that adhere to the Scrum Team's current Definition of "Done".

The following definition of "DONE" applies only to the Scrum teams of this project. We can say that a Story is "DONE" when:

- Code is completed, all technical tasks are closed
- Code is reviewed based on code review standards (previously defined)
- Unit tests are created and are passed
- Test cases are created
- All tests were executed
- All sub-tasks associated to  story/Task are closed
- Demo provided to PO when needed

