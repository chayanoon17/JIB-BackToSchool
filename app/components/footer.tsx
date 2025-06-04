import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#1D0FA1] text-white text-xs">
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">

        {/* บล็อกบนสุด */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* ซ้าย: โลโก้และที่อยู่ */}
          <div className="space-y-4 flex-1">
            <div className="flex items-center gap-3">
              <Image src="/images/logo-jib.svg" alt="JIB Logo" width={60} height={60} />
              <h1 className="font-medium">X</h1>
              <Image src="/images/shop/logox.png" alt="Back to School" width={100} height={30} />
            </div>
            <div>
              <p className="font-semibold">J.I.B Computer Group Co., Ltd.</p>
              <p>เลขที่ 21 ถนนพหลโยธิน แขวงสนามบิน เขตดอนเมือง กรุงเทพฯ 10210</p>
              <p>Tel: 02-017-4444</p>
            </div>
            <div className="flex gap-4 mt-4">
              <Image src="/images/ocb.png" alt="DBD" width={40} height={40} />
              <Image src="/images/dbd.png" alt="Trustmark" width={100} height={40} />
            </div>
          </div>

          {/* กลาง: ลิงก์หมวดหมู่ */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 flex-2">
            {[
              {
                title: "เจไอบีออนไลน์",
                links: ["สินค้า", "ข่าวสาร", "เกี่ยวกับเรา", "ติดต่อเรา", "เจไอบีดีอย่างไร"],
              },
              {
                title: "ฝ่ายสนับสนุน",
                links: ["แผนที่สาขา", "ตำแหน่งงานว่าง", "เช็คประกันสินค้า", "นิตยสารออนไลน์"],
              },
              {
                title: "แผนกบริการลูกค้า",
                links: [
                  "วิธีการสั่งซื้อสินค้า",
                  "ตรวจสอบสถานะ",
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
                <p className="font-bold mb-2">{group.title}</p>
                <ul className="space-y-3">
                  {group.links.map((link, i) => (
                    <li key={i}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* แถวล่างสุด */}
        <div className="pt-8">
          <div className="flex flex-col lg:flex-row flex-wrap items-center justify-between gap-8 text-center">
            {/* จัดส่งสินค้า */}
            <div className="flex flex-col items-center">
              <a className="font-semibold mb-2">จัดส่งสินค้าโดย:</a>
              <Image src="/images/express.png" alt="express" width={220} height={60} />
            </div>

            {/* ช่องทางชำระ */}
            <div className="flex flex-col items-center">
              <p className="font-semibold mb-2">ช่องทางการชำระ:</p>
              <Image src="/images/bank.png" alt="bank" width={350} height={60} />
            </div>

            {/* ช่องทางติดตาม */}
            <div className="flex flex-col items-center">
              <p className="font-semibold mb-2">ช่องทางการติดตาม:</p>
              <Image src="/images/con.svg" alt="contact" width={200} height={40} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
