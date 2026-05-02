import { PageTransition } from "@/components/layout/PageTransition";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BlogCard } from "@/components/ui/BlogCard";
import { MorphingText } from "@/components/ui/MorphingText";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <PageTransition>
      <section className="section pt-32 md:pt-40">
        <div className="container-wide">
          <SectionHeader
            caption="Writing"
            title={
              <>
                <MorphingText originalText="设计思考" morphedText="Thoughts on Design" delay={200} />
              </>
            }
            description="Essays exploring UX thinking, design systems, process breakdowns, and reflections on the craft of building digital products."
          />

          <div className="grid-blog">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readTime={post.readTime}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Blog;
