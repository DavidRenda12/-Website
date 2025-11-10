// Sample blog posts data
const blogPosts = [
    { title: "Optimizing Azure Data Pipelines", date: "2025-11-01", excerpt: "Learn how to make your Azure data pipelines more efficient and cost-effective." },
    { title: "Top 5 Data Engineering Tools", date: "2025-11-03", excerpt: "A curated list of essential tools for modern data engineers." },
    { title: "Building Scalable Data Lakes", date: "2025-11-08", excerpt: "Step-by-step guide to architecting data lakes on Azure." }
];

// Render blog posts dynamically
const blogGrid = document.getElementById('blog-grid');

blogPosts.forEach(post => {
    const postCard = document.createElement('div');
    postCard.classList.add('blog-card');
    postCard.innerHTML = `
        <h3>${post.title}</h3>
        <small>${post.date}</small>
        <p>${post.excerpt}</p>
    `;
    blogGrid.appendChild(postCard);
});
