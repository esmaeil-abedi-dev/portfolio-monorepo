import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    
    // Fetch the specific blog post from the admin API
    const response = await axios.get(`${API_URL}/blog/${slug}`);
    
    if (response.data && response.data.success && response.data.post) {
      return NextResponse.json(
        { 
          post: response.data.post,
          success: true 
        }, 
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { 
          error: "Blog post not found",
          success: false 
        }, 
        { status: 404 }
      );
    }
  } catch (error) {
    console.error(`Error fetching blog post with slug: ${params.slug}`, error);
    return NextResponse.json(
      { 
        error: "Failed to fetch blog post",
        success: false 
      }, 
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    const body = await request.json();
    
    // Update the blog post via the admin API
    const response = await axios.put(`${API_URL}/blog/${slug}`, body);
    
    if (response.data && response.data.success) {
      return NextResponse.json(
        { 
          post: response.data.post,
          success: true 
        }, 
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { 
          error: "Failed to update blog post",
          success: false 
        }, 
        { status: 500 }
      );
    }
  } catch (error) {
    console.error(`Error updating blog post with slug: ${params.slug}`, error);
    return NextResponse.json(
      { 
        error: "Failed to update blog post",
        success: false 
      }, 
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    
    // Delete the blog post via the admin API
    const response = await axios.delete(`${API_URL}/blog/${slug}`);
    
    if (response.data && response.data.success) {
      return NextResponse.json(
        { 
          success: true,
          message: `Blog post '${slug}' successfully deleted`
        }, 
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { 
          error: "Blog post not found or could not be deleted",
          success: false 
        }, 
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { 
        success: true,
        message: `Blog post '${slug}' successfully deleted`
      }, 
      { status: 200 }
    );
  } catch (error) {
    console.error(`Error deleting blog post with slug: ${params.slug}`, error);
    return NextResponse.json(
      { 
        error: "Failed to delete blog post",
        success: false 
      }, 
      { status: 500 }
    );
  }
}
