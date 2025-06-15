import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { UserIcon } from "@heroicons/react/24/solid";

interface Card {
  id: number;
  title: string;
  followers: string;
  description: string;
  image: string;
  profileImage: string;
  avatar?: string;
}

const ExpandableCards: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(1);

  const cards: Card[] = [
    {
      id: 1,
      title: "JIB FANCLUBS",
      followers: "100 K",
      description:
        "ใช้บริการ JIB มาหลายปีส่งของไว บริการดีมีโปรโมชั่นตลอด นึกถึง Gadget ก็ต้องเข้ามาช็อปที่เว็บนี้ตลอดเลยค่ะ :)",
      image: "/images/back.png",
      profileImage: "/images/person.png",
    },
    {
      id: 2,
      title: "JIB FANCLUBS",
      followers: "100 K",
      description:
        "ใช้บริการ JIB มาหลายปีส่งของไว บริการดีมีโปรโมชั่นตลอด นึกถึง Gadget ก็ต้องเข้ามาช็อปที่เว็บนี้ตลอดเลยค่ะ :)",
      image: "/images/back.png",
      profileImage: "/images/person.png",
    },
    {
      id: 3,
      title: "JIB FANCLUBS",
      followers: "100 K",
      description:
        "ใช้บริการ JIB มาหลายปีส่งของไว บริการดีมีโปรโมชั่นตลอด นึกถึง Gadget ก็ต้องเข้ามาช็อปที่เว็บนี้ตลอดเลยค่ะ :)",
      image: "/images/back.png",
      profileImage: "/images/person.png",
    },
    {
      id: 4,
      title: "JIB FANCLUBS",
      followers: "100 K",
      description:
        "ใช้บริการ JIB มาหลายปีส่งของไว บริการดีมีโปรโมชั่นตลอด นึกถึง Gadget ก็ต้องเข้ามาช็อปที่เว็บนี้ตลอดเลยค่ะ :)",
      image: "/images/back.png",
      profileImage: "/images/person.png",
    },
    {
      id: 5,
      title: "JIB FANCLUBS",
      followers: " 100 K",
      description:
        "ใช้บริการ JIB มาหลายปีส่งของไว บริการดีมีโปรโมชั่นตลอด นึกถึง Gadget ก็ต้องเข้ามาช็อปที่เว็บนี้ตลอดเลยค่ะ :)",
      image: "/images/back.png",
      profileImage: "/images/person.png",
    },
  ];

  const handleCardClick = (cardId: number): void => {
    setSelectedCard(cardId);
  };

  return (
    <div className="w-full">
      <h1 className="text-xl font-bold text-center mb-10 text-gray-800 ">
        พบกับคนดังในงาน
      </h1>

      <div className="flex flex-wrap  justify-center items-center gap-4 max-w-6xl mx-auto">
        {cards.map((card) => {
          const isSelected = selectedCard === card.id;

          return (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`
                relative rounded-2xl cursor-pointer transition-all duration-500 ease-in-out overflow-visible
                ${isSelected ? "w-[370px] z-20" : "w-[162px] z-10"}
              `}
            >
              {/* รูปนางเอกเต็มตัว (อยู่เสมอ) */}
              {/* กล่องภาพ + คุมขนาด */}
              <div
                className={`
                            relative transition-all duration-500 ease-in-out
                            ${isSelected ? "z-20" : "z-10 overflow-hidden"}
                          `}
              >
                {/* กรอบจำกัดภาพ */}
                <div className="w-[190px] h-[390px] rounded-2xl relative">
                  <Image
                    src={card.profileImage}
                    alt="Person"
                    width={280}
                    height={400}
                    className={`object-cover absolute bottom-0 right-3 transition-all duration-500 ease-in-out
                              ${
                                isSelected
                                  ? "bottom-10 scale-125  -translate-x-6"
                                  : "scale-[1] translate-x-0"
                              }
                            `}
                  />

                  {/* Gradient เฉพาะตอนยังไม่เลือก */}
                  {!isSelected && (
                    <div className="absolute bottom-0 left-0 w-full h-[150px] rounded-b-2xl bg-gradient-to-b from-transparent to-[#221692]" />
                  )}
                </div>
              </div>

              {/* พื้นหลังการ์ด */}
              <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden transition-all duration-500">
                <Image
                  src={card.image}
                  alt="Background"
                  fill
                  priority={card.id === 1}
                  className={`object-cover transition-all duration-500 ${
                    isSelected
                      ? "object-start scale-100"
                      : "object-left scale-100"
                  }`}
                />
              </div>

              {/* เนื้อหาในการ์ด */}
              <div className="absolute rounded-lg bottom-0 left-0 right-0 p-4 z-10  text-white bg-gradient-to-t from-[#221692]/100 via-transparent to-transparent ">
                {/* แบ่งซ้ายขวา */}
                <div className="flex justify-between items-start ">
                  {/* ซ้ายปล่อยว่าง เพื่อให้นางเอกล้น */}
                  {/* ขวา: avatar + text */}
                  <div className="flex-1 ">
                    {/* Avatar + Title + Follower */}

                    {isSelected ? (
                      <motion.div
                        initial={{ opacity: 0, y: 90 }} // เริ่มต้นที่ opacity 0 และย้ายจากด้านล่างขึ้น
                        animate={{ opacity: 1, y: 0 }} // แสดงผลพร้อมกับย้ายขึ้นจากล่าง
                        exit={{ opacity: 0, y: 90 }} // หายไปและย้ายกลับด้านล่างเมื่อไม่ได้เลือก
                        transition={{ duration: 0.5 }} // ระยะเวลาในการเคลื่อนไหว
                      >
                        <div className="mb-2 max-w-[170px] ml-auto ">
                          <div
                            className={`
                          relative w-10 h-10 rounded-full overflow-hidden border-white shrink-0
                          transition-all duration-500 ease-in-out
                          ${
                            isSelected
                              ? "-translate-y-3 opacity-100"
                              : "translate-x-30 opacity-100"
                          }
                        `}
                          >
                            <Image src="/images/avatar.png" alt="Avatar" fill />
                          </div>

                          <div className="flex flex-col ">
                            <div className="font-bold  leading-none">
                              <p className="text-[15px] font-leading-snug text-white">
                                {card.title}
                              </p>
                            </div>
                            <div className="flex text-sm font-bold">
                              <UserIcon className="w-3 text-white" />
                              {card.followers}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="b">
                        <div
                          className={`
                          relative mb-4 w-10 h-10 rounded-full overflow-hidden border-white shrink-0
                          transition-all duration-500 ease-in-out
                          ${
                            isSelected
                              ? "-translate-y-3 opacity-100"
                              : "translate-x-0 opacity-100"
                          }
                        `}
                        >
                          <Image src="/images/avatar.png" alt="Avatar" fill />
                        </div>

                        <div className="flex flex-col">
                          <div className="font-semibold leading-none">
                            <p className="text-[15px] font-bold leading-snug text-white">
                              {card.title}
                            </p>
                          </div>
                          <div className="flex text-sm font-bold">
                            <UserIcon className="w-3 text-white" />
                            {card.followers}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Description */}
                    {isSelected && (
                      <motion.p
                        className="text-xs mb-6 font-semibold leading-snug text-white max-w-[170px]  ml-auto"
                        initial={{ opacity: 0, y: 90 }} // เริ่มต้นที่ opacity 0 และย้ายจากด้านล่างขึ้น
                        animate={{ opacity: 1, y: 0 }} // แสดงผลพร้อมกับย้ายขึ้นจากล่าง
                        transition={{ duration: 0.5 }} // ระยะเวลาในการเคลื่อนไหว
                      >
                        {card.description}
                      </motion.p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpandableCards;
