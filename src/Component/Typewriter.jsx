// import React, { useState, useEffect } from "react";

// const Typewriter = () => {
//   const textArray = [
//     "Full-Stack Web Developer",
//     "Laravel Developer",
//     "React Developer",
//     "PHP | MySQL",
//     "JavaScript | HTML & CSS",
//     "Git & GitHub"
//   ];

//   const [text, setText] = useState("");
//   const [textIndex, setTextIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   const typingSpeed = 100;
//   const deletingSpeed = 50;
//   const delayBetweenTexts = 1500;

//   useEffect(() => {
//     const handleTyping = () => {
//       const currentText = textArray[textIndex];

//       if (!isDeleting && charIndex < currentText.length) {
//         setText((prev) => prev + currentText.charAt(charIndex));
//         setCharIndex((prev) => prev + 1);
//       } else if (isDeleting && charIndex > 0) {
//         setText((prev) => prev.slice(0, -1));
//         setCharIndex((prev) => prev - 1);
//       } else if (!isDeleting && charIndex === currentText.length) {
//         setTimeout(() => setIsDeleting(true), delayBetweenTexts);
//       } else if (isDeleting && charIndex === 0) {
//         setIsDeleting(false);
//         setTextIndex((prev) => (prev + 1) % textArray.length);
//       }
//     };

//     const timer = setTimeout(
//       handleTyping,
//       isDeleting ? deletingSpeed : typingSpeed
//     );

//     return () => clearTimeout(timer);
//   }, [charIndex, isDeleting, textIndex]);

//   return (
//     <h1 className="typewriter">
//       {text}
//       <span className="cursor">|</span>
//     </h1>
//   );
// };

// export default Typewriter;

import React, { useState, useEffect, useRef } from "react";

const Typewriter = () => {
  const textArray = useRef([
    "Full-Stack Web Developer",
    "Laravel Developer",
    "React Developer",
    "PHP | MySQL",
    "JavaScript | HTML & CSS",
    "Git & GitHub"
  ]); // استخدام useRef لتخزين النصوص

  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenTexts = 1500;

  useEffect(() => {
    const handleTyping = () => {
      const currentText = textArray.current[textIndex]; // استخدام .current للوصول إلى القيمة

      if (!isDeleting && charIndex < currentText.length) {
        setText((prev) => prev + currentText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), delayBetweenTexts);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % textArray.current.length);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]); // لا حاجة لإضافة textArray هنا

  return (
    <h1 className="typewriter">
      {text}
      <span className="cursor">|</span>
    </h1>
  );
};

export default Typewriter;
