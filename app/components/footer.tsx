import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#221692] text-white">
      <div className="max-w-6xl mx-auto px-12 py-1 ">

        {/* บล็อกบนสุด */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 pt-10">
          {/* ซ้าย: โลโก้และที่อยู่ */}
          <div className="space-y-4 flex-1">
            <div className="flex items-center gap-3">
              <Image src="/images/jibxbac.svg" alt="JIB Logo" width={150} height={60} />

            </div>
            <div className="space-y-2">
              <p className="font-bold text-[15px] text-white">J.I.B Computer Group Co., Ltd.</p>
              <p className="text-[10px]">เลขที่ 21 ถนนพหลโยธิน แขวงสนามบิน เขตดอนเมือง กรุงเทพฯ 10210</p>
              <p className="text-[11px]">Tel: 02-017-4444</p>
            </div>
            <p className="text-xs font-semibold">เครื่องหมายรับรอง</p>
            <div className="flex gap-4 mt-0">
              <Image src="/images/ocb.png" alt="DBD" width={40} height={40} />
              <Image src="/images/dbd.png" alt="Trustmark" width={100} height={40} />
            </div>
          </div>

          {/* กลาง: ลิงก์หมวดหมู่ */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 flex-3 font-light text-xs">
            {[
              {
                title: "เจไอบีออนไลน์",
                links: ["สินค้า", "ข่าวสาร", "เกี่ยวกับเรา", "ติดต่อเรา", "เจไอบีดีอย่างไร"],
              },
              {
                title: "ฝ่ายสนับสนุน",
                links: ["แผนที่สาขา", "ตำแหน่งงานว่าง", "เช็คประกันสินค้า", "นิตยสารออนไลน์ พ.ศ. 2567" ],
              },
              {
                title: "แผนกบริการลูกค้า",
                links: [
                  "วิธีการสั่งซื้อสินค้า",
                  "ตรวจสอบสถานะสินค้า",
                  "วิธีการชำระเงิน",
                  "การเปลี่ยนคืนสินค้า",
                  "การใช้คูปองส่วนลด",
                ],
              },
              {
                title: "ติดต่อสอบถาม",
                links: [
                  "Tiktok: @jibofficial",
                  "Youtube: Jib Channel",
                  "Line ID: @jibonline",
                  "Instagram: jib.online",
                  "Facebook: JIB Computer Group",
                ],
              },
            ].map((group, idx) => (
              <div key={idx}>
                <p className="font-light mb-6 text-sm">{group.title}</p>
                <ul className="space-y-4">
                  {group.links.map((link, i) => (
                    <li key={i}>
                      <a href="">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* แถวล่างสุด */}
        <div className="">
          <div className="flex flex-col lg:flex-row flex-wrap items-center justify-end gap-1 space-x-9 text-center">
            {/* จัดส่งสินค้า */}
            <div className="flex flex-col items-center">
              <a className="font-semibold text-xs">จัดส่งสินค้าโดย:</a>
              <Image src="/images/express.png" alt="express" width={220} height={60} />
            </div>

            {/* ช่องทางชำระ */}
            <div className="flex flex-col items-center text-xs">
              <a className="font-semibold mb-2">ช่องทางการชำระ:</a>
              <Image src="/images/bank.png" alt="bank" width={320} height={60} />
            </div>

            {/* ช่องทางติดตาม */}
            <div className="flex flex-col items-center text-xs">
              <a className="font-semibold mb-2">ช่องทางการติดตาม:</a>
              <Image src="/images/con.svg" alt="contact" width={200} height={40} />
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="bg-[#F4F6F8]">
      <div className=" mb-15 flex justify-center items-start">
        <span className="pt-2 text-xs text-gray-500">© 2023 JIB COMPUTER GROUP All rights reserved</span>
      </div>
    </div>
    </div>
  );
};

export default Footer;
