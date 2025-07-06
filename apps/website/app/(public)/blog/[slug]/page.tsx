import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCalendarAlt, FaClock, FaTag } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import ContentRenderer from "@/components/content/ContentRenderer";

// Mock blog post data (would be fetched from an API/CMS in production)
const blogPosts = [
  {
    id: "nextjs-ai-integration",
    title: "Integrating AI Features into Next.js Applications",
    slug: "integrating-ai-features-into-nextjs-applications",
    excerpt: "A comprehensive guide to adding AI capabilities to your Next.js applications using TensorFlow.js, OpenAI API, and other tools.",
    date: "2023-06-15",
    readTime: "8 min read",
    category: "Development",
    tags: ["Next.js", "AI", "TensorFlow.js", "React"],
    coverImage: "/images/blog/ai-nextjs.jpg",
    featured: true,
    content: `
      <p>Artificial Intelligence is revolutionizing the way we build web applications. By integrating AI features into your Next.js applications, you can create more intelligent, responsive, and personalized user experiences.</p>

      <h2>Why Integrate AI into Your Next.js Application?</h2>
      <p>There are numerous benefits to incorporating AI into your Next.js projects:</p>
      <ul>
        <li>Enhanced user experience through personalization</li>
        <li>Automated content generation and curation</li>
        <li>Intelligent search and recommendation systems</li>
        <li>Natural language processing capabilities</li>
        <li>Image and video recognition</li>
      </ul>

      <h2>Getting Started with TensorFlow.js</h2>
      <p>TensorFlow.js is a library for machine learning in JavaScript that enables you to define, train, and run machine learning models entirely in the browser.</p>

      <pre><code>
      // Install TensorFlow.js
      npm install @tensorflow/tfjs

      // In your Next.js component
      import * as tf from '@tensorflow/tfjs';

      function AIComponent() {
        // Simple example of using TensorFlow.js
        const model = tf.sequential();
        model.add(tf.layers.dense({units: 1, inputShape: [1]}));
        
        model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
        
        const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
        const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);
        
        model.fit(xs, ys, {epochs: 10}).then(() => {
          // Model is trained, now use it for predictions
        });
        
        return (
          <div>AI Component</div>
        );
      }
      </code></pre>

      <h2>Integrating OpenAI API</h2>
      <p>The OpenAI API provides access to powerful language models like GPT-4, which can be used for text generation, summarization, translation, and more.</p>

      <pre><code>
      // Install OpenAI package
      npm install openai
      
      // In your API route (pages/api/generate.js)
      import { Configuration, OpenAIApi } from "openai";

      const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);

      export default async function handler(req, res) {
        try {
          const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: req.body.prompt,
            max_tokens: 100
          });
          
          res.status(200).json({ result: completion.data.choices[0].text });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
      </code></pre>

      <h2>Client-Side Implementation</h2>
      <p>Here's how you can call the OpenAI API from your Next.js frontend:</p>

      <pre><code>
      import { useState } from 'react';

      export default function AITextGenerator() {
        const [prompt, setPrompt] = useState('');
        const [result, setResult] = useState('');
        const [loading, setLoading] = useState(false);
        
        const generateText = async () => {
          setLoading(true);
          try {
            const response = await fetch('/api/generate', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ prompt }),
            });
            
            const data = await response.json();
            setResult(data.result);
          } catch (error) {
            console.error('Error:', error);
          } finally {
            setLoading(false);
          }
        };
        
        return (
          <div>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt"
              rows={4}
              className="w-full p-2 border rounded"
            />
            <button
              onClick={generateText}
              disabled={loading}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {loading ? 'Generating...' : 'Generate Text'}
            </button>
            {result && (
              <div className="mt-4 p-4 bg-gray-100 rounded">
                <h3 className="font-bold">Result:</h3>
                <p>{result}</p>
              </div>
            )}
          </div>
        );
      }
      </code></pre>

      <h2>Image Recognition with TensorFlow.js</h2>
      <p>You can also use pre-trained models for image recognition:</p>

      <pre><code>
      import { useEffect, useState, useRef } from 'react';
      import * as tf from '@tensorflow/tfjs';
      import * as mobilenet from '@tensorflow-models/mobilenet';

      export default function ImageClassifier() {
        const [model, setModel] = useState(null);
        const [predictions, setPredictions] = useState([]);
        const [loading, setLoading] = useState(false);
        const imageRef = useRef(null);
        
        useEffect(() => {
          const loadModel = async () => {
            try {
              const model = await mobilenet.load();
              setModel(model);
            } catch (error) {
              console.error('Error loading model:', error);
            }
          };
          
          loadModel();
        }, []);
        
        const classifyImage = async () => {
          if (!model || !imageRef.current) return;
          
          setLoading(true);
          try {
            const predictions = await model.classify(imageRef.current);
            setPredictions(predictions);
          } catch (error) {
            console.error('Error classifying image:', error);
          } finally {
            setLoading(false);
          }
        };
        
        return (
          <div>
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                      if (imageRef.current) {
                        imageRef.current.src = e.target.result;
                      }
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </div>
            
            <div className="my-4">
              <img
                ref={imageRef}
                src="#"
                alt="Upload an image to classify"
                className="max-w-full h-auto"
                style={{ display: 'none' }}
                onLoad={() => {
                  if (imageRef.current) {
                    imageRef.current.style.display = 'block';
                  }
                }}
              />
            </div>
            
            <button
              onClick={classifyImage}
              disabled={!model || loading}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {loading ? 'Classifying...' : 'Classify Image'}
            </button>
            
            {predictions.length > 0 && (
              <div className="mt-4">
                <h3 className="font-bold">Predictions:</h3>
                <ul>
                  {predictions.map((prediction, index) => (
                    <li key={index}>
                      {prediction.className}: {Math.round(prediction.probability * 100)}%
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      }
      </code></pre>

      <h2>Conclusion</h2>
      <p>Integrating AI features into your Next.js applications can significantly enhance their capabilities and user experience. While there is a learning curve, libraries like TensorFlow.js and APIs like OpenAI make it accessible for front-end developers to incorporate AI functionality without deep machine learning expertise.</p>

      <p>As AI technologies continue to evolve, the possibilities for web applications will only expand. By starting to integrate these features now, you'll be well-positioned to leverage advancements in AI for your Next.js projects in the future.</p>
    `
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices for Front-End Developers in 2023",
    slug: "typescript-best-practices-for-frontend-developers",
    excerpt: "Learn how to write clean, maintainable TypeScript code with these modern best practices for front-end development.",
    date: "2023-05-20",
    readTime: "6 min read",
    category: "Development",
    tags: ["TypeScript", "Front-End", "Best Practices"],
    coverImage: "/images/blog/typescript.jpg",
    featured: true,
    content: `
      <p>TypeScript has become the standard for professional front-end development, providing type safety and improved developer experience. Here are the best practices to follow in 2023.</p>

      <h2>Use strict mode</h2>
      <p>Always enable strict mode in your TypeScript configuration:</p>

      <pre><code>
      // tsconfig.json
      {
        "compilerOptions": {
          "strict": true,
          // other options...
        }
      }
      </code></pre>

      <p>This enables a range of type checking behaviors that help catch more errors during development.</p>

      <h2>Leverage TypeScript's type inference</h2>
      <p>TypeScript's type inference is powerful. Don't add type annotations when they're not needed:</p>

      <pre><code>
      // Instead of this:
      const name: string = "John";
      
      // Do this:
      const name = "John"; // TypeScript infers string type
      </code></pre>

      <h2>Content continued...</h2>
    `
  }
];

