"use client";
import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
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
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{role}</div>
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

const testimonials = [
  {
    text: "Sunrise Overseas Consultancy made my dream of studying in Canada come true! From IELTS coaching to visa approval, they guided me through every step. Got admission to University of Toronto with scholarship. Highly recommended for Hyderabad students!",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    name: "Priya Reddy",
    role: "Masters in Computer Science, University of Toronto",
  },
  {
    text: "As a student from Old City, I was confused about the entire process. The team at Sunrise Overseas Consultancy, especially Siraj bhai, explained everything in Telugu and helped me secure admission in USA. Now I'm pursuing my MS at Texas A&M University!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Mohammed Ahmed",
    role: "MS in Mechanical Engineering, Texas A&M University",
  },
  {
    text: "The visa assistance I received was exceptional. They prepared me thoroughly for the visa interview, and I got my Australian student visa in the first attempt. Currently studying at University of Melbourne. Thank you Sunrise Overseas Consultancy!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Swathi Sharma",
    role: "MBA, University of Melbourne",
  },
  {
    text: "Being from a middle-class family in Secunderabad, I was worried about finances. Sunrise Overseas Consultancy helped me get an education loan and find affordable universities in Germany. Now I'm studying at Technical University of Munich with minimal tuition fees!",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "Ravi Kumar",
    role: "Masters in Automotive Engineering, TUM Munich",
  },
  {
    text: "The IELTS coaching here is top-notch! Scored 8.0 band in my first attempt. The counselors helped me choose the right course and university in UK. Currently pursuing my Masters at University College London. Best consultancy in Hyderabad!",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    name: "Ananya Chandra",
    role: "MSc Data Science, University College London",
  },
  {
    text: "From Kukatpally to Canada! Sunrise Overseas Consultancy helped me with everything - university selection, application process, and visa documentation. Their pre-departure briefing was very helpful. Now I'm settled in Toronto and loving my experience!",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    name: "Vikram Singh",
    role: "Masters in Civil Engineering, Ryerson University",
  },
  {
    text: "I got through a very reputed university in New Zealand - University of Auckland. The entire process was smooth and hassle-free. They even helped me find accommodation. Great support for students from Hyderabad!",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    name: "Fatima Begum",
    role: "Masters in Biotechnology, University of Auckland",
  },
  {
    text: "The career guidance I received was excellent. They helped me choose Ireland as my destination based on my profile. Got admission at Trinity College Dublin with scholarship. The visa process was seamless. Thank you team!",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Arjun Patel",
    role: "MSc in Pharmaceutical Sciences, Trinity College Dublin",
  },
  {
    text: "From LB Nagar to Latvia! Who would have thought? Sunrise Overseas Consultancy introduced me to excellent opportunities in Europe. Studying at Riga Technical University with very affordable fees. The quality of education is outstanding!",
    image: "https://randomuser.me/api/portraits/women/51.jpg",
    name: "Sneha Gupta",
    role: "Masters in Information Technology, Riga Technical University",
  },
];

export { testimonials };