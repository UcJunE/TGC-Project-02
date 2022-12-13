# **Love Potion**

![Screenshots of Love's Potion homepage](/screenshots/lovePotion-ScreenShoot.PNG)

Link to demo : [Love's Potion](https://tgc-love-potion.netlify.app/)

## Summary

Fragrance brings intangible value to our lives: a memory-evoking perfume; the comforting feeling from fresh-smelling laundry; the sense of cleanliness offered by a fragranced shower gel.

Love Potion is a web application that aims to be a platform where perfume lover can share their personal opinion regarding on their preference perfume .

---

## UI/UX

### Strategy

#### Organisational Goals

As someone who love the fragrance of the perfume , prior to having no knowledge about the perfume and there is a lot of perfume around the world to choose on . Therefore a centralized informational site would be beneficial where people can share their experience and thought on the perfume will help greatly with perfume choices.

#### User Goals

The aim of this project is to let users get to know more about perfume .Whereby user are able to contribute their own perfume to promote their own perfume to be shared among with the Love Potion community.

---

#### Database

![ERD Diagram](/screenshots/erd-diagram.PNG)

Entity-Relationship Diagram (ERD) is drawn to demostrate the various relationships between entities for the website prior to modelling the database in MongoDB.

An Express server is set up and deployed to [Render](https://render.com/), where API endpoints are accessible via the base URL at [https://ucjune-project02-database.onrender.com](https://ucjune-project02-database.onrender.com).

#### Sitemap

![Sitemap](/screenshots/Project-02-SiteMap.PNG)

| User Stories                                                                                       | Accceptance Criteria                                                                                                        |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| As a Perfume lover , I always want to find out which perfume's fragrance is the best               | Love Potion should be able to list out all the best rated perfume.                                                          |
| As a contributor , I want to be able save all my contribution and able to edit and remove it .     | Love Potion should be able to save all the contribution made by contributor and able to show the result after being search. |
| As someone who wanna a detailed information about the perfume , I want to be able to search for it | Love Potion should be able to show the filtered result.                                                                     |

---

## Limitations and Future Implementations

| Limitations                                                                                 | Future Implementations                                            |
| ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Current result display only shows very simple version of perfume attribute                  | Provide more information regarding the perfume                    |
| Intended to implement product review on perfume but cant complete it due to time constraint | Create a dynamic review form to let user interact with each other |
| No authentication for login credential                                                      | Incorporate with authentication package like JWT token etc.       |
| Visual design is not attractive and friendly enough                                         | Implement more graphic impact like animation to catch user's eye  |

---

## Test Case

The test cases can be found [here](test-case/test-case.pdf).

---

### Design Decisions

#### Color scheme

![Screenshot of color scheme](/screenshots/color-scheme.PNG)

A mix of pink and violet, dusty rose is a gentle, subdued color. While not overly showy, this particular shade of pink embodies a sense of maturity that allows it to stand on its own while also pairing well with others. 

#### Fonts

*Montserrat* is the font family used for the website as it is clean, geometric sans serif fonts with clean, simple letterforms and relaxed spacing.

*kalam*  is a handwriting font family that supports the Devanagari and Latin writing systems that used for the website because as we know perfume is a art , and  the fonts have each been optimized for text usage on screen. All in all, the typeface is a design that feels very personal.

---

## Technologies Used

1. HTML
   - Used to create a webpage
2. CSS

   - Used to styling the webpage

3. [Bootstrap 5.2](https://getbootstrap.com/docs/5.2/getting-started/introduction/)

   - Used for buttons, tabs and offcanvas of website

4. JavaScript

   - Used to make webpage to be responsive

5. [Axios](https://github.com/axios/axios)

   - Used to fetch data from APIs used by website

---

### Backend

1. Javascript

2. [Express](https://expressjs.com/)

3. [MongoDB Node Driver](https://www.mongodb.com/docs/drivers/node/current/)

   - To communicate with MongoDB database

4. [cors](https://www.npmjs.com/package/cors)

   - Middleware to enable Cross-Origin Resource Sharing (CORS)

5. [dotenv](https://www.npmjs.com/package/dotenv)
   - To allow loading of environment variables from .env file

---

### Frontend

1. HTML

2. CSS

3. Javascript

4. [React](https://reactjs.org/)

5. [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

   - Used for styling website

6. [React Bootstrap](https://react-bootstrap.github.io/)

   - Used for styling website

7. [Axios](https://github.com/axios/axios)

   - Used to communicate with Express server to create, read, update and delete data in database

8. [Font Awesome](https://fontawesome.com/)
   - Used for icons displayed in website

---

## Credits and Acknowledgement

### Fonts :

1. [Google Fonts](https://fonts.google.com/) - Used for fonts displayed in website

### Icons :

1. [Font Awesome](https://fontawesome.com/) - Used in tabs and buttons of website

2. [React-Icon](https://react-icons.github.io/react-icons/) - Used for beautiful icons of website

3. [Flaticon]("https://www.flaticon.com/free-icons/perfume") - Used for Icon on the browser

4. [Lottiefiles](https://lottiefiles.com/) - Adapted CSS spinner for use in website

### Pop up :

1. [React-Tostify](https://fkhadra.github.io/react-toastify/introduction) - Used for beautiful Pop up of website

### Background Image :

1. [Beautiful Png Image](https://www.pngarts.com/explore/104802) - Used for styling the Hero Section

## Deployment

The web application is hosted by [Netlify](https://www.netlify.com/)

---

## Screenshot

[CreateMockup.com](https://www.createmockup.com/generate/) - Used to generate responsive website mockup for README file
