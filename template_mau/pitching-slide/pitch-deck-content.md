# 📋 HOME MIND — Pitch Deck Content Document

> **Dự án:** Smart Home Inventory App (HomeMind)  
> **Nhóm:** EXE101 – Đại học FPT  
> **Mục tiêu:** Pitching Day  

---

## Slide 1: Opening

| Mục | Nội dung |
|-----|----------|
| **Logo** | HomeMind – biểu tượng ngôi nhà + mic AI |
| **Eyebrow** | 🏡 DỰ ÁN KHỞI NGHIỆP |
| **Headline** | **HomeMind** – Quản lý tủ đồ gia đình **bằng AI** |
| **Elevator Pitch** | Giúp hàng triệu gia đình Việt giảm lãng phí, tiết kiệm thời gian và quản lý đồ dùng thông minh chỉ với **3 giây** mỗi sản phẩm. |
| **Tags** | 🎤 AI Voice Input · ⏰ Smart Expiry Alert · 🛒 Shopping Assistant · 👨‍👩‍👧‍👦 Family Sharing |
| **Key Stats** | 3s (thời gian nhập 1 sản phẩm) · 95% (giảm lãng phí thực phẩm) · 111 (người tham gia khảo sát) |

**Nguồn dữ liệu:**
- Thời gian nhập 3-5 giây: So sánh giải pháp (tài liệu `Problem Validation & Solution Analysis.md`, mục 15)
- Giảm 95% lãng phí: Tài liệu `Problem Validation & Solution Analysis.md`, bảng Quantified Benefits
- 111 người khảo sát: Dữ liệu thực tế từ Google Form (`RAW_DATA.md`)

---

## Slide 2: Problem

| Mục | Nội dung | Số liệu | Nguồn |
|-----|----------|---------|-------|
| **Eyebrow** | 😩 VẤN ĐỀ | | |
| **Headline** | Bạn đã từng gặp chuyện này? | | |
| **Pain 1 – Gánh nặng ghi nhớ** | 48 người quên mua món đã hết — 49 người cho biết "có quá nhiều thứ cần nhớ" | 48 người | Q10: 48/111 |
| **Pain 2 – Lãng phí thầm lặng** | 47 người phát hiện sản phẩm đã hết hạn, 42 người không nhớ hạn sử dụng | 47 người | Q10: 47/111 |
| **Pain 3 – Rào cản nhập liệu** | 58 người từng bỏ app vì nhập liệu mất thời gian. 45 người yêu cầu nhập ≤10 giây/sản phẩm. | 58 người | Q22: 58/111 |
| **Big Stat 1** | 100.000–300.000₫ VNĐ/tháng — tiền lãng phí trung bình | 30 người ở mức 100-300K | Q13 |
| **Big Stat 2** | 80% người dùng bỏ app quản lý sau 1 tuần vì nhập liệu thủ công | 80% | Q22: 58 người chê nhập liệu lâu |

**Nguồn dữ liệu chi tiết:**
- **Q10 (Tình huống gặp phải):** Quên mua món đã hết (48), Phát hiện SP hết hạn (47), Không nhớ HSD (42), Mua trùng (39), Mở tủ kiểm tra (38), Hỏi người nhà (34) — `Survey_evidence_stat.md`
- **Q12 (Nguyên nhân):** Có quá nhiều thứ cần nhớ (49) — `Survey_evidence_stat.md`
- **Q13 (Tiền lãng phí B2C):** 100K-300K (30 người), 50K-100K (22 người) — `Survey_evidence_stat.md`
- **Q22 (Lý do bỏ app cũ):** Nhập liệu mất thời gian (58), Giao diện khó dùng (41), Phải nhập quá nhiều TT (38) — `Survey_evidence_stat.md`

---

## Slide 3: Solution

