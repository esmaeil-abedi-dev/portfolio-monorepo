import { NextResponse } from 'next/server';
import prisma from '@/lib/db/prisma';

export async function GET() {
  try {
    // Fetch all published blog posts with their authors and tags
    const posts = await prisma.post.findMany({
      where: {
        published: true,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        tags: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        publishedAt: 'desc',
      },
    });

    return NextResponse.json(
      { 
        posts,
        success: true 
      }, 
      { status: 200 }
    );
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
    // In a real implementation, you would verify the user's session here
    // For this example, we'll skip authentication and use a hardcoded admin user
    // Get post data from request body
    const data = await request.json();
    
    // Get the first admin user from the database
    const user = await prisma.user.findFirst({
      where: {
        role: 'admin',
      },
    });
    
    if (!user) {
      return NextResponse.json(
        { 
          error: "User not found",
          success: false 
        }, 
        { status: 404 }
      );
    }
    
    // Extract tag names from the request
    const tagNames = data.tags || [];
    delete data.tags;
    
    // Create the post
    const post = await prisma.post.create({
      data: {
        ...data,
        authorId: user.id,
        tags: {
          connectOrCreate: tagNames.map((name: string) => ({
            where: { name },
            create: { name },
          })),
        },
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        tags: true,
      },
    });
    
    return NextResponse.json(
      { 
        post,
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
