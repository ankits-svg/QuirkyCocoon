# **EduSphere - Advanced Educational Management Platform**

---

## **Introduction**

Welcome to EduSphere, an innovative educational management platform that redefines the learning experience for students, instructors, and administrators in educational institutions. This readme will guide you through the project's goals, key features, technology stack, milestones, and deliverables.

---

## **Project Description**

EduSphere is a state-of-the-art educational management web application designed to revolutionize education. It offers comprehensive solutions for course management, assignment submission, enrollment, and communication. Additionally, the platform incorporates cutting-edge AI features, including an academic advisor chatbot and AI-generated assignments.

---

## **Key Features**

1. **Student and Instructor Profiles**: Manage student and instructor profiles, including details such as name, gender, contact information, and more.

2. **Course Management**: Create, view, and manage courses with details like course code, course name, department, and instructor.

3. **Enrollment and Attendance**: Enroll students in courses, track attendance, and manage course enrollments.

4. **Assignment and Submission**: Instructors can add assignments, students can make submissions, and submission statuses are tracked.

5. **Course Dashboard**: Each course has a dedicated dashboard displaying enrolled students, assignments, and announcements.

6. **Automated Communication**: Send automated reminders about assignments, due dates, and course updates.

7. **AI Academic Advisor Chatbot**: A machine learning-powered chatbot offers personalized academic advice, career guidance, and course recommendations.

8. **AI Assignment Generator**: Utilize generative AI to assist instructors in creating diverse and challenging assignments.

---

## **Technology Stack**

- **Front-end**: Angular
- **Back-end**: Django
- **Database**: MySQL
- **AI Integration**: TensorFlow (for chatbot and AI assignment generator)

---

## **API Endpoints**

### **Student Profiles**

- **Create Student Profile**:
  - Endpoint: POST /api/students
  - Payload: Student profile details
  - Response: Created student profile details

- **Get Student Profile**:
  - Endpoint: GET /api/students/{student_id}
  - Response: Student profile details

- **Update Student Profile**:
  - Endpoint: PUT /api/students/{student_id}
  - Payload: Updated student profile details
  - Response: Updated student profile details

- **Delete Student Profile**:
  - Endpoint: DELETE /api/students/{student_id}
  - Response: Deleted student profile details

### **Instructor Profiles**

- **Create Instructor Profile**:
  - Endpoint: POST /api/instructors
  - Payload: Instructor profile details
  - Response: Created instructor profile details

- **Get Instructor Profile**:
  - Endpoint: GET /api/instructors/{instructor_id}
  - Response: Instructor profile details

- **Update Instructor Profile**:
  - Endpoint: PUT /api/instructors/{instructor_id}
  - Payload: Updated instructor profile details
  - Response: Updated instructor profile details

- **Delete Instructor Profile**:
  - Endpoint: DELETE /api/instructors/{instructor_id}
  - Response: Deleted instructor profile details

### **Courses**

- **Create Courses**:
  - Endpoint: POST /api/courses
  - Payload: Course details
  - Response: Created course details

- **Get Courses**:
  - Endpoint: GET /api/courses/{course_id}
  - Response: Course details

- **Update Courses**:
  - Endpoint: PUT /api/courses/{course_id}
  - Payload: Updated course details
  - Response:  Updated course details

- **Delete Courses**:
  - Endpoint: DELETE /api/courses/{course_id}
  - Response: Deleted course details

### **Enrollments**


- **Enroll Student in Course**:

  - Endpoint: POST /api/enrollments
  - Payload: Enrollment details (student_id, course_id)
  - Response: Created enrollment details
- **Get Student Enrollments**:

  - Endpoint: GET /api/students/{student_id}/enrollments
  - Response: List of enrolled courses for a student

### **Assignments**


- **Create Assignment**:

  - Endpoint: POST /api/assignments
  - Payload: Assignment details
  - Response: Created assignment details
- **Get Assignment**:

  - Endpoint: GET /api/assignments/{assignment_id}
  - Response: Assignment details
- **Update Assignment**:

  - Endpoint: PUT /api/assignments/{assignment_id}
  - Payload: Updated assignment details
  - Response: Updated assignment details
- **Delete Assignment**:

  - Endpoint: DELETE /api/assignments/{assignment_id}
  - Response: Deleted assignment details

### **Submissions**


- **Submit Assignment**:

  - Endpoint: POST /api/submissions
  - Payload: Submission details (student_id, assignment_id, submission_data)
  - Response: Created submission details
- **Get Submission**:

  - Endpoint: GET /api/submissions/{submission_id}
  - Response: Submission details

### **Departments**


- **Create Department**:

  - Endpoint: POST /api/departments
  - Payload: Department details
  - Response: Created department details

- **Get Department**:

  - Endpoint: GET /api/departments/{department_id}
  - Response: Department details

- **Update Department**:

  - Endpoint: PUT /api/departments/{department_id}
  - Payload: Updated department details
  - Response: Updated department details

- **Delete Department**:

  - Endpoint: DELETE /api/departments/{department_id}
  - Response: Deleted department details

### **Announcements**


- **Create Announcement**:
  - Endpoint:  GET /api/announcements/{announcement_id}
  - Response: Announcement details

- **Get Announcement**:
  - Endpoint: GET /api/courses/{course_id}
  - Response: Course details

- **Update Announcement**:
  - Endpoint: PUT /api/announcements/{announcement_id}
  - Payload: Updated announcement details
  - Response:  Updated announcement details

- **Delete Announcement**:
  - Endpoint: DELETE /api/announcements/{announcement_id}
  - Response:  Deleted announcement details




## **Let's Create EduSphere Together!**