| Mục | Nội dung | Nguồn |
|-----|----------|-------|
| **Eyebrow** | 💡 GIẢI PHÁP | |
| **Headline** | HomeMind — Trợ lý AI cho tủ đồ gia đình | |
| **Lead** | Kết hợp AI Vision + AI Voice để loại bỏ hoàn toàn nhập liệu thủ công | |
| **Feature 1 – AI Voice** | Nói tự nhiên: *"Tôi vừa mua đường, hạn 6 tháng sau"* — AI tự bóc tách và lưu | `idea.md` mục 2 + 9 |
| **Feature 2 – AI Vision** | Quét barcode hoặc nhãn sản phẩm. Nhận diện tên, danh mục, HSD trong 3 giây | `idea.md` mục 3 |
| **Feature 3 – Smart Reminder** | Phân loại thông minh: đồ tươi (3-5 ngày), đồ khô (1 tháng) | `idea.md` mục 3 |
| **Feature 4 – Shopping Assistant** | Tự động thêm vào DS mua sắm khi hết, đề xuất giá tốt từ Shopee/Lazada | `idea.md` mục 5 |
| **So sánh: Cũ vs Mới** | Nhập liệu: 30-60s → **3-5s** · Nhắc HSD: Cơ bản → **Thông minh** · Voice: Không → **Có** · Bỏ cuộc: >80% → **<20%** · Chia sẻ: Không → **Có** | `Problem Validation & Solution Analysis.md` mục 13 |

**Điểm đột phá (Innovation):**
- Zero Text Entry: loại bỏ nhập tay hoàn toàn
- Vietnamese Voice Understanding: tối ưu cho tiếng Việt tự nhiên
- Unified B2C and B2B Architecture: nền tảng kiến trúc chung

---

## Slide 4: Market Analysis

| Mục | Nội dung | Số liệu | Nguồn |
|-----|----------|---------|-------|
| **Eyebrow** | 📊 PHÂN TÍCH THỊ TRƯỜNG | | |
| **Headline** | Thị trường Smart Home Việt Nam đang bùng nổ | | |
| **Lead** | CAGR 9.2% — từ $358M (2024) lên $1.7B (2033) | | |
| **Market Size 1** | Smart Home VN 2033: **$1.7B** | CAGR 9.2% | IMARC Group (trích `finalRepord.md`) |
| **Market Size 2** | TMĐT VN 2026: **$31B** | Tăng 20%/năm | e-Conomy SEA (trích `finalRepord.md`) |
| **Market Size 3** | Khảo sát: **111 người** | Dữ liệu sơ cấp | `RAW_DATA.md` |
| **TAM** | Toàn bộ thị trường Smart Home VN | $1.7B (2033) | IMARC Group |
| **SAM** | Ngách quản lý đồ dùng gia đình | ~$120M | Ước tính 7% TAM |
| **SOM** | Year 1 Target: 60K users × ~$40 ARPU | $2.4M | Dự phòng từ BMC |

**Xu hướng (Trends):**
- Chi phí API LLM đa phương thức ngày càng rẻ (Gemini Flash)
- Mạng 5G tại VN triệt tiêu độ trễ
- Lối sống bận rộn → nhu cầu tự động hóa quản lý gia đình tăng

---

## Slide 5: Market Validation

| Mục | Nội dung | Số liệu | Nguồn |
|-----|----------|---------|-------|
| **Eyebrow** | 🔬 VALIDATION | | |
| **Headline** | 111 người đã xác nhận vấn đề | | |
| **Pain Point 1** | Quên mua món đã hết | **48/111** | Q10 |
| **Pain Point 2** | Phát hiện đồ hết hạn | **47/111** | Q10 |
| **Pain Point 3** | Quên HSD đồ đã mở | **42/111** | Q10 |
| **Pain Point 4** | Mua trùng đồ vẫn còn | **39/111** | Q10 |
| **WTP B2C** | Sẵn sàng trả 20K-50K₫/tháng | **39 người** | Q29 |
| **Free trial** | Cần bản dùng thử miễn phí | **69 người** | Q34 |
| **MVP #1** | Chọn Nhắc HSD là tính năng quan trọng nhất | **72 người** | Q27 |
| **Customer Archetype B2C** | NV văn phòng (29) · Sinh viên (22) · Cha mẹ có con nhỏ (19) · Nội trợ (11) | | Q2 |
| **Customer Archetype B2B** | Chủ tạp hóa (18) · Bán online (5) | | Q2 |
| **Độ tuổi chủ đạo** | 31-40 (43) · 18-22 (29) | | Q4 |
| **Thu nhập** | 7-15 triệu/tháng (40) · 15-30 triệu (28) | | Q5 |
| **Kênh tiếp cận** | Bạn bè (63) · Facebook (58) · TikTok (57) | | Q33 |
| **Đối thủ trực tiếp** | KiotViet, Sapo (B2B — POS phức tạp, giá cao) | | `finalRepord.md` |
| **Đối thủ gián tiếp** | NoWaste, Pantry Check, Sortly (B2C — không AI Voice VN) | | `finalRepord.md` |
| **Kết luận** | Chưa có giải pháp nào kết hợp AI Voice Tiếng Việt + Quản lý gia đình + Giá hợp lý | | `finalRepord.md` |

