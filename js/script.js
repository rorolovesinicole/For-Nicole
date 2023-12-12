document.addEventListener('DOMContentLoaded', function () {
    const messages = document.querySelectorAll('.description .message');
    
    function showMessage(index) {
      if (index < messages.length) {
        const currentMessage = messages[index];
        
        // Display message
        currentMessage.style.display = 'inline-block';
        
        // Get message's visibility duration
        const visibilityDuration = getMessageVisibilityDuration(currentMessage);
        
        // Fade in
        setTimeout(function () {
          currentMessage.style.opacity = 1;
          
          // Keep it visible for the desired duration
          setTimeout(function () {
            // Fade out
            currentMessage.style.opacity = 0;
            
            // Hide message
            setTimeout(function () {
              currentMessage.style.display = 'none';
              
              // Show the next message after a delay
              const delay = getDelayBeforeNextMessage(index);
              setTimeout(function () {
                showMessage(index + 1);
              }, delay);
            }, 1000); // Adjust the fade-out duration as needed
          }, visibilityDuration);
        }, 100); // Adjust the fade-in duration as needed
      }
    }
    
    function getMessageVisibilityDuration(message) {
      // Replace this with your specific logic to get the desired duration for each message
      // You can use attributes, data tags, or any other method to store the durations
      const duration = message.dataset.visibilityDuration || 2000; // Default duration of 2 seconds
      return duration;
    }
    
    function getDelayBeforeNextMessage(index) {
      // Replace this with your specific logic to get the delay between messages (optional)
      // You can use a fixed delay or adjust based on the message content
      const delay = 1000; // Default delay of 1 second
      return delay;
    }
    
    showMessage(0);
  });
  