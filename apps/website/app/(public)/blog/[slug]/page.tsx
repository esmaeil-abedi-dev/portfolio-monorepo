import { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogPostPageClient from "@/components/blog/BlogPostPageClient";
import { getAllPosts } from "@/lib/actions/posts";

// Mock blog post data (would be fetched from an API/CMS in production)
const blogPosts = [
  {
    id: "nextjs-ai-integration",
    title: "Integrating AI Features into Next.js Applications",
    slug: "integrating-ai-features-into-nextjs-applications",
    excerpt:
      "A comprehensive guide to adding AI capabilities to your Next.js applications using TensorFlow.js, OpenAI API, and other tools.",
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
    `,
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices for Front-End Developers in 2023",
    slug: "typescript-best-practices-for-frontend-developers",
    excerpt:
      "Learn how to write clean, maintainable TypeScript code with these modern best practices for front-end development.",
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
    `,
  },
];

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
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

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // Find the post by slug
  const post = blogPosts.find((post) => post.slug === params.slug);

  // If post not found, return 404
  if (!post) {
    notFound();
  }

  return <BlogPostPageClient post={post} />;
}