---

## Slide 6: Product Demo

| Mục | Nội dung | Nguồn |
|-----|----------|-------|
| **Eyebrow** | 📱 PRODUCT DEMO | |
| **Headline** | Chỉ 3 bước — Từ giọng nói đến tủ đồ | |
| **Bước 1** | 🎤 Nói tự nhiên: *"Tôi vừa mua đường, hạn 6 tháng sau"* | `listscreen.md` mục 5 - Voice Recording |
| **Bước 2** | 🤖 AI xử lý: Bóc tách tên, danh mục, HSD. Hiện màn xác nhận | `screenflow.md` màn 3.2 |
| **Bước 3** | ✅ Xác nhận & Lưu: Nhấn "Xác nhận & Lưu" — tủ đồ cập nhật ngay | `listscreen.md` mục 6 |
| **Phone Mockup** | Màn hình AI Confirmation: câu nói gốc + hành động AI bóc tách + nút xác nhận | `improvement-plan-pitching.md` mục 2.1 |
| **Tính năng 1** | 🎙️ AI Mic Widget: Nhấn mic → nói → AI xử lý | `designsystem.md` mục 8.5 |
| **Tính năng 2** | 📋 AI Confirmation: Kiểm tra trước khi lưu (Human-in-the-loop) | `screenflow.md` màn 3.2 |
| **Tính năng 3** | 🛒 Shopping List: Tự động thêm khi hết hàng + Affiliate | `idea.md` mục 5.2 |
| **Tính năng 4** | 👨‍👩‍👧‍👦 Family Sharing: Đồng bộ real-time với cả nhà | `idea.md` mục 7.1 |

**Workflow đầy đủ:**
```
Home Dashboard → Nhấn Mic → Voice Recording Bottom Sheet
→ AI Processing (shimmer) → AI Confirmation Screen
→ Xác nhận & Lưu → Dashboard Updated (toast + data mới)
```

---

## Slide 7: Business Model

| Mục | Nội dung | Số liệu | Nguồn |
|-----|----------|---------|-------|
| **Eyebrow** | 💼 MÔ HÌNH KINH DOANH | | |
| **Headline** | Freemium + Subscription + Affiliate | | |
| **Gói B2C Premium** | 29.000₫/tháng — Không giới hạn SP, AI Voice toàn diện, Báo cáo chi tiêu | 20-50K: 39 người sẵn sàng | Q29 + `finalRepord.md` |
| **Gói Family Premium** | 49.000₫/tháng — Chia sẻ 5 TV, đồng bộ real-time, DS mua chung | 19 người chỉ trả nếu dùng chung | Q29 |
| **Gói B2B Micro-POS** | 99.000-199.000₫/tháng — Quản lý tồn kho, cảnh báo hết hạn, báo cáo TC | 100-200K: 12 người sẵn sàng | Q30 |
| **Free Tier** | 30 sản phẩm miễn phí | 35 người chọn 30 SP là hợp lý | Q28 |
| **Revenue 1 – Subscription** | Phí tháng B2C + B2B | MRR Year 5: ~426M₫ | BMC + Financial |
| **Revenue 2 – Affiliate** | Hoa hồng 2-7% từ Shopee/Lazada/GrabMart/Tiki | 41 người click nếu giá tốt | Q32 |
| **Revenue 3 – Data Insights** | B2B analytics (Phase 3) | | `idea.md` mục 7.2 |
| **Cost Structure** | Server cloud + API AI (Gemini) · TikTok/FB Ads + Referral · 4 Dev + 2 Marketing | | BMC mục 9 |

