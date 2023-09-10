import React from 'react';
import './faq.css';

const faq = () => {
  const faqData = [
    {
      question: 'How do I potty train my puppy?',
      answer: ' Set a schedule, reward outdoor success, and supervise indoors to prevent accidents. Consistency and patience are crucial.',
    },
    {
      question: 'How can I stop my dog from barking excessively?',
      answer: 'Identify triggers, use positive reinforcement for quiet behavior, and consider professional help for persistent barking issues',
    },
    {
      question: 'How do I socialize my dog with other dogs?',
      answer: 'Gradually introduce dogs in a controlled environment, monitor interactions, and reward positive social behavior.',
    },
    {
      question: 'What the secret to teaching tricks to my dog?',
      answer: ' Use positive reinforcement, break tricks into small steps, and practice regularly with patience and consistency.',
    },
    // Add more FAQ items as needed
  ];

  return (
    <div>
      <div className='faq-tital' >
        <h1>Frequently Asked Questions (FAQ)</h1>
      </div>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question">{item.question}</div>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default faq;
