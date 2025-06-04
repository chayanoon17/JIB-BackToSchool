import React, { useState } from "react";
import Image from "next/image";

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
    setSelectedCard(selectedCard === cardId ? null : cardId);
  };

  return (
    <div className="mb-8 p-8">
      <h1 className="text-2xl font-bold text-center mb-20 text-gray-800 ">
        พบกับคนดังในงาน
      </h1>

      <div className="flex flex-wrap justify-start items-start gap-4 max-w-6xl  mx-auto">
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
                    ? "w-[320px] h-[300px] z-20"
                    : "w-[192px] h-[300px] z-10"
                }
              `}
            >
              {/* รูปนางเอกเต็มตัว (อยู่เสมอ) */}
              <div
                className={`
                      absolute bottom-0 
                      ${
                        isSelected
                          ? "-left-13 w-[200px] z-30"
                          : "-left-4 w-[150px] z-10"
                      }
                      transition-all duration-500 ease-in-out
                    `}
              >
                <Image
                  src={card.profileImage}
                  alt="Person"
                  width={280}
                  height={400}
                  className="object-contain"
                />
              </div>

              {/* พื้นหลังการ์ด */}
              <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden ">
                <Image
                  src={card.image}
                  alt="Background"
                  fill
                  className="object-cover"
                  priority={card.id === 1}
                />
              </div>

              {/* เนื้อหาในการ์ด */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white bg-gradient-to-t from-black/100 via-transparent to-transparent">
                {/* แบ่งซ้ายขวา */}
                <div className="flex justify-between items-start">
                  {/* ซ้ายปล่อยว่าง เพื่อให้นางเอกล้น */}
                  <div className="w-[100px]" />

                  {/* ขวา: avatar + text */}
                  <div className="flex-1">
                    {/* Avatar + Title + Follower */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shrink-0 ml-auto">
                        <Image
                          src="/images/avatar.png"
                          alt="Avatar"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="font-semibold text-sm leading-none">
                          {card.title}
                        </div>
                        <div className="text-xs">👥 {card.followers}</div>
                      </div>
                    </div>

                    {/* Description */}
                    {isSelected && (
                      <p className="text-xs font-bold leading-snug text-white max-w-[160px] ml-auto">
                        {card.description}
                      </p>
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
