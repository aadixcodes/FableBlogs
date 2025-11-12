'use client';
import { useState, useEffect } from 'react';

const AdminDashboard = () => {
  // Form state
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    slug: '',
    bannerImage: '',
    thumbnailImage: '',
    excerpt: '',
    content: '',
    author: '',
    readTime: '',
    category: '',
    homePageDisplay: '',
    pageDisplay: ''
  });

  // Posts data
  const [posts, setPosts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  // Filter and search state
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterDate, setFilterDate] = useState('');

  // Delete confirmation state
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  // Sample categories and their options
  const categoryOptions = {
    blog: {
      homePage: ['Hero Banner', 'Blog Section'],
      page: ['banner', 'all blogs']
    },
    story: {
      homePage: ['Hero Banner', 'Stories Section'],
      page: ['Latest Stories Section', 'Top stories section', 'all stories section']
    },
    'news article': {
      homePage: ['Hero Banner', 'News Section'],
      page: ['top section', 'bottom col 1', 'bottom col 2', 'bottom col 4', 'top news']
    }
  };

  // Initialize with sample data
  useEffect(() => {
    const samplePosts = [
      {
        id: 1,
        title: 'Getting Started with Next.js',
        slug: 'getting-started-with-nextjs',
        bannerImage: '/banner1.jpg',
        thumbnailImage: '/thumb1.jpg',
        excerpt: 'Learn how to start with Next.js framework',
        content: '<p>This is a sample blog post content</p>',
        author: 'John Doe',
        readTime: '5 min',
        category: 'blog',
        homePageDisplay: 'Hero Banner',
        pageDisplay: 'banner',
        date: '2024-01-15'
      },
      {
        id: 2,
        title: 'Amazing Travel Story',
        slug: 'amazing-travel-story',
        bannerImage: '/banner2.jpg',
        thumbnailImage: '/thumb2.jpg',
        excerpt: 'My incredible journey through mountains',
        content: '<p>This is an amazing travel story</p>',
        author: 'Jane Smith',
        readTime: '8 min',
        category: 'story',
        homePageDisplay: 'Stories Section',
        pageDisplay: 'Latest Stories Section',
        date: '2024-01-10'
      }
    ];
    setPosts(samplePosts);
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Auto-generate slug from title
    if (name === 'title') {
      const slug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
  };

  // Handle content formatting
  const handleContentFormat = (command, value = null) => {
    document.getElementById('content').focus();
    document.execCommand(command, false, value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isEditing) {
      // Update existing post
      setPosts(posts.map(post => 
        post.id === formData.id ? { ...formData, date: post.date } : post
      ));
    } else {
      // Add new post
      const newPost = {
        ...formData,
        id: Date.now(),
        date: new Date().toISOString().split('T')[0]
      };
      setPosts([...posts, newPost]);
    }
    
    handleCancel();
  };

  // Handle edit
  const handleEdit = (post) => {
    setFormData(post);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle delete
  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
    setDeleteConfirm(null);
  };

  // Handle cancel
  const handleCancel = () => {
    setFormData({
      id: '',
      title: '',
      slug: '',
      bannerImage: '',
      thumbnailImage: '',
      excerpt: '',
      content: '',
      author: '',
      readTime: '',
      category: '',
      homePageDisplay: '',
      pageDisplay: ''
    });
    setIsEditing(false);
  };

  // Handle view
  const handleView = (slug) => {
    window.open(`/${slug}`, '_blank');
  };

  // Filter posts based on search and filters
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !filterCategory || post.category === filterCategory;
    const matchesDate = !filterDate || post.date === filterDate;

    return matchesSearch && matchesCategory && matchesDate;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Blog Admin Panel</h1>
          <p className="text-gray-600 mt-2">Manage your blog posts, stories, and news articles</p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            {isEditing ? 'Edit Post' : 'Create New Post'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4F69] focus:border-transparent"
                    required
                  />
                </div>

                {/* Slug */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Slug <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4F69] focus:border-transparent"
                    required
                  />
                </div>

                {/* Banner Image URL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Banner Image URL
                  </label>
                  <input
                    type="url"
                    name="bannerImage"
                    value={formData.bannerImage}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4F69] focus:border-transparent"
                  />
                </div>

                {/* Thumbnail Image URL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Thumbnail Image URL
                  </label>
                  <input
                    type="url"
                    name="thumbnailImage"
                    value={formData.thumbnailImage}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4F69] focus:border-transparent"
                  />
                </div>

                {/* Author */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Author <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4F69] focus:border-transparent"
                    required
                  />
                </div>

                {/* Read Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Read Time
                  </label>
                  <input
                    type="text"
                    name="readTime"
                    value={formData.readTime}
                    onChange={handleInputChange}
                    placeholder="e.g., 5 min"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4F69] focus:border-transparent"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4F69] focus:border-transparent"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="blog">Blog</option>
                    <option value="story">Story</option>
                    <option value="news article">News Article</option>
                  </select>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {/* Excerpt */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Excerpt <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4F69] focus:border-transparent"
                    required
                  />
                </div>

                {/* Content with Rich Text Editor */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Content <span className="text-red-500">*</span>
                  </label>
                  
                  {/* Formatting Toolbar */}
                  <div className="flex flex-wrap gap-1 mb-2 p-2 border border-gray-300 rounded-t-md bg-gray-50">
                    <button
                      type="button"
                      onClick={() => handleContentFormat('bold')}
                      className="px-2 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200"
                      title="Bold"
                    >
                      <strong>B</strong>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleContentFormat('italic')}
                      className="px-2 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200"
                      title="Italic"
                    >
                      <em>I</em>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleContentFormat('insertUnorderedList')}
                      className="px-2 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200"
                      title="Bullet List"
                    >
                      • List
                    </button>
                    <button
                      type="button"
                      onClick={() => handleContentFormat('formatBlock', 'blockquote')}
                      className="px-2 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200"
                      title="Quote"
                    >
                      " Quote
                    </button>
                    <select
                      onChange={(e) => handleContentFormat('fontSize', e.target.value)}
                      className="px-2 py-1 text-sm border border-gray-300 rounded hover:bg-gray-200"
                    >
                      <option value="">Size</option>
                      <option value="1">Small</option>
                      <option value="3">Medium</option>
                      <option value="5">Large</option>
                      <option value="7">X-Large</option>
                    </select>
                  </div>

                  <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    rows="8"
                    className="w-full px-3 py-2 border border-gray-300 rounded-b-md focus:outline-none focus:ring-2 focus:ring-[#FF4F69] focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Conditional Fields based on Category */}
            {formData.category && (
              <div className="border-t pt-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Home Page Display */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Home Page Display
                    </label>
                    <div className="space-y-2">
                      {categoryOptions[formData.category]?.homePage.map(option => (
                        <label key={option} className="flex items-center">
                          <input
                            type="radio"
                            name="homePageDisplay"
                            value={option}
                            checked={formData.homePageDisplay === option}
                            onChange={handleInputChange}
                            className="mr-2 text-[#FF4F69] focus:ring-[#FF4F69]"
                          />
                          <span className="text-sm text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Page Display */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      {formData.category.charAt(0).toUpperCase() + formData.category.slice(1)} Page Display
                    </label>
                    <div className="space-y-2">
                      {categoryOptions[formData.category]?.page.map(option => (
                        <label key={option} className="flex items-center">
                          <input
                            type="radio"
                            name="pageDisplay"
                            value={option}
                            checked={formData.pageDisplay === option}
                            onChange={handleInputChange}
                            className="mr-2 text-[#FF4F69] focus:ring-[#FF4F69]"
                          />
                          <span className="text-sm text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4 border-t">
              <button
                type="submit"
                className="flex-1 bg-[#FF4F69] text-white py-3 px-4 rounded-md hover:bg-[#e03e56] transition duration-200 font-medium"
              >
                {isEditing ? 'Update Post' : 'Publish Post'}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-400 transition duration-200 font-medium"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Search & Filter Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Search
              </label>
              <input
                type="text"
                placeholder="Search by title, excerpt, or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4F69] focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Category
              </label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4F69] focus:border-transparent"
              >
                <option value="">All Categories</option>
                <option value="blog">Blog</option>
                <option value="story">Story</option>
                <option value="news article">News Article</option>
              </select>
            </div>

            {/* Date Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Date
              </label>
              <input
                type="date"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4F69] focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Posts Table Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">
              All Posts ({filteredPosts.length})
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#FF4F69] uppercase tracking-wider">
                    S.No.
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#FF4F69] uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#FF4F69] uppercase tracking-wider">
                    Excerpt
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#FF4F69] uppercase tracking-wider">
                    Author
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#FF4F69] uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#FF4F69] uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#FF4F69] uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post, index) => (
                    <tr key={post.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900 max-w-xs">
                          {post.title}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-500 max-w-xs">
                          {post.excerpt}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {post.author}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {post.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#FF4F69] text-white capitalize">
                          {post.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-3">
                          <button
                            onClick={() => handleEdit(post)}
                            className="text-[#FF4F69] hover:text-[#e03e56] font-medium"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(post.id)}
                            className="text-red-600 hover:text-red-900 font-medium"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => handleView(post.slug)}
                            className="text-blue-600 hover:text-blue-900 font-medium"
                          >
                            View
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="px-6 py-8 text-center">
                      <div className="text-gray-500">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p className="mt-2">No posts found. Create your first post!</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Confirm Delete
            </h3>
            <p className="text-gray-600 mb-4">
              Are you sure you want to delete this post? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;