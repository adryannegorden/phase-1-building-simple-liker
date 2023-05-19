const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

const errorModal = document.getElementById('modal');
const hearts = document.querySelectorAll('.like-glyph');

errorModal.classList.add('hidden');

hearts.forEach((heart) => {
  heart.addEventListener('click', () => {
    errorModal.classList.add('hidden');
    
    const isLiked = heart.classList.contains('activated-heart');
    
    mimicServerCall()
      .then(() => {
        if (isLiked) {
          heart.classList.remove('activated-heart');
          heart.textContent = EMPTY_HEART;
        } else {
          heart.classList.add('activated-heart');
          heart.textContent = FULL_HEART;
        }
      })
      .catch((error) => {
        errorModal.textContent = error;
        errorModal.classList.remove('hidden');
        
        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000);
      });
  });
});
