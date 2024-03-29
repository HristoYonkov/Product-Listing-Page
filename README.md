# Product Listing Page

The app is a task for Company.

![](/product-listing-page.png)

## Informaton:
Short summary:

I solve this problem with 'React' librares. As a part of the task i use hardcoded data,
this data is inside 'src/data' folder. And by this approach the app is not persistant,
all states will be lost after refresh of the page!
However, the state is well managed and if you cycle trough pages it wont be deleted!
I use props drilling approach with this task cause i started it so, i thought that the things will be more easy
but when i get to 'filtering part + sorting' things get started more challenging :).
As we speak of challenges, the real one for me was the design! Since i am not designer it was hard for me to
made things look fine! :). The point of the app is to show that the app is responsive, how filtering system works, how sorting system works
and dynamicly calculated discount prise of the cards and rating.

### Task Summary:
1. As a part of the task, i use "react-router-dom" to cycle trough pages.
2. "react-icons" for icons wich are in 'Navbar': 'burger menu' :), icons on the footer about 'social media', mobile filter 'hamburger' icon
    for dynamicly rendered 'stars' in the card and the 'cart'.
3. I use "node-sass" library for styling, i really like i'ts magic!
4. "nanoid" library for generating unique id-s of the data objects wich 'id' later i use for react components rendering.
5. "framer-motion" library for animate the mobile version of the 'navbar' and 'filter', later on i think
    to put some animations on the card tiles.

## Tech Stack:
-Client "react" - version - 18.2.0

Libraries:
<ol>
  <li>"react" - version - 18.2.0</li>
  <li>"framer-motion" - version - 10.13.2</li>
  <li>"nanoid" - version - 4.0.2</li>
  <li>"node-sass" - version - 7.0.3</li>
  <li>"react-icons" - version - 4.10.1</li>
  <li>"react-router-dom" - version - 6.14.2</li>
</ol>

# Setup

To run app, in directory "C:\Users\User\Desktop\C4-Nexus-Task\client",  open inside cmd and run:

$ npm install

$ npm start

Which opens the app at http://localhost:3000 in your browser.

## Deployed version at: https://plp-smart-it.netlify.app/

And dont forget, everything is a subject to change!!!
