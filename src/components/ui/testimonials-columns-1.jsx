import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-6 border-b border-black/5 bg-white/30 backdrop-blur-sm max-w-xs w-full transition-all duration-300 hover:bg-white/50" key={`${index}-${i}`}>
                  <div className="text-[13px] font-light leading-[1.7] text-gray-700 italic">"{text}"</div>
                  <div className="flex items-center gap-3 mt-5">
                    <img
                      width={36}
                      height={36}
                      src={image}
                      alt={name}
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="text-[13px] font-medium text-gray-800 tracking-tight leading-none">{name}</div>
                      <div className="text-[11px] text-[#4a78e0] mt-1 font-light leading-none">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
