import React from "react";

export const Intro = () => {
  return (
    <section className="p-36 px-24 w-full flex justify-between items-center gap-16">
      <div className="flex  h-96 mt-8">
        <div className="w-1/2 p-8">
          <div className="mb-6 text-3xl text-white-800">
            Find Your Perfect Job Match with AI-Powered Technology
          </div>
          <div className="mb-8 text-white-600">
            Our AI-driven job matching service uses advanced technology to
            connect you with the best job opportunities that match your skills
            and experience. Say goodbye to endless job searches and let our
            intelligent algorithms do the work for you.
          </div>
          <div className="flex h-screen gap-4">
            <div className="mb-8z">
              <div className="text-xl font-semibold text-white-800">
                Discover Opportunities
              </div>
              <p className="text-white-600">
                Take our skill test to unlock a world of job opportunities
                tailored for you.
              </p>
            </div>
            <div>
              <div className="text-xl font-semibold text-white-800">
                Learn and Grow
              </div>
              <p className="text-white-600">
                Access recommended courses through AI to enhance your skills and
                career prospects.
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/2 bg-slate-400 h-96">
        </div>
      </div>
    </section>
  );
};