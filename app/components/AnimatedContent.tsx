import React, { useEffect, useState } from "react";

interface AnimatedContentProps {
     items: any[];
     renderItem: (item: any, index: number) => React.ReactNode;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({ items, renderItem }) => {
     const [currentIndex, setCurrentIndex] = useState(0);

     useEffect(() => {
          const interval = setInterval(() => {
               setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
          }, 3000); // Ganti dengan delay yang diinginkan (3000 ms = 3 detik)

          return () => clearInterval(interval); // Bersihkan interval saat komponen di-unmount
     }, [items.length]);

     return (
          <div>
               {items.map((item, index) => (
                    <div
                         key={item._id}
                         className={`dark:bg-neutral-900 bg-gray-100 p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ${index === currentIndex ? "aos-init aos-animate" : "opacity-0"}`}
                         data-aos="fade-up"
                         data-aos-delay={`${index * 300}`} // 300 ms delay per elemen
                    >
                         {renderItem(item, index)}
                    </div>
               ))}
          </div>
     );
};

export default AnimatedContent;
