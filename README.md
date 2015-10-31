# Fantasy Sports Draft

**Daniel Knittel**

**NOTE:** This project was ported from another repo, which is why there are so few commits. To see the history of commits, please go to github.com/dknittel/rails_passion_project

**Purpose:** The purpose of this website is to allow users to create drafts and select players to their teams with their friends.

**Target Users:** The target users are people who are sports fans and who enjoy playing fantasy sports and drafting players.

**Use cases:** A user can signup or login and can create a draft. A user can also set the number of teams and pool of players they want to draft from when creating a new draft. Note: Because there is currently only one API for getting player data, the user must put 'NBA 2015' as the input for pool. Users can create a team, name their team, add players to a team, and view player stats.

**Code:**
This project is built with a rails backend and React frontend. 

**Databases:** There are 6 tables in the database: users, drafts, pools, teams, draftees, and players. I also have routes for users and drafts with nested routes under drafts for players, teams, and draftees. My seed file contains an api call that requests from fantasydata.net and retrieves stats from all NBA players in the 2015 season.
Controllers: My draft controller contains the majority of my logic. My application controller contains helper functions for my draft and user controllers. 

**React:** In my drafts show template, I have a call to the Drafts react component in Drafts.js.jsx and pass in the props from my drafts controller. Drafts.js.jsx contains a call to available_player_list.js.jsx which maps individual players from available_player.js.jsx to a players variable and then renders players, returning it back to the Draft constructor. When the Select Player button is clicked, the selectPlayer method in the Draft constructor is called which calls removePlayer to take that player out of available players. This information is then sent to the server via an ajax put request so the draftee associated with that player is given a team id of the current picking team.

**Future features to add:** In the future, I would like to see several additional features added. First of all, I would like to fix the error with ending the draft and sending it to the complete page. Also, it would be nice if the drafts page outputted which team is currently picking a player. Additionally, I would like to have the drafts page display the current team's players so far. Finally, I want to use react to create 'loading' text on the create teams page while the drafts page is loading.

**How to contribute:** Go to github.com/dknittel/rails_fantasy_sports_draft to contribute