// Generate metadata for the page dynamically
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Find the post by slug
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found | Esmaeil Abedi",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Esmaeil Abedi`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Esmaeil Abedi"],
      tags: post.tags,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Find the post by slug
  const post = blogPosts.find((post) => post.slug === params.slug);

  // If post not found, return 404
  if (!post) {
    notFound();
  }

  // Format date for display
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <main className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Back to Blog */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link href="/blog">
            <Button variant="ghost" className="flex items-center gap-2 text-muted-foreground">
              <FaArrowLeft size={14} />
              Back to Blog
            </Button>
          </Link>
        </motion.div>

        {/* Post Header */}
        <motion.header
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Post Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
            {post.title}
          </h1>
          
          {/* Post Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-muted-foreground">
            <div className="flex items-center gap-1">
              <FaCalendarAlt size={14} />
              <span>{formatDate(post.date)}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <FaClock size={14} />
              <span>{post.readTime}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <FaTag size={14} />
              <span>{post.category}</span>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden mb-8">
            {/* Placeholder for now - would be actual images in production */}
            <div className="bg-gradient-to-br from-primary/70 to-accent/70 h-full w-full flex items-center justify-center">
              <span className="text-white font-heading text-2xl">
                Featured Image for: {post.title.split(' ')[0]}
              </span>
            </div>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-sm font-medium bg-accent/10 text-accent px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.header>
        
        {/* Post Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <motion.article 
            className="lg:col-span-8 bg-white rounded-xl p-6 md:p-10 shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Use ContentRenderer for rich story-telling UI */}
            <div>
              {/* In production, this would use the template from post.template */}
              <ContentRenderer 
                content={post.content} 
                template="story"
                animateContent={true}
              />
            </div>
          </motion.article>
          
          {/* Sidebar */}
          <motion.aside 
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Author Card */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  {/* Placeholder for author image */}
                  <div className="bg-gradient-to-br from-primary to-accent h-full w-full flex items-center justify-center text-white">
                    EA
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold">Esmaeil Abedi</h3>
                  <p className="text-muted-foreground">Front-End Developer & AI Enthusiast</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">
                Front-end developer specializing in React, Next.js, and integrating AI features into web applications.
              </p>
              
              <Link href="/about">
                <Button variant="outline" className="w-full">
                  About Me
                </Button>
              </Link>
            </div>
            
            {/* Share Card */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h3 className="text-lg font-semibold mb-4">Share this Post</h3>
              <div className="flex justify-between">
                <Button variant="outline" className="flex-1 mx-1">
                  Twitter
                </Button>
                <Button variant="outline" className="flex-1 mx-1">
                  LinkedIn
                </Button>
                <Button variant="outline" className="flex-1 mx-1">
                  Facebook
                </Button>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="bg-primary text-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
              <p className="opacity-90 mb-4">
                Subscribe to my newsletter for the latest articles and updates.
              </p>
              <form>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full mb-3 px-4 py-2 rounded-md text-foreground focus:outline-none"
                  required
                />
                <Button type="submit" className="w-full bg-accent">
                  Subscribe
                </Button>
              </form>
            </div>
          </motion.aside>
        </div>
        
        {/* Related Posts (static for now) */}
        <motion.section 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-heading font-semibold text-primary mb-6">
            Related Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map((relatedPost) => (
              <article 
                key={relatedPost.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Post Image */}
                <div className="relative h-40 w-full">
                  {/* Placeholder for now - would be actual images in production */}
                  <div className="bg-gradient-to-br from-gray-700 to-gray-900 h-full w-full flex items-center justify-center">
                    <span className="text-white font-heading text-lg">
                      {relatedPost.title.split(' ')[0]}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">
                    <Link href={`/blog/${relatedPost.slug}`} className="hover:text-accent transition-colors">
                      {relatedPost.title}
                    </Link>
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <Button variant="ghost" className="w-full">
                      Read Article
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