**Business Model Canvas (tóm tắt):**
| Ô | Nội dung chính |
|---|---------------|
| Customer Segments | B2C: NV văn phòng, sinh viên, cha mẹ có con nhỏ · B2B: Chủ tạp hóa nhỏ |
| Value Propositions | Nhắc HSD tự động · Tránh mua trùng · Số hóa kiểm tra · Giảm thất thoát vốn |
| Channels | Bạn bè (63) · Facebook (58) · TikTok (57) · App Store (22) |
| Revenue Streams | Freemium → Subscription 20-50K · Family 49K · B2B 99-199K · Affiliate 2-7% |

---

## Slide 8: Team & Roadmap

| Mục | Nội dung | Nguồn |
|-----|----------|-------|
| **Eyebrow** | 🚀 ĐỘI NGŨ & LỘ TRÌNH | |
| **Headline** | Nhóm 6 thành viên — 12 tháng đầu tiên | |
| **Team Member 1** | **Vũ Quang** — Project Manager | `TEAM/VuQuang.jpg` |
| **Team Member 2** | **Minh Thành** — Lead Developer | `TEAM/MinhThanh.png` |
| **Team Member 3** | **Hoài Bảo** — Developer | `TEAM/HoaiBao.png` |
| **Team Member 4** | **Hải Yến** — Developer | `TEAM/HaiYen.png` |
| **Team Member 5** | **Hồng Nhung** — Marketing Lead | `TEAM/HongNhung.png` |
| **Team Member 6** | **Phạm Thị Ánh** — Marketing | `TEAM/PhamThiAnh.png` |

**Roadmap 12-18 tháng:**

| Giai đoạn | Thời gian | Mục tiêu | Nguồn |
|-----------|-----------|----------|-------|
| Pilot | Tháng 1-2 | 50 users, 10 tạp hóa, hoàn thiện MVP | `finalRepord.md` |
| Q1 | Tháng 3-5 | Launch Google Play, Subscription, Affiliate | `finalRepord.md` |
| Q2 | Tháng 6-8 | Family Sharing, Shared Shopping List, 800 users | `finalRepord.md` |
| Q3 | Tháng 9-11 | B2B Micro-POS, 20-30 cửa hàng | `finalRepord.md` |
| Năm 2 | Năm 2 | 2K-5K users, 100-150 cửa hàng, mở rộng Hà Nội | `finalRepord.md` |

**Expansion Plan:**
| Metric | Year 1 | Year 5 | Nguồn |
|--------|--------|--------|-------|
| B2C Users | 800 | 60.000 | `finalRepord.md` |
| B2B Stores | 30 | 2.000 | `finalRepord.md` |
| MRR | ~3M₫ | ~426M₫ | `finalRepord.md` |
| Region | TP.HCM | Toàn quốc | `finalRepord.md` |

---

## Slide 9: Financial Projection

| Mục | Nội dung | Số liệu | Nguồn |
|-----|----------|---------|-------|
| **Eyebrow** | 📈 TÀI CHÍNH | | |
| **Headline** | Dự phòng 5 năm — Lộ trình đến lợi nhuận | | |
| **Biểu đồ MRR** | | | `SmartHomeInventoryFinanceReport.xlsx` + `finalRepord.md` |
| Năm 1 | MRR cuối năm | ~3M₫ | |
| Năm 2 | MRR cuối năm | ~31M₫ | |
| Năm 3 | MRR cuối năm (Break-even kỳ vọng) | ~107M₫ | |
| Năm 4 | MRR cuối năm | ~254M₫ | |
| Năm 5 | MRR cuối năm (ARR ~5.1B₫) | ~426M₫ | |
| **Biểu đồ User Growth** | | | `finalRepord.md` |
| Năm 1 | Users | 800 | |
| Năm 2 | Users | 5.000 | |
| Năm 3 | Users | 15.000 | |
| Năm 4 | Users | 35.000 | |
| Năm 5 | Users | 60.000 | |
| **Key Metrics** | | | |
| MRR Year 1 | 800 users · 3% conversion | ~3M₫ | `finalRepord.md` |
| MRR Year 3 | Break-even kỳ vọng | ~107M₫ | `finalRepord.md` |
| ARR Year 5 | 60K users · 2,000 cửa hàng | ~5.1B₫/năm | `finalRepord.md` |

**Chi tiết nhân sự theo giai đoạn (từ `finalRepord.md`):**

