import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Esmaeil Abedi Admin",
  description: "Admin dashboard for Esmaeil Abedi's personal website",
};

// Mock data for dashboard stats
const stats = [
  {
    id: 'total-posts',
    title: 'Total Posts',
    value: '24',
    change: '+3',
    changeType: 'increase', // increase or decrease
    period: 'from last month'
  },
  {
    id: 'total-projects',
    title: 'Total Projects',
    value: '12',
    change: '+1',
    changeType: 'increase',
    period: 'from last month'
  },
  {
    id: 'page-views',
    title: 'Page Views',
    value: '14.2K',
    change: '+12%',
    changeType: 'increase',
    period: 'from last month'
  },
  {
    id: 'engagement',
    title: 'Engagement Rate',
    value: '5.4%',
    change: '+0.8%',
    changeType: 'increase',
    period: 'from last month'
  }
];

// Mock data for recent posts
const recentPosts = [
  {
    id: 'post-1',
    title: 'Integrating AI Features into Next.js Applications',
    status: 'published',
    date: '2023-06-15',
    views: 1240
  },
  {
    id: 'post-2',
    title: 'TypeScript Best Practices for Front-End Developers',
    status: 'published',
    date: '2023-05-20',
    views: 952
  },
  {
    id: 'post-3',
    title: 'Building Accessible Web Applications',
    status: 'draft',
    date: '2023-07-02',
    views: 0
  },
  {
    id: 'post-4',
    title: 'Modern State Management in React',
    status: 'draft',
    date: '2023-07-01',
    views: 0
  }
];

// Mock data for recent projects
const recentProjects = [
  {
    id: 'project-1',
    title: 'AI-Powered Analytics Dashboard',
    status: 'published',
    date: '2023-04-10',
    views: 875
  },
  {
    id: 'project-2',
    title: 'E-Commerce Platform',
    status: 'published',
    date: '2023-02-15',
    views: 1024
  },
  {
    id: 'project-3',
    title: 'Portfolio Website Redesign',
    status: 'draft',
    date: '2023-06-28',
    views: 0
  }
];

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map(stat => (
          <div key={stat.id} className="bg-white rounded-lg shadow-md p-6">
            <p className="text-sm text-gray-500 font-medium mb-1">{stat.title}</p>
            <div className="flex items-baseline">
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              <span className={`ml-2 text-sm font-medium ${
                stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">{stat.period}</p>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {/* Recent Posts */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-800">Recent Posts</h2>
            <a href="/admin/posts" className="text-blue-600 text-sm hover:underline">View all</a>
          </div>
          <div className="divide-y divide-gray-200">
            {recentPosts.map(post => (
              <div key={post.id} className="px-6 py-4 flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-800">{post.title}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                      post.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.status === 'published' ? 'Published' : 'Draft'}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{post.views.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">views</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recent Projects */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-800">Recent Projects</h2>
            <a href="/admin/projects" className="text-blue-600 text-sm hover:underline">View all</a>
          </div>
          <div className="divide-y divide-gray-200">
            {recentProjects.map(project => (
              <div key={project.id} className="px-6 py-4 flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-800">{project.title}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                      project.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status === 'published' ? 'Published' : 'Draft'}
                    </span>
                    <span className="text-xs text-gray-500">{project.date}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{project.views.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">views</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-medium text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a 
            href="/admin/posts/new" 
            className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <div className="bg-blue-100 p-3 rounded-full mb-3">
              <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-800">New Post</span>
          </a>
          <a 
            href="/admin/projects/new" 
            className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-purple-50 transition-colors"
          >
            <div className="bg-purple-100 p-3 rounded-full mb-3">
              <svg className="h-6 w-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-800">New Project</span>
          </a>
          <a 
            href="/admin/media" 
            className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-green-50 transition-colors"
          >
            <div className="bg-green-100 p-3 rounded-full mb-3">
              <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-800">Media Library</span>
          </a>
          <a 
            href="/admin/settings" 
            className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="bg-gray-100 p-3 rounded-full mb-3">
              <svg className="h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-800">Settings</span>
          </a>
        </div>
      </div>
    </div>
  );
}
