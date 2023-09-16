# FAQ

### Question 1. Add at least 3 Project features.

- **Course Index:** The website displays a comprehensive course index that provides detailed information about available courses. This index includes course names, course details, price, credit hours. Students will be able to search and filter courses based on various criteria such as course availability, total credit hour and price.

- **Online Registration:** The website shows a register where the students can do their registration. Students will be able to select courses clicking on select button from the catalog and add them to their register. Students will get updates on course availability and credit hour limit so that they can select easily and complete the registration process fast.

- **One-page layout:** The website demonstrates a one-page layout for a course registration landing page where all the essential information and actions related to a specific course are presented on a single web page. This layout is often used to provide a concise and focused user experience, making it easier for prospective students to learn about the course and initiate the registration process.

- **Toast Notifications:** The website provides notifications to the students about course selection and wait alert. Students will be shown to a personalized register that displays their registered courses, total credit hours, remaining credit hours and total price. They will also be able to make adjustments to their schedule, drop courses, with the system automatically checking for conflicts and prerequisites. If any course is selected repeatedly, students will get warned that they have already registered. Also, if total credit hour exceeds 20, students will get informed about the total credit hour limit and wait alert.

- **Responsive Design:** The website is responsive which allows students to adapt to different screen sizes and devices (e.g., desktop, tablet, mobile).

- **Visible Elements:** Visible elements such as images, icons, and buttons are strategically placed throughout the page to enhance student engagement and convey information effectively.

### Question 2. Discuss how you managed the state in your assignment project.

React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component’s state object. When the state object changes, the component will re-render itself. In the perspective of my assignment project, I tried to set effective states which ensures that the website functions smoothly, provides a seamless user experience, and accurately reflects the real-time status of courses and registrations. How I managed the state in my assignment project in the context of a course registration website is described below:

- **Courses State:** Firstly, I declared a use-state for courses, called event handler to handle the state, imported prop-types as function and set the use state to hold the state where the website needs to fetch the data by the use-effect and to map the courses index based on course id. Here course state management ensures that students can see the display of courses index which includes course image, course name, course details, price, credit hour and select courses to initiate their registration.

- **Selected Courses State:** Secondly, I declared use-state for selected courses, called event handler to add to the register, imported prop-types as array in the jsx file and set the use state where the website needs to find the selected course if a student triggers the select button. It determines whether a student selects a course, their selection is right. The availability of courses is a critical aspect of course registration. Here selected course state tracks the selection of a single course and ensures whether any repetition of a single course arises, alert the student that repetition isn’t allowed. It prevents over-enrollment in each course and ensures that students can only register for a single course once.

- **Total Credit Hour State:** Thirdly, I declared use-state for total credit hours, called event handler to add to register in each click of select button, imported prop-types as number in the jsx file and set the use-state where the website needs to calculate the total credit hours.  Here, if a student selects a single course, credit hour of the particular course will be added to the total credit hour in the register in each click. If the total credit hour exceeds 20, website will send notification to the student to wait for next enrollment. When a student adds a course, the state is updated accordingly.

- **Remaining Credit Hour State:** Fourthly, I declared use-state for remaining credit hours, called event handler to add to register, imported prop-types as number in the jsx file and set the use-state by the value 20 where the website needs to calculate remaining credit hour. Here, if a student selects a single course, credit hour of that course will be reduced from the remaining credit hour in each click. If can.t be lower than 0. If it happens, website will send notification regarding this. If a student adds a course, the state is updated accordingly.

- **Total Price State:** Lastly, I declared use-state for total price, called event handler to add to register, imported prop-types as number in the jsx file and set the use-state where the website needs to calculate the total price. If a student selects a single course, price of the particular course will be added to the total price in the register. Here the total price state ensures the website displays the total price in a single registration. The state is updated accordingly based on selecting courses.

Effective state management is essential to create a reliable and user-friendly course registration website. This ensures that students, faculty, and administrators can interact with the website efficiently and accurately, facilitating the course registration process.