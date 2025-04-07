// Function to toggle the animation preference and apply the animation if true
function toggleAnimationPreference() {
    // Check if the animation preference exists in localStorage
    let prefersAnimation = localStorage.getItem('prefersAnimation');
    
    // Toggle the animation preference and update localStorage
    if (prefersAnimation === 'true') {
      localStorage.setItem('prefersAnimation', 'false');
      alert('Animation disabled');
    } else {
      localStorage.setItem('prefersAnimation', 'true');
      alert('Animation enabled');
    }
    
    // Update the page based on the user's preference
    applyAnimationPreference();
  }
  
  // Function to apply the animation preference on page load
  function applyAnimationPreference() {
    const prefersAnimation = localStorage.getItem('prefersAnimation');
    
    const button = document.querySelector('button');
    
    if (prefersAnimation === 'false') {
      // Remove hover animation if user disabled it
      button.style.animation = 'none';
    } else {
      // Add the hover animation back if enabled
      button.style.animation = '';
    }
  }
  
  // Initially check and apply user's animation preference
  window.onload = function() {
    applyAnimationPreference();
  };
  
  // Button to toggle animation preference
  const toggleButton = document.querySelector('#toggleButton');
  toggleButton.addEventListener('click', toggleAnimationPreference);
  