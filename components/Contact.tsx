"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Contact() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const mailto = `mailto:4ltree.service@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(mailto, "_blank");
  };

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-start">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block mb-4 px-3 py-1 text-xs font-bold rounded-full tracking-widest uppercase"
              style={{ background: "#6DBF4A15", color: "#5AA63C" }}
            >
              문의하기
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-tight break-keep-all mb-5">
              궁금한 점이
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #6DBF4A 0%, #4AADD9 100%)" }}
              >
                있으신가요?
              </span>
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed break-keep-all mb-8">
              서비스 이용, 요금제, 기술 지원 등 무엇이든 편하게
              문의해 주세요. 빠르게 답변 드리겠습니다.
            </p>

            {/* Contact info card */}
            <div className="surface-card rounded-2xl p-6 flex items-start gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "#6DBF4A18" }}
              >
                <svg className="w-5 h-5 text-[#6DBF4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">이메일</p>
                <a
                  href="mailto:4ltree.service@gmail.com"
                  className="text-zinc-900 font-semibold hover:text-[#6DBF4A] transition-colors text-sm"
                >
                  4ltree.service@gmail.com
                </a>
              </div>
            </div>

            {/* Response time indicators */}
            <div className="flex gap-6 mt-6">
              {[
                { label: "평균 응답", value: "24시간 내", color: "#6DBF4A" },
                { label: "운영 시간", value: "평일 9-18시", color: "#4AADD9" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-zinc-400 mb-0.5">{item.label}</p>
                  <p className="text-sm font-bold" style={{ color: item.color }}>{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="surface-card rounded-3xl p-8"
          >
            <h3 className="text-lg font-bold text-zinc-900 mb-6">메일 보내기</h3>

            <div className="space-y-4">
              {/* Subject */}
              <div>
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">
                  제목
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="문의 제목을 입력하세요"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-[#6DBF4A] focus:ring-2 focus:ring-[#6DBF4A]/15 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">
                  내용
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="문의 내용을 자세히 적어주세요"
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900 text-sm placeholder:text-zinc-400 focus:outline-none focus:border-[#6DBF4A] focus:ring-2 focus:ring-[#6DBF4A]/15 transition-all resize-none"
                />
              </div>

              {/* Send button */}
              <button
                onClick={handleSend}
                disabled={!subject.trim() && !message.trim()}
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{
                  background: "linear-gradient(90deg, #6DBF4A 0%, #4AADD9 100%)",
                  boxShadow: "0 4px 20px rgba(109,191,74,0.30)",
                }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                메일 앱으로 보내기
              </button>

              <p className="text-xs text-zinc-400 text-center">
                버튼을 누르면 기본 메일 앱이 열립니다
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
