function renderUser(res, user) { // Function to render user data in JSON format
  res.json({   // Send JSON response
    status: 'success', // Indicate success status
    data: user // Include user data
  });
}

function renderError(res, statusCode, message) { // Function to render error responses
  res.status(statusCode).json({     // Send error response
    status: 'error',   // Indicate error status
    message  // Provide error message
  });
}

module.exports = { renderUser, renderError };  // Export functions for use in controllers
// This module handles rendering user data and error responses in JSON format