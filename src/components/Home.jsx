import React from 'react';
import WidgetContainer from './WidgetContainer';

function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#212223] text-gray-500">
      {/* Right half with widgets */}
      <div className="w-full p-8 flex flex-col gap-6 items-center rounded-2xl
                      md:flex-row md:justify-between md:p-12 md:gap-8
                      lg:max-w-5xl lg:p-16">
        <WidgetContainer />
      </div>
    </div>
  );
}

export default Home;
