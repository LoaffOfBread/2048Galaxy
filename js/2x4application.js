// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  console.log('2x4 Application starting...');
  console.log('Available constructors:', {
    GameManager2x4: typeof GameManager2x4,
    KeyboardInputManager: typeof KeyboardInputManager,
    HTMLActuator: typeof HTMLActuator,
    LocalStorageManager2x4: typeof LocalStorageManager2x4
  });
  
  try {
    // Initialize 2x4 game with specific storage manager
    var game = new GameManager2x4(4, KeyboardInputManager, HTMLActuator, LocalStorageManager2x4, 2);
    console.log('GameManager created successfully!', game);
    console.log('Grid size:', game.size);
    console.log('Initial grid state:', game.grid);
  } catch (error) {
    console.error('Error creating GameManager:', error);
    alert('Error: ' + error.message);
  }
});
