"use client"

import { Check, LaptopMinimal, Video, Building, Trophy } from "lucide-react"

export default function LearningPath() {
  return (
        <div className="flex justify-center items-start min-h-screen">
      <div
        className="relative w-[1280px] h-[720px] rounded-[20px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        style={{
          backgroundColor: "#000435",
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      >
        {/* Background Glows */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[80px] opacity-15"
          style={{ background: "#CF9FFF", top: "-200px", left: "-200px" }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full border-2 opacity-10"
          style={{ background: "#000435", borderColor: "#CF9FFF", bottom: "-200px", right: "-200px" }}
        />

        {/* Header Text */}
        <div className="absolute top-[50px] left-[50px] z-10 flex flex-col items-start">
          <h2
            className="font-medium text-[32px] text-white mb-[10px]"
            style={{ fontFamily: "Outfit, sans-serif", textShadow: "0 0 10px rgba(255, 255, 255, 0.2)" }}
          >
            Votre parcours d'apprentissage
          </h2>
        </div>

        <div className="absolute top-[30px] right-[50px] z-10">
          <img
            src="/images/elumy-logo.png"
            alt="E-LUMY"
            className="h-[120px] w-auto"
            style={{ filter: "drop-shadow(0 0 10px rgba(207, 159, 255, 0.3))" }}
          />
        </div>

        {/* SVG Path */}
        <div className="absolute top-0 left-0 w-full h-full z-[1]">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 1280 720" preserveAspectRatio="none">
            <path
              d="M 192 468 C 250 468, 300 252, 448 252 C 596 252, 600 468, 704 468 C 808 468, 850 252, 960 252 C 1070 252, 1100 360, 1152 360"
              fill="none"
              stroke="#CF9FFF"
              strokeWidth="4"
              strokeDasharray="15 10"
              strokeLinecap="round"
              opacity="0.4"
              style={{ filter: "drop-shadow(0 0 5px #CF9FFF)" }}
              className="animate-[dashMove_60s_linear_infinite]"
            />
          </svg>
        </div>

        {/* Node 1: Theory - Done */}
        <div
          className="absolute z-[2] flex flex-col items-center justify-center cursor-default"
          style={{ left: "15%", top: "65%", transform: "translate(-50%, -50%)" }}
        >
          <div
            className="relative w-[70px] h-[70px] rounded-full flex items-center justify-center text-[28px] transition-all duration-300 hover:scale-110"
            style={{
              background: "#CF9FFF",
              border: "3px solid #fff",
              color: "#000435",
              boxShadow: "0 0 30px rgba(207, 159, 255, 0.6)",
            }}
          >
            <Check size={28} strokeWidth={2.5} />
            <div
              className="absolute -top-[15px] -right-[15px] bg-white text-[10px] font-bold px-2 py-1 rounded-[10px] shadow-md animate-bounce"
              style={{ color: "#000435" }}
            >
              VALIDÉ
            </div>
          </div>
          <div className="absolute top-[85px] w-[220px] text-center">
            <h3
              className="font-bold text-[19px] text-white mb-2"
              style={{ fontFamily: "Outfit, sans-serif", textShadow: "0 2px 4px #000000" }}
            >
              Théorie
            </h3>
            <p
              className="text-[15px] text-white font-semibold leading-[1.4] px-[5px]"
              style={{ textShadow: "0 2px 5px #000000" }}
            >
              Bases fondamentales acquises avec succès.
            </p>
          </div>
        </div>

        {/* Node 2: QCM - Current */}
        <div
          className="absolute z-[2] flex flex-col items-center justify-center cursor-default"
          style={{ left: "35%", top: "35%", transform: "translate(-50%, -50%)" }}
        >
          <div
            className="w-[70px] h-[70px] rounded-full flex items-center justify-center text-[28px] text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(207,159,255,0.5)]"
            style={{
              background: "#000435",
              border: "3px solid #CF9FFF",
              boxShadow: "0 0 20px rgba(207, 159, 255, 0.2), inset 0 0 10px rgba(207, 159, 255, 0.1)",
            }}
          >
            <LaptopMinimal size={28} />
          </div>
          <div className="absolute top-[85px] w-[220px] text-center">
            <h3
              className="font-bold text-[19px] text-white mb-2"
              style={{ fontFamily: "Outfit, sans-serif", textShadow: "0 2px 4px #000000" }}
            >
              QCM en Ligne
            </h3>
            <p
              className="text-[15px] text-white font-semibold leading-[1.4] px-[5px]"
              style={{ textShadow: "0 2px 5px #000000" }}
            >
              Testez vos connaissances sur la plateforme.
            </p>
          </div>
        </div>

        {/* Node 3: Video - Locked */}
        <div
          className="absolute z-[2] flex flex-col items-center justify-center cursor-default"
          style={{ left: "55%", top: "65%", transform: "translate(-50%, -50%)" }}
        >
          <div
            className="w-[70px] h-[70px] rounded-full flex items-center justify-center text-[28px] transition-all duration-300"
            style={{
              background: "#000435",
              border: "3px solid rgba(255, 255, 255, 0.2)",
              color: "rgba(255, 255, 255, 0.3)",
            }}
          >
            <Video size={28} />
          </div>
          <div className="absolute top-[85px] w-[220px] text-center">
            <h3
              className="font-bold text-[19px] text-white mb-2"
              style={{ fontFamily: "Outfit, sans-serif", textShadow: "0 2px 4px #000000" }}
            >
              Validation du devoir
            </h3>
            <p
              className="text-[15px] text-white font-semibold leading-[1.4] px-[5px]"
              style={{ textShadow: "0 2px 5px #000000" }}
            >
              Soumettez votre pratique pour analyse.
            </p>
          </div>
        </div>

        {/* Node 4: Stage - Locked */}
        <div
          className="absolute z-[2] flex flex-col items-center justify-center cursor-default"
          style={{ left: "75%", top: "35%", transform: "translate(-50%, -50%)" }}
        >
          <div
            className="w-[70px] h-[70px] rounded-full flex items-center justify-center text-[28px] transition-all duration-300"
            style={{
              background: "#000435",
              border: "3px solid rgba(255, 255, 255, 0.2)",
              color: "rgba(255, 255, 255, 0.3)",
            }}
          >
            <Building size={28} />
          </div>
          <div className="absolute top-[85px] w-[220px] text-center">
            <h3
              className="font-bold text-[19px] text-white mb-2"
              style={{ fontFamily: "Outfit, sans-serif", textShadow: "0 2px 4px #000000" }}
            >
              Stage Pratique
            </h3>
            <p
              className="text-[15px] text-white font-semibold leading-[1.4] px-[5px]"
              style={{ textShadow: "0 2px 5px #000000" }}
            >
              Immersion en institut partenaire.
            </p>
          </div>
        </div>

        {/* Node 5: Certification - Final */}
        <div
          className="absolute z-[2] flex flex-col items-center justify-center cursor-default"
          style={{ left: "90%", top: "50%", transform: "translate(-50%, -50%)" }}
        >
          <div
            className="w-[90px] h-[90px] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: "#000435",
              border: "4px solid #fff",
              boxShadow: "0 0 40px rgba(255, 255, 255, 0.4)",
            }}
          >
            <Trophy size={36} style={{ color: "#CF9FFF" }} />
          </div>
          <div className="absolute top-[110px] w-[220px] text-center">
            <h3
              className="font-bold text-[24px] mb-2"
              style={{ fontFamily: "Outfit, sans-serif", color: "#CF9FFF", textShadow: "0 2px 4px #000000" }}
            >
              CERTIFICATION
            </h3>
            <p
              className="text-[15px] text-white font-semibold leading-[1.4] px-[5px]"
              style={{ textShadow: "0 2px 5px #000000" }}
            >
              Devenez un expert E-lumy certifié.
            </p>
          </div>
        </div>

        <style jsx>{`
          @keyframes dashMove {
            to { stroke-dashoffset: -1000; }
          }
        `}</style>
      </div>
    </div>
  )
}
