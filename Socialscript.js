// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    // Mock data representing posts from different platforms
    const mockData = [
      { id: 1, platform: 'Facebook', content: 'Sample Facebook post 1' },
      { id: 2, platform: 'Twitter', content: 'Sample Twitter tweet 1' },
      { id: 3, platform: 'Instagram', content: 'Sample Instagram photo 1' }
    ];
  
    const postsContainer = document.getElementById('posts-container');
  
    // Function to render posts
    function renderPosts(posts) {
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
  
        const platformElement = document.createElement('h3');
        platformElement.textContent = post.platform;
  
        const contentElement = document.createElement('p');
        contentElement.classList.add('post-content');
        contentElement.textContent = post.content;
  
        postElement.appendChild(platformElement);
        postElement.appendChild(contentElement);
        postsContainer.appendChild(postElement);
      });
    }
  
    // Initially render mock data
    renderPosts(mockData);
  });
  