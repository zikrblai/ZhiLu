import React from 'react';
import logo from '/Users/blairezikratch/zhilu/my-project/public/images/logo.png'; // Adjust the path to your logo file

function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#160B50] via-[#231383] to-[#0A0235]">
      <div className="container mx-auto text-center text-white flex items-center">
        <div className="w-1/3">
          <img src={logo} alt="ZhiLu Logo" className="mx-auto mb-8" />
        </div>
        <div className="w-2/3 text-left pl-8">
          <p className="text-2xl" style={{
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: '64px',
            fontStyle: 'bold',
            fontWeight: 700,
            lineHeight: 'normal',
            letterSpacing: '-1.28px',
          }}>choose the Wise Path.</p>
        </div>
      </div>
      <div className="container mx-auto text-center text-white mt-8">
        <p className="text-xl" style={{
          color: '#FFF',
          textAlign: 'center',
          fontFamily: 'Inter',
          fontSize: '64px',
          fontStyle: 'bold',
          fontWeight: 700,
          lineHeight: 'normal',
          letterSpacing: '-1.28px',
        }}>With ZhiLu, you're not managing your credit card debt; you're mastering it.</p>
      </div>
    </section>
  );
}

export default About;
