import React from 'react';
import logo from '/zhilu/my-project/public/images/logo.png';

function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#160B50] via-[#231383] to-[#0A0235]">
      <div className="container mx-auto text-center text-white">
        <img src={logo} alt="ZhiLu Logo" className="mx-auto mb-8" />
        <div className="text-lg leading-relaxed">
          <p>At ZhiLu, we believe in empowering individuals to take the Wise Path. Our innovative platform leverages advanced AI technology to provide you with personalized debt-repayment strategies, secure payment processing, seamless banking integration, and a comprehensive financial health score.</p>
          <p>With ZhiLu, you're not just managing your credit cards; you're mastering them. Join us on a journey towards financial freedom and discover how ZhiLu can help you achieve your financial goals.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
