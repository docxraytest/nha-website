import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Shield, 
  Lightbulb,
  Award,
  Globe,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const values = [
    {
      icon: Heart,
      title: 'Patient-Centricity',
      description: 'We place the patient at the heart of every product we design, ensuring their needs and experiences drive our innovation.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'We are uncompromising in our commitment to data privacy and security, building trust through transparency and reliability.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Simplicity',
      description: 'We leverage cutting-edge technology to create simple, elegant solutions to complex healthcare challenges.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in partnering with local healthcare providers, governments, and communities to drive meaningful change.'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Company Founded',
      description: 'NHA-HEALTHTECH was established in Cameroon with a vision to transform African healthcare.'
    },
    {
      year: '2024',
      title: 'National Recognition',
      description: 'Secured 4th place in the AIM STARTUP & ACCELERATE AFRICA National Pitch Competition.'
    },
    {
      year: '2024',
      title: 'MVP Development',
      description: 'Actively developing the Mi-Health Minimum Viable Product with 500+ early access users.'
    },
    {
      year: '2024',
      title: 'Healthcare Partnerships',
      description: 'Engaged in discussions with 5+ healthcare facilities for pilot program implementation.'
    }
  ];

  const problems = [
    {
      title: 'Fragmented Health Records',
      description: 'Patient data is siloed in different facilities, leading to repeated tests, medical errors, and incomplete patient histories.',
      impact: '27+ million people affected in Cameroon alone'
    },
    {
      title: 'Poor Continuity of Care',
      description: 'Lack of unified records makes it difficult to manage chronic diseases and coordinate care between specialists.',
      impact: 'Especially critical for chronic disease management'
    },
    {
      title: 'Limited Patient Empowerment',
      description: 'Patients lack easy access to and control over their health information, diminishing their ability to participate actively in care.',
      impact: 'Reduced patient engagement and outcomes'
    },
    {
      title: 'Geographical Barriers',
      description: 'Remote and underserved populations struggle to access quality healthcare services due to distance and cost.',
      impact: 'Rural populations disproportionately affected'
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
                NHA-HEALTHTECH
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We are a pre-seed HealthTech startup founded in Cameroon in 2023, dedicated to digitally 
              transforming the African healthcare landscape through innovative, secure, and accessible solutions.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <img
                src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Healthcare Innovation"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded by a team combining deep medical insights with strong technical expertise, 
                NHA-HEALTHTECH emerged from a recognition that Africa's healthcare systems needed 
                innovative digital solutions tailored to local needs and challenges.
              </p>
              <p className="text-gray-600 mb-6">
                Our flagship product, Mi-Health, represents years of research and development focused 
                on creating a patient-centric Personal Health Record system that empowers individuals 
                while supporting healthcare providers across the continent.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-teal-600" />
                  <span className="text-sm font-medium text-gray-700">Award-Winning Innovation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-teal-600" />
                  <span className="text-sm font-medium text-gray-700">Africa-Focused</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To promote and improve access to quality healthcare for all Africans through innovative, 
                secure, and user-friendly digital solutions that bridge the gap between patients and providers.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To create a connected and transparent healthcare ecosystem across Africa where every 
                individual is empowered to manage their well-being, and every provider has the tools 
                to deliver superior care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we approach 
              healthcare innovation in Africa.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problems We Address */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Problems We Address
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the challenges facing African healthcare systems drives our 
              commitment to creating meaningful solutions.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                variants={fadeInUp}
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{problem.title}</h3>
                <p className="text-gray-600 mb-4">{problem.description}</p>
                <div className="flex items-center space-x-2 text-teal-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">{problem.impact}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped our path toward transforming African healthcare.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-teal-200 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  variants={fadeInUp}
                  className="relative flex items-start space-x-8"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {milestone.year.slice(-2)}
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Us in Transforming Healthcare
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Whether you're a healthcare provider, patient, or partner, we invite you to be part 
              of the digital health revolution in Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Get in Touch
              </a>
              <a
                href="/team"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-teal-600 transition-all duration-200"
              >
                Meet Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;