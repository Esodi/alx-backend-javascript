// main.js
import HolbertonCourse from './2-hbtn_course.js';

try {
  // Creating an instance of HolbertonCourse
  const course = new HolbertonCourse('JavaScript 101', 10, ['John Doe', 'Jane Smith']);
  
  // Displaying the initial properties
  console.log('Course Name:', course.name);
  console.log('Course Length:', course.length);
  console.log('Course Students:', course.students);

  // Modifying the properties
  course.name = 'Advanced JavaScript';
  course.length = 15;
  course.students = ['Alice Johnson', 'Bob Brown'];

  // Displaying the modified properties
  console.log('Updated Course Name:', course.name);
  console.log('Updated Course Length:', course.length);
  console.log('Updated Course Students:', course.students);

  // Trying to set invalid values to trigger errors
  try {
    course.name = 123; // Should throw an error
  } catch (error) {
    console.error('Error setting name:', error.message);
  }

  try {
    course.length = -5; // Should throw an error
  } catch (error) {
    console.error('Error setting length:', error.message);
  }

  try {
    course.students = 'Not an array'; // Should throw an error
  } catch (error) {
    console.error('Error setting students:', error.message);
  }

} catch (error) {
  console.error('Error creating course:', error.message);
}

