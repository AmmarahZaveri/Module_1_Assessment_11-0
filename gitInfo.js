/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = "Git is a version control system for recording changes in any set of files; it is typically used to coordinate the work of programmers who are working together to generate source code for software.";

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = "gitHub is basically a version control using Git. On this collaborative code-hosting platform, developers and businesses create, publish, and manage their software.";

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

let gitInitDefinition ="git init keeps track of file modifications and maintains a copy of your files in the staging area and saves the project's finished version in a database."

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

let gitCloneDefinition ="git clone copies a repository into a new directory. Each branch in the duplicated repository has a remote-tracking branch created for it as well."

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

let gitStatusDefinition = "git status is a command that displays your current working tree status. It displays the condition of your working directory and enables you to view all files that Git has not tracked."

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

let gitAddDefinition = "git add is a command used to index file contents. It prepares the staged content for the following commit and updates the working tree's most recent content to the staging area."

let gitAddCode ="git add ."
//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

let gitCommitDefinition = "git commit is a command used to transfer files from your local repository to the staging area. Your staging area will also be empty after running git commit."
let gitCommitCode = 'git commit -m "initial commit"'

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

let gitPushDefinition ="git push is a command used to upload content from a local repository to a remote repository. git push is how you sent move commits your from a local repository to a remote one."
//DONE