import { NextResponse } from 'next/server';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export async function GET() {
  try {
    // Fetch blog posts from the admin API
    const response = await axios.get(`${API_URL}/blog`);
    
    if (response.data && response.data.success) {
      return NextResponse.json(
        { 
          posts: response.data.posts,
          success: true 
        }, 
        { status: 200 }
      );
    } else {
      throw new Error('Invalid response format');
    }
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      { 
        error: "Failed to fetch blog posts",
        success: false 
      }, 
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    // In a real application, we would:
    // 1. Validate the user is authenticated and authorized
    // 2. Validate the request body
    // 3. Save the new blog post to the database
    // 4. Return the created post

    const body = await request.json();
    
    // Simple validation
    if (!body.title || !body.content) {
      return NextResponse.json(
        { 
          error: "Title and content are required",
          success: false 
        }, 
        { status: 400 }
      );
    }

    // Mock creating a new post
    const newPost = {
      id: `post-${Date.now()}`,
      slug: body.slug || body.title.toLowerCase().replace(/\s+/g, '-'),
      date: new Date().toISOString().split('T')[0],
      ...body
    };

    // In a real app, we would save to database here

    return NextResponse.json(
      { 
        post: newPost,
        success: true 
      }, 
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating blog post:", error);
    return NextResponse.json(
      { 
        error: "Failed to create blog post",
        success: false 
      }, 
      { status: 500 }
    );
  }
}
