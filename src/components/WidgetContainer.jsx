import React, { useState } from 'react';
import GalleryWidget from './GalleryWidget';
import "./Gallery.css";
const tabs = ["About Me", "Experiences", "Recommended"];

function WidgetContainer() {
  const [activeTab, setActiveTab] = useState("About Me");

  return (
    <div className="space-y-6 lg:space-y-10 p-4 lg:p-8">
      {/* Tabbed Widget */}
      <div className="bg-[#313542] rounded-3xl p-4 lg:p-8 flex flex-col items-center">
        <div className="flex lg:flex-row items-center justify-between w-full gap-3">
          {/* Left-aligned button */}
          <button className="w-8 h-8 rounded-full border-2 border-zinc-400 flex items-center justify-center shadow-lg lg:ml-0">
            <span className="text-zinc-400 text-xl">?</span>
          </button>
          
          {/* Center-aligned navbar */}
          <div className="flex flex-row justify-center w-[400px] items-center space-x-4 bg-zinc-900 p-2 lg:w-[400px] rounded-2xl mx-auto shadow-[5px_5px_5px_5px_rgba(38,38,40,0.5)] mt-4 lg:mt-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-500 transform ${
                  activeTab === tab
                    ? "bg-[#272728] text-[#E5E5E7] shadow-lg scale-110" 
                    : "text-gray-100"
                } hover:bg-[#38383a] hover:shadow-lg hover:scale-105 hover:text-gray-300`} 
                onClick={() => setActiveTab(tab)} 
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section with custom scrollbar */}
        <div className="mt-4 text-gray-300 flex lg:flex-row justify-between items-center space-x-4 max-h-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-950 scrollbar-track-transparent">
          <div className="space-y-5 lg:space-y-8">
            {/* Left-aligned grid icon button */}
            <button className="w-8 h-8 flex items-center justify-center shadow-lg">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-2 h-2 bg-zinc-500"></div>
                <div className="w-2 h-2 bg-zinc-500"></div>
                <div className="w-2 h-2 bg-zinc-500"></div>
                <div className="w-2 h-2 bg-zinc-500"></div>
                <div className="w-2 h-2 bg-zinc-500"></div>
                <div className="w-2 h-2 bg-zinc-500"></div>
              </div>
            </button>
          </div>

          <div className="flex-1 max-h-[250px] overflow-y-auto p-4">
            {activeTab === "About Me" && (
                    <p className="text-sm lg:text-base">
                    Hello! I’m Davis, your dedicated sales representative from Salesforce. I've been part of this incredible company for over 3 years now, helping clients like you find innovative solutions to elevate their businesses. Before joining Salesforce, I worked in various industries, gaining diverse experiences that now fuel my passion for helping businesses succeed.
            
                    I was born and raised in Albany, NY, but for the past decade, I've been enjoying life in beautiful Santa Carla with my wife, Tiffany, and our 4-year-old twin daughters, Emma and Ella. They're both starting school this year, so I typically reserve the 9–10 AM slot for family time, which is why my calendar might be blocked during that window.
            
                    Outside of work, I’m an avid hiker and love exploring the natural beauty around us. I also have a deep interest in historical fiction—there's something captivating about diving into the past through a good book. On the tech side, I enjoy staying up-to-date with the latest technology trends, especially those that push the boundaries of innovation.
            
                    I’m passionate about continuous learning, both in my personal life and professionally. Whether it’s gaining new insights in the tech world, or improving my skills to better serve my clients, I’m always on the lookout for opportunities to grow.
            
                    I look forward to collaborating with you and helping you navigate your Salesforce journey!
                  </p>
            )}

            {activeTab === "Experiences" && (
                    <p className="text-sm lg:text-base">
                    Over the last 10 years, I’ve had the pleasure of working with a wide range of clients, from small startups to Fortune 500 companies. My experience in sales has allowed me to develop a deep understanding of customer needs, and I've consistently exceeded sales targets by focusing on building long-term relationships. My approach to sales is consultative, ensuring that the solutions I provide are tailored to the unique challenges and goals of each client.
                    <br/><br/>
                    I’ve worked across various industries, including tech, healthcare, and finance, adapting my strategies to fit each sector's unique demands. My proudest achievement is leading a team that successfully closed a multi-million dollar deal with one of the top players in the telecom industry.
                  </p>
            )}

            {activeTab === "Recommended" && (
               <p className="text-sm lg:text-base">
               Based on your recent activity and interests, I recommend exploring our latest CRM software updates, which include new features designed to improve team collaboration and customer insights. Additionally, our new case studies might provide valuable insights into how other businesses in your industry are leveraging our solutions to drive growth. Don’t hesitate to reach out if you’d like a personalized demo or further information.
               <br/><br/>
               We also have upcoming webinars focusing on AI integration in sales processes, which could be a great opportunity for you to learn how to leverage AI for better decision-making. You can also check out our blog for tips on how to optimize your sales pipeline using our advanced analytics tools.
             </p>
            )}
          </div>
        </div>

      </div>

      <div className="border-b-4 border-zinc-700 rounded-full shadow-[3px_3px_6px_3px_rgba(0,0,0,0.8)]"></div>

      {/* Gallery Widget */}
      <GalleryWidget />

      <div className="border-b-4 border-zinc-700 rounded-full shadow-[3px_3px_6px_3px_rgba(0,0,0,0.8)]"></div>
    </div>
  );
}

export default WidgetContainer;
