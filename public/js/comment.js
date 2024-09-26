document.querySelector('#commentForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const content = document.querySelector('#content').value;
    const postId = document.querySelector('#postId').value;
  
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ content, postId }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to add comment');
    }
  });
  