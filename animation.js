// Select all timeline items
const timelineItems = document.querySelectorAll('.timeline li');

// Add event listeners to each item
timelineItems.forEach(item => {
  // Add mouseenter event listener
  item.addEventListener('mouseenter', () => {
    // Add class to animate the item
    item.classList.add('hovered');
  });

  // Add mouseleave event listener
  item.addEventListener('mouseleave', () => {
    // Remove class to stop the animation
    item.classList.remove('hovered');
    // Add class to reset the item back to its original state
    item.classList.add('reset');
    // Remove the reset class after a short delay
    setTimeout(() => {
      item.classList.remove('reset');
    }, 100);
  });
});
