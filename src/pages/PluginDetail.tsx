import { useParams, useNavigate } from "react-router-dom";
import { plugins } from "../data/plugins";
import { toast } from "sonner";
import Header from "../components/Header";
import PluginHeader from "../components/plugin-detail/PluginHeader";
import PluginContent from "../components/plugin-detail/PluginContent";
import { Button } from "../components/ui/button";
import { useEffect } from "react";

const getPluginContent = (pluginId: string) => {
  switch (pluginId) {
    case "autoblog-gpt":
      return {
        overview: {
          description: "AutoBlogGPT revolutionizes content creation by allowing you to transform ideas into fully developed blog posts with minimal effort. Using the power of ChatGPT, this plugin automatically generates and publishes high-quality articles based on your input, making your WordPress site a content powerhouse without the need for constant manual updates.",
          features: [
            "Effortless Content Creation: Simply input your ideas, and AutoBlogGPT will turn them into well-structured, engaging blog posts in minutes.",
            "Auto-Publishing: Set it and forget it—AutoBlogGPT can automatically publish articles on your behalf based on the schedule you choose.",
            "Customizable Content: Tailor the tone, style, and length of the articles to suit your audience.",
            "Time-Saving: Say goodbye to writer's block and endless hours of content drafting.",
            "SEO Optimized: Articles generated by AutoBlogGPT are crafted to boost SEO."
          ]
        },
        features: {
          key: [
            "Automatic Blog Creation: Instantly generate full-length blog posts from ideas or keywords.",
            "Customizable Settings: Control the tone, length, and topic of the generated content.",
            "Auto-Scheduling: Schedule posts to be automatically published at set intervals.",
            "SEO Optimization: Ensure that every article is search engine-friendly.",
            "Integration with WordPress Editor: Easily edit and refine generated content."
          ],
          useCases: [
            "Bloggers who need a steady stream of fresh content.",
            "Businesses looking to keep their blogs active with minimal effort.",
            "Agencies managing multiple WordPress sites and clients."
          ],
          pricing: {
            free: "Generate and publish up to 3 posts per month.",
            premium: "Create and publish unlimited blog posts each month."
          }
        },
        documentation: {
          installation: [
            "Installing plugin",
            "Create a new page on your website and use the shortcode [autobloggpt_blogs]",
            "Use link in the backend to create AI-powered blog posts",
            "Enter your Security Code in the ChatGPT interface",
            "Provide your ideas for creating a blog post"
          ]
        }
      };
    case "autoupdate-plugins":
      return {
        overview: {
          description: "Keep your WordPress site secure and up-to-date with our automated plugin and theme update management system. This powerful tool ensures your website stays protected while maintaining full control over the update process.",
          features: [
            "Automated Updates: Schedule updates for plugins and themes at optimal times",
            "Version Control: Keep track of all plugin versions and easily roll back if needed",
            "Security Focused: Prioritize security updates automatically",
            "Backup Integration: Create automatic backups before updates",
            "Email Notifications: Get alerts about successful updates or any issues"
          ]
        },
        features: {
          key: [
            "Smart Scheduling: Choose when updates should occur",
            "Selective Updates: Pick which plugins to auto-update",
            "Version Management: Track and restore previous versions",
            "Update Logs: Detailed logging of all update activities",
            "Multi-site Support: Manage updates across multiple WordPress installations"
          ],
          useCases: [
            "Website maintenance companies",
            "WordPress agencies managing multiple sites",
            "Business owners who want to automate maintenance"
          ],
          pricing: {
            free: "Manage updates for up to 3 plugins",
            premium: "Unlimited plugin management and advanced features"
          }
        },
        documentation: {
          installation: [
            "Upload the plugin to WordPress",
            "Activate the plugin",
            "Configure update settings",
            "Set up email notifications",
            "Choose plugins for automatic updates"
          ]
        }
      };
    // Add more cases for other plugins
    default:
      return {
        overview: {
          description: "This powerful WordPress plugin enhances your website's functionality with innovative features and robust performance.",
          features: [
            "Easy Installation",
            "User-friendly Interface",
            "Regular Updates",
            "Premium Support",
            "Performance Optimized"
          ]
        },
        features: {
          key: [
            "Core Feature 1",
            "Core Feature 2",
            "Core Feature 3",
            "Core Feature 4",
            "Core Feature 5"
          ],
          useCases: [
            "WordPress website owners",
            "Developers",
            "Business owners"
          ],
          pricing: {
            free: "Basic features included",
            premium: "All premium features included"
          }
        },
        documentation: {
          installation: [
            "Download the plugin",
            "Upload to WordPress",
            "Activate the plugin",
            "Configure settings",
            "Start using the plugin"
          ]
        }
      };
  }
};

const PluginDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const plugin = plugins.find(p => p.id === id);
  const content = getPluginContent(id || "");

  useEffect(() => {
    document.title = `WordPress Entwicklung Graz - ${plugin?.name || 'Plugin'}`;
  }, [plugin]);

  if (!plugin) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Plugin not found</h1>
        <Button onClick={() => navigate("/")}>Return Home</Button>
      </div>
    );
  }

  const handleDownload = () => {
    toast.success("Download started!", {
      description: "Your plugin download will begin shortly."
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <PluginHeader 
          name={plugin.name}
          downloads={plugin.downloads}
          rating={plugin.rating}
          description={plugin.description}
          image={plugin.image}
          onDownload={handleDownload}
        />

        <div className="bg-white/95 rounded-lg shadow-xl p-8 mt-8">
          <PluginContent content={content} />
        </div>
      </div>
    </div>
  );
};

export default PluginDetail;
