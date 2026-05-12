export const dynamic = "force-dynamic";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <ThemeProvider>
        <Navbar />
        <ThemeToggle />

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-36 h-36 rounded-full border-4 border-indigo-500 mb-6 object-cover"
          />
          <h1 className="text-4xl font-bold mb-2">Jane Doe</h1>
          <p className="text-xl text-indigo-600 dark:text-indigo-400 font-medium mb-4">
            Software Quality Assurance Engineer
          </p>
          <p className="max-w-xl text-gray-600 dark:text-gray-300 text-base">
            Passionate about delivering bug-free, high-quality software through
            meticulous manual and automated testing strategies.
          </p>
          <a
            href="#contact"
            className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition font-semibold"
          >
            Get In Touch
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center text-lg leading-relaxed">
            I am a dedicated SQA Engineer with over 5 years of experience in
            software testing and quality assurance. I specialize in both manual
            and automated testing, ensuring products meet the highest quality
            standards before release. I work closely with development teams to
            identify defects early and improve the overall software development
            lifecycle.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[
                "Manual Testing",
                "Selenium WebDriver",
                "Cypress",
                "Jest",
                "Postman / API Testing",
                "JIRA & Bug Tracking",
                "Test Case Design",
                "CI/CD (GitHub Actions)",
                "Agile / Scrum",
                "SQL & Database Testing",
                "Performance Testing",
                "Accessibility Testing",
              ].map((skill) => (
                <div
                  key={skill}
                  className="flex items-center justify-center bg-white dark:bg-gray-700 rounded-xl shadow p-4 text-center font-medium text-indigo-700 dark:text-indigo-300 hover:shadow-md transition"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-10">
            {[
              {
                role: "Senior SQA Engineer",
                company: "TechCorp Solutions",
                period: "2021 – Present",
                description:
                  "Lead QA efforts across multiple product teams. Developed and maintained automated test suites using Cypress and Selenium. Reduced regression testing time by 60%.",
              },
              {
                role: "QA Engineer",
                company: "Innovate Labs",
                period: "2019 – 2021",
                description:
                  "Performed end-to-end manual and automated testing for web and mobile applications. Collaborated with developers to implement test-driven development practices.",
              },
              {
                role: "Junior QA Analyst",
                company: "Softwave Inc.",
                period: "2017 – 2019",
                description:
                  "Executed test cases, logged defects in JIRA, and participated in daily stand-ups. Assisted in writing test plans and test strategies for new feature releases.",
              },
            ].map((job) => (
              <div
                key={job.role}
                className="border-l-4 border-indigo-500 pl-6 py-2"
              >
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                  {job.company} &mdash; {job.period}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-20 px-6 bg-gray-50 dark:bg-gray-800"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                {
                  title: "E-Commerce Test Suite",
                  description:
                    "Built a comprehensive automated test suite for an e-commerce platform using Cypress, covering cart, checkout, and user authentication flows.",
                  tags: ["Cypress", "JavaScript", "CI/CD"],
                },
                {
                  title: "API Testing Framework",
                  description:
                    "Designed a reusable API testing framework using Postman and Newman, integrated into a GitHub Actions pipeline for continuous validation.",
                  tags: ["Postman", "Newman", "GitHub Actions"],
                },
                {
                  title: "Performance Testing Dashboard",
                  description:
                    "Set up JMeter load testing scripts and visualized results through a custom Grafana dashboard to monitor system performance under load.",
                  tags: ["JMeter", "Grafana", "Performance"],
                },
                {
                  title: "Accessibility Audit Tool",
                  description:
                    "Developed a script using Axe-core to run automated accessibility audits on web pages and generate compliance reports.",
                  tags: ["Axe-core", "Node.js", "Accessibility"],
                },
              ].map((project) => (
                <div
                  key={project.title}
                  className="bg-white dark:bg-gray-700 rounded-2xl shadow p-6 hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
            Interested in working together or have a question? Feel free to reach
            out!
          </p>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Your message..."
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </section>

        <Footer />
      </ThemeProvider>
    </main>
  );
}