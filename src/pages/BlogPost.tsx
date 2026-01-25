import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);
  const currentIndex = blogPosts.findIndex((p) => p.id === id);
  const nextPost = blogPosts[currentIndex + 1];
  const prevPost = blogPosts[currentIndex - 1];

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <PageTransition>
      <article className="pt-32 md:pt-40 pb-16">
        <div className="container-narrow">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-text-tertiary hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to articles
          </Link>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-text-tertiary">{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-text-tertiary" />
              <span className="text-sm text-text-tertiary">{post.readTime}</span>
            </div>
            <h1 className="heading-xl mb-8">{post.title}</h1>
            <p className="body-lg">{post.excerpt}</p>
          </motion.header>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="divider my-12 origin-left"
          />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {post.content.split("\n\n").map((paragraph, index) => {
              // Handle headers
              if (paragraph.trim().startsWith("## ")) {
                return (
                  <h2 key={index} className="heading-md mt-12 mb-6">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.trim().startsWith("### ")) {
                return (
                  <h3 key={index} className="heading-sm mt-8 mb-4">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              // Handle lists
              if (paragraph.trim().startsWith("- ")) {
                const items = paragraph.split("\n").filter((line) => line.trim().startsWith("- "));
                return (
                  <ul key={index} className="space-y-2 my-6">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 body-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-text-tertiary mt-2.5 shrink-0" />
                        {item.replace("- ", "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              // Handle bold text in headers
              if (paragraph.trim().startsWith("**") && paragraph.trim().endsWith("**")) {
                return (
                  <h4 key={index} className="font-medium text-foreground mt-6 mb-2">
                    {paragraph.replace(/\*\*/g, "")}
                  </h4>
                );
              }
              // Regular paragraphs
              if (paragraph.trim()) {
                return (
                  <p key={index} className="body-md my-6">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </motion.div>
        </div>
      </article>

      {/* Navigation */}
      <section className="border-t border-border">
        <div className="container-wide py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prevPost ? (
              <Link
                to={`/blog/${prevPost.id}`}
                className="group p-6 rounded-lg border border-border hover:border-text-tertiary transition-colors"
              >
                <span className="caption block mb-2">Previous article</span>
                <span className="heading-sm group-hover:text-text-secondary transition-colors inline-flex items-center gap-2">
                  <ArrowLeft size={18} />
                  {prevPost.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextPost && (
              <Link
                to={`/blog/${nextPost.id}`}
                className="group p-6 rounded-lg border border-border hover:border-text-tertiary transition-colors text-right md:ml-auto"
              >
                <span className="caption block mb-2">Next article</span>
                <span className="heading-sm group-hover:text-text-secondary transition-colors inline-flex items-center gap-2">
                  {nextPost.title}
                  <ArrowRight size={18} />
                </span>
              </Link>
            )}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default BlogPost;
