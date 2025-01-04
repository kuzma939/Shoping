// Function to handle form submission
export const handleFormSubmit = ({
  e, // Form submission event
  setFormSubmitted, // Function to set the form submission state
  setSuccessMessageVisible, // Function to display the success message
  setProductData, // Function to reset product data
  setFormValues, // Function to reset form values
}) => {
  e.preventDefault(); // Prevent default form behavior

  setFormSubmitted(true); // Set the form submission state
  setSuccessMessageVisible(true); // Display the success message

  // Reset product data
  setProductData({
    name: null,
    price: null,
    description: null,
    image: "/4.jpg", 
    color: null,
    size: null,
    quantity: null,
    sku: null,
  });

  // Reset form values
  setFormValues({
    firstName: "", 
    lastName: "", 
    phone: "", 
    email: "", 
    message: "", 
  });

  // Timer to hide the success message
  setTimeout(() => {
    setFormSubmitted(false); // Reset form submission state
    setSuccessMessageVisible(false); // Hide success message
  }, 8000); // Duration: 8 seconds
};

// Function to handle changes in form values
export const handleInputChange = (e, setFormValues) => {
  const { name, value } = e.target; // Get the name and value of the changed field
  setFormValues((prevValues) => ({
    ...prevValues, 
    [name]: value, 
  }));
};
