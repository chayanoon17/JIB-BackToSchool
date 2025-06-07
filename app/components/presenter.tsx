import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
        "ใช้บริการ JIB มาหลายปีแล้วจองได้ บริการดีไม่โซน์โซ่พัดลม นักท่อง Gadget ก็ดีอีกนาคีนี้วันนี้ ดีลออสต์ยันี่ :)",
      image: "/images/back.png",
      profileImage: "/images/person.png",
    },
    {
      id: 2,
      title: "JIB FANCLUBS",
      followers: "100 K",
      description:
        "ใช้บริการ JIB มาหลายปีแล้วจองได้ บริการดีไม่โซน์โซ่พัดลม นักท่อง Gadget ก็ดีอีกนาคีนี้วันนี้ ดีลออสต์ยันี่ :)",
      image: "/images/back.png",
      profileImage: "/images/person.png",
    },
    {
      id: 3,
      title: "JIB FANCLUBS",
      followers: "100 K",
      description:
        "ใช้บริการ JIB มาหลายปีแล้วจองได้ บริการดีไม่โซน์โซ่พัดลม นักท่อง Gadget ก็ดีอีกนาคีนี้วันนี้ ดีลออสต์ยันี่ :)",
      image: "/images/back.png",
      profileImage: "/images/person.png",
    },
    {
      id: 4,
      title: "JIB FANCLUBS",
      followers: "100 K",
      description:
        "ใช้บริการ JIB มาหลายปีแล้วจองได้ บริการดีไม่โซน์โซ่พัดลม นักท่อง Gadget ก็ดีอีกนาคีนี้วันนี้ ดีลออสต์ยันี่ :)",
      image: "/images/back.png",
      profileImage: "/images/person.png",
    },
    {
      id: 5,
      title: "JIB FANCLUBS",
      followers: "100 K",
      description:
        "ใช้บริการ JIB มาหลายปีแล้วจองได้ บริการดีไม่โซน์โซ่พัดลม นักท่อง Gadget ก็ดีอีกนาคีนี้วันนี้ ดีลออสต์ยันี่ :)",
      image: "/images/back.png",
      profileImage: "/images/person.png",
    },
  ];

  const handleCardClick = (cardId: number): void => {
    setSelectedCard(cardId);
  };

  return (
    <div className="pt-0 mt-0">
      <h1 className="text-2xl font-extrabold text-center mb-20 text-gray-800 ">
        พบกับคนดังในงาน
      </h1>

      <div className="flex flex-wrap  justify-center items-start gap-4 max-w-6xl mx-auto">
        {cards.map((card) => {
          const isSelected = selectedCard === card.id;

          return (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`
                relative rounded-2xl cursor-pointer transition-all duration-500 ease-in-out overflow-visible
                ${
                  isSelected
                    ? "w-[320px] h-[320px] z-20"
                    : "w-[162px] h-[320px] z-10"
                }
              `}
            >
              {/* รูปนางเอกเต็มตัว (อยู่เสมอ) */}
              <div
                className={`
                      absolute bottom-0 
                      ${
                        isSelected
                          ? "-left-13 w-[200px] z-20"
                          : " w-[160px] z-10 left-0"
                      }
                      transition-all duration-500 ease-in-out 
                    `}
              >
                <Image
                  src={card.profileImage}
                  alt="Person"
                  width={280}
                  height={400}
                  className="object-cover"
                />
              </div>

              {/* พื้นหลังการ์ด */}
              <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden ">
                <Image
                  src={card.image}
                  alt="Background"
                  fill
                  className="object-center"
                  priority={card.id === 1}
                />
              </div>

              {/* เนื้อหาในการ์ด */}
              <div className="absolute rounded-lg bottom-0 left-0 right-0 p-4 z-20 border-white  text-white bg-gradient-to-t from-blue-950/100 via-transparent to-transparent ">
                {/* แบ่งซ้ายขวา */}
                <div className="flex justify-between items-start ">
                  {/* ซ้ายปล่อยว่าง เพื่อให้นางเอกล้น */}
                  <div className="w-[10px]"></div>

                  {/* ขวา: avatar + text */}
                  <div className="flex-1">
                    {/* Avatar + Title + Follower */}

                    <div className=" items-center gap-3 mb-2 max-w-[160px] ml-auto">
                      <motion.div
                          initial={{ scale: 0, opacity: 0 }} // เริ่มต้นขนาดเล็กและโปร่งใส
                          animate={{ scale: 1, opacity: 1 }} // ขยายขนาดและโปร่งใส
                          transition={{ duration: 0.5 }} // ระยะเวลาในการเคลื่อนไหว
                          className="relative w-10 h-10 rounded-full overflow-hidden"
                        >
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white shrink-0">
                        
                          <Image
                            src="/images/avatar.png"
                            alt="Avatar"
                            fill
                            className="object-cover"
                          />
                      </div>
                        </motion.div>


                      <div className="flex flex-col ">
                        <div className="font-semibold text-sm leading-none ">
                          <motion.p
                            className="text-xs font-bold leading-snug text-white max-w-[160px] ml-auto"
                            initial={{ opacity: 0, y: 20 }} // เริ่มต้นที่ opacity 0 และย้ายจากด้านล่างขึ้น
                            animate={{ opacity: 1, y: 0 }} // แสดงผลพร้อมกับย้ายขึ้นจากล่าง
                            transition={{ duration: 0.5 }} // ระยะเวลาในการเคลื่อนไหว
                          >
                            {card.title}
                          </motion.p>
                        </div>
                        <div className="text-xs ">👥 {card.followers}</div>
                      </div>
                    </div>

                    {/* Description */}
                    {isSelected && (
                      <motion.p
                        className="text-xs font-bold leading-snug text-white max-w-[160px] ml-auto"
                        initial={{ opacity: 0, y: 20 }} // เริ่มต้นที่ opacity 0 และย้ายจากด้านล่างขึ้น
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