| Giai đoạn | MRR | Nhân sự |
|-----------|-----|---------|
| Pilot | Chưa có DT | 4 dev |
| Năm 1 | ~2-3M₫ | 4 dev + 2 CS/marketing |
| Năm 2 | ~19-31M₫ | +1 sales B2B, +1 community |
| Năm 3 | ~62-107M₫ | +2 vận hành marketplace |
| Năm 4 | ~162-254M₫ | +1 data analyst, +1 BD |
| Năm 5 | ~309-426M₫ | +ops mở rộng vùng |

---

## Slide 10: Fundraising

| Mục | Nội dung | Số liệu | Nguồn |
|-----|----------|---------|-------|
| **Eyebrow** | 💰 KÊU GỌI ĐẦU TƯ | | |
| **Headline** | Cùng chúng tôi xây dựng ngôi nhà thông minh cho mọi gia đình Việt | | |
| **Funding Ask** | | **$50,000 USD** | BMC + Financial Model |
| **Equity Offered** | | **15%** | Giả định Pre-seed |
| **Valuation** | Post-money | **$333,333** | $50K ÷ 15% |
| **Use of Proceeds 1** | Product Development (MVP + AI) | **40%** ($20K) | |
| **Use of Proceeds 2** | Marketing & Growth (TikTok/FB/Referral) | **30%** ($15K) | |
| **Use of Proceeds 3** | Operations (Server/API/Cloud) | **20%** ($10K) | |
| **Use of Proceeds 4** | Legal & Admin | **10%** ($5K) | |
| **Stage** | Pre-seed | | |
| **Milestone** | 800 users · 30 stores · MRR 3M₫ | 12 tháng | |
| **Closing Statement** | "HomeMind không chỉ là một ứng dụng — đó là người trợ lý gia đình giúp mỗi bữa ăn ngon hơn, mỗi đồng tiền đáng giá hơn." | | |
| **Contact** | homemind.app · hoaibaole.qng@gmail.com | | |
| **Financial Link** | [Financial Model (Google Sheets)](https://docs.google.com/spreadsheets/d/1bQdpnB5kuysCb3Hh_5Kw2yXbMBGhBDhCyoy9NUoBQKs/edit?gid=335397862#gid=335397862) | | |
| **Tags** | #EXE101 · #FPTUniversity · #SmartHome | | |

---

## Tổng nguồn dữ liệu sử dụng

| Tài liệu | Nội dung | Slide sử dụng |
|----------|----------|---------------|
| `RAW_DATA.md` | Số liệu khảo sát thô (BMC) | 1, 2, 4, 5 |
| `Survey_evidence_stat.md` | Thống kê biểu đồ khảo sát chi tiết | 2, 5 |
| `Problem Validation & Solution Analysis.md` | Problem-Solution Fit, So sánh, Lợi thế cạnh tranh | 1, 2, 3 |
| `idea.md` | Ý tưởng, giải pháp, roadmap, pricing | 1, 3, 6, 7 |
| `phanhoimentor.md` | Mô tả dự án ngắn gọn | 1 |
| `designsystem.md` | Design system HomeMind | 6 |
| `listscreen.md` | Danh sách màn hình MVP | 6 |
| `screenflow.md` | Flow điều hướng | 6 |
| `STRUCTURE.md` | BMC database schema, survey evidence | 5, 7 |
| `Structure_addendum_v2.md` | 19 biểu đồ khảo sát số liệu thực | 2, 4, 5 |
| `finalRepord.md` (Prototype/docs) | Market analysis, BMC, 5-year roadmap, Financial model, Pricing | 1-10 |
| `improvement-plan-pitching.md` | Prototype cải tiến, Demo flow | 6 |
| `SmartHomeInventoryFinanceReport.xlsx` | Báo cáo tài chính | 9 |
| `1VER_Checkpoint4_Financial.xlsx` | Tài chính checkpoint | 9 |
| `logo-homemind-icon.svg` | Logo SVG chính thức | 1 |
| `TEAM/*` | Ảnh thành viên | 8 |
| `exe.md` | Tổng hợp dự án toàn diện | 1, 3, 5, 6, 7 |
| `w9.md` | Báo cáo tuần 9 (kiến trúc, roadmap) | 6, 8 |

---

> 📄 **Tài liệu này mô tả chi tiết nội dung từng slide trong bộ Pitch Deck HomeMind**  
> 🎯 **Mọi số liệu đều dựa trên dữ liệu thực tế từ khảo sát 111 người và báo cáo thị trường**
