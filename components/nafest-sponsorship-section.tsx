"use client";

import { motion } from "framer-motion";
import React from "react";
import { Button } from "./ui/button";
import { Mail, Users, Handshake, UserPlus } from "lucide-react";
import Link from "next/link";

function GetInvolvedSection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 pb-12 sm:pb-20 border-b border-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-yellow-400">
            Get Involved
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Join us in creating a landmark celebration of music, culture, and
            creativity at NAFEST 2025
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Participation Options */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Call to Action */}
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-6 sm:p-8 rounded-xl backdrop-blur-sm border border-red-700/30">
              <h3 className="text-xl sm:text-2xl font-bold text-red-400 mb-4">
                Ready to Participate?
              </h3>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6 text-justify">
                If you are interested in participating as a collaborator,
                sponsor, or delegate for our programme, please fill out the form
                by clicking the button below.
              </p>
              <Link href="/contact">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Submit Your Application
                </Button>
              </Link>
            </div>

            {/* Participation Types */}
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 p-6 sm:p-8 rounded-xl backdrop-blur-sm border border-slate-700/30">
              <h4 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-6">
                How to Apply
              </h4>
              <p className="text-sm sm:text-base text-slate-200 mb-4">
                When submitting your enquiry, please use one of the following as
                your subject line:
              </p>

              <div className="space-y-4">
                {/* Delegate Option */}
                <div className="flex items-start space-x-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
                  <div className="flex-shrink-0 mt-1">
                    <UserPlus className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-400 mb-1">
                      Delegate
                    </h5>
                    <p className="text-sm text-slate-300 font-mono bg-slate-800/50 px-3 py-2 rounded">
                      Delegate African Music Summit at NAFEST 2025, Enugu
                    </p>
                  </div>
                </div>

                {/* Sponsor Option */}
                <div className="flex items-start space-x-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
                  <div className="flex-shrink-0 mt-1">
                    <Handshake className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-400 mb-1">
                      Sponsorship
                    </h5>
                    <p className="text-sm text-slate-300 font-mono bg-slate-800/50 px-3 py-2 rounded">
                      Sponsorship African Music Summit at NAFEST 2025, Enugu
                    </p>
                  </div>
                </div>

                {/* Collaborator Option */}
                <div className="flex items-start space-x-4 p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
                  <div className="flex-shrink-0 mt-1">
                    <Users className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-purple-400 mb-1">
                      Collaborator
                    </h5>
                    <p className="text-sm text-slate-300 font-mono bg-slate-800/50 px-3 py-2 rounded">
                      Collaborator African Music Summit at NAFEST 2025, Enugu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Contact Details */}
            <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 p-6 sm:p-8 rounded-xl backdrop-blur-sm border border-yellow-700/30">
              <div className="flex items-center space-x-3 mb-6">
                <Mail className="w-6 h-6 text-yellow-400" />
                <h4 className="text-xl sm:text-2xl font-bold text-yellow-400">
                  Contact Information
                </h4>
              </div>

              <div className="space-y-4">
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                  For media enquiries, partnership opportunities, or to register
                  your interest, please contact:
                </p>

                <div className="bg-slate-700/40 p-4 rounded-lg border border-slate-600/30">
                  <p className="text-lg font-bold text-yellow-400 mb-2">
                    African Music Summit
                  </p>
                  <a
                    href="mailto:enquieries@africanmusicsummit.com"
                    className="text-slate-200 hover:text-yellow-400 transition-colors duration-300 text-base sm:text-lg"
                  >
                    enquieries@africanmusicsummit.com
                  </a>
                </div>
              </div>
            </div>

            {/* Welcome Message */}
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 p-6 sm:p-8 rounded-xl backdrop-blur-sm border border-slate-700/30">
              <h4 className="text-xl sm:text-2xl font-bold text-red-400 mb-4">
                We Look Forward to Welcoming You!
              </h4>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-4 text-justify">
                We look forward to welcoming you to Enugu for a landmark
                celebration of music, culture, and creativity at NAFEST 2025!
              </p>
              <p className="text-sm sm:text-base text-slate-300 text-justify">
                Further details and official announcements will be shared here
                and on our social media channels in the coming months.
              </p>
            </div>

            {/* Social Media Follow */}
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 rounded-xl backdrop-blur-sm border border-blue-700/30 text-center">
              <h5 className="text-lg font-bold text-blue-400 mb-3">
                Stay Connected
              </h5>
              <p className="text-slate-200 mb-2">
                Follow us for the latest updates:
              </p>
              <p className="text-yellow-400 font-semibold text-lg">
                @amusicsummit
              </p>
              <p className="text-sm text-slate-400 mt-2">
                X, Instagram & Facebook
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default GetInvolvedSection;
