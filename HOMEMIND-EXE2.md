# Week1- Week2

## **MILESTONE 1: FINAL DESIGN & TIMELINE**

#### **Step 2: Final Design, Tính năng chính (Main Features)**

MVP của HomeMind gồm 5 tính năng cốt lõi, thể hiện qua 12 màn hình:  
1\. AI Voice: nhập liệu bằng giọng nói tiếng Việt, AI trích xuất và chuẩn hoá dữ liệu.  
2\. Smart Expiration Alert: cảnh báo trước hạn sử dụng (1 tháng với đồ khô, 3-5 ngày với đồ tươi).  
3\. Shopping List Automation: tự động đề xuất mua lại khi sản phẩm chuyển sang trạng thái "Hết".  
4\. Freemium Paywall: giới hạn 30 sản phẩm cho user miễn phí, mở khoá qua gói Premium / Family / Micro-POS.  
5\. AI Vision: quét barcode/nhãn sản phẩm, tự nhận diện tên và danh mục (mở rộng và phát triển sau).

#### **Step 2: Final Design, Admin**

\- Vai trò Admin tương lai đã được định nghĩa: quản lý người dùng, quản lý catalog sản phẩm/barcode, cấu hình hệ thống, hỗ trợ người dùng, xem audit log vận hành. Admin không được truy cập ghi âm/transcript gốc nếu chưa có sự đồng ý của người dùng .

#### **Step 2: Final Design, Database**

Hệ thống dùng một cơ sở dữ liệu PostgreSQL, giúp giảm độ phức tạp vận hành cho team 4 developer. Các bảng chính:

\- auth.users: xác thực người dùng \- profiles: hồ sơ người dùng (tên, số điện thoại)  
\- workspaces: một "không gian dữ liệu", đại diện cho 1 hộ gia đình hoặc 1 cửa hàng  
\- workspace\_members: ai thuộc workspace nào (hỗ trợ Family Sharing)  
\- workspace\_entitlements: gói cước và giới hạn (Free 30 sản phẩm, Premium, Family, Micro-POS)  
\- products: danh sách sản phẩm trong tủ đồ/kho  
\- inventory\_lots: lô hàng theo số lượng và hạn sử dụng  
\- inventory\_transactions: nhật ký mọi thay đổi tồn kho (audit trail)  
\- shopping\_items: danh sách mua sắm tự động  
\- assistant\_turns: log từng lượt AI xử lý giọng nói/hình ảnh (draft rồi confirm)  
\- notification\_preferences: cấu hình nhắc hạn sử dụng (Smart Alert)

Quan hệ chính: workspaces \-\> workspace\_members / products \-\> inventory\_lots \-\> inventory\_transactions. Các bảng shopping\_items và assistant\_turns gắn theo từng workspace/product.

#### **Step 2: Final Design, Analytics**

Analytics chia làm 3 lớp:

1\. Đã có trong MVP: pipeline analytics nội bộ cơ bản, với nguyên tắc bảo mật rõ ràng là không gửi raw transcript/audio vào analytics mặc định.  
2\. Đã lên kế hoạch (sau MVP): báo cáo B2B cho chủ tạp hóa (Micro-POS) gồm doanh thu, lợi nhuận gộp, giá trị tồn kho, danh sách hàng sắp/đã hết hạn.  
3\. Bổ sung trong bản thiết kế cuối:  
   \- Dashboard "tiết kiệm được bao nhiêu tiền / giảm bao nhiêu lãng phí" cho người dùng cuối, vì đây là giá trị cốt lõi theo khảo sát.  
   \- Analytics sản phẩm nội bộ cho team: funnel, retention theo cohort, tỷ lệ chính xác của AI.

#### **Step 3: Timeline dự án 10 tuần**

Timeline 10 tuần tương ứng giai đoạn Pilot, nhằm kiểm chứng công nghệ AI Voice và nhu cầu thị trường tại Q9, TP.HCM.

Tuần 1: Chốt scope MVP, hoàn thiện Design System và 12 màn hình Figma. Đầu ra: prototype Figma hoàn chỉnh.  
Tuần 2: Setup hạ tầng (Supabase DB, API Gateway, repo, CI cơ bản). Đầu ra: backend skeleton chạy được.  
Tuần 3-4: Xây 2 luồng lõi AI Vision (quét barcode/nhãn) và AI Voice (STT \+ Gemini NLP). Đầu ra: nhập liệu bằng giọng nói/camera hoạt động end-to-end.  
Tuần 5: Xây Smart Expiration Alert và Shopping List Automation. Đầu ra: push notification cảnh báo hạn sử dụng.  
Tuần 6: Freemium Paywall, Family Sharing cơ bản, QA nội bộ. Đầu ra: bản build ổn định, sẵn sàng test thật.  
Tuần 7: Tuyển và onboarding 50 tester (Facebook, Zalo, voucher đổi feedback). Đầu ra: 50 users tham gia Pilot.  
Tuần 8: Thu thập dữ liệu sử dụng thực tế và phản hồi (mục tiêu ít nhất 20 feedback). Đầu ra: dữ liệu AI accuracy và retention tuần 1-2.  
Tuần 9: Đo lường và tối ưu, sửa lỗi AI, cải thiện UX theo feedback. Đầu ra: AI Accuracy hướng tới trên 80%.  
Tuần 10: Tổng hợp kết quả Pilot, chuẩn bị báo cáo Outcome 3 (KPI, funnel, kênh, nguồn lực). Đầu ra: báo cáo Pilot.

#### **Step 4: Mục tiêu cho Outcome 3**

Outcome 3 là giai đoạn kiểm chứng mô hình kinh doanh và go-to-market, tiếp nối ngay sau Pilot. Mục tiêu:

\- AI Voice Accuracy: trên 80% (nếu không đạt phải quay lại sửa model, chưa scale).  
\- Người dùng thử: ít nhất 50 users B2C, phù hợp ngân sách marketing Pilot 2 triệu đồng.  
\- Phản hồi thu thập: ít nhất 20 feedback có cấu trúc, bổ sung cho khảo sát 111 người đã có.  
\- Retention tuần 2: ít nhất 20%, ngưỡng tối thiểu chứng minh sản phẩm có giá trị lặp lại.  
\- Hoàn thiện bộ KPI kinh doanh, funnel, 5 kênh tiếp cận, kế hoạch test kênh và kế hoạch nguồn lực.  
\- Go/No-go: nếu đạt các mốc trên thì mở khoá giai đoạn tăng trưởng (bắt đầu thu phí, lên Google Play); nếu không đạt thì điều chỉnh sản phẩm trước khi scale.  
---

## **MILESTONE 2: BUSINESS MODEL & GO-TO-MARKET**

#### **Step 1: KPI mục tiêu cho mô hình kinh doanh**

Áp dụng khung AARRR (Acquisition, Activation, Retention, Referral, Revenue):

\- Acquisition: ít nhất 5-10 user mới/tuần trong Pilot (phù hợp ngân sách Pilot 2 triệu đồng).  
\- Activation: ít nhất 70% user hoàn thành 1 lượt nhập liệu AI (Voice/Vision) ngay lần dùng đầu. Khảo sát cho thấy 45/111 người đòi hỏi nhập liệu cực nhanh.  
\- Retention: tuần 2 đạt ít nhất 20% (Pilot), nâng lên ít nhất 25% ở giai đoạn tăng trưởng đầu tiên.  
\- Referral: theo dõi tỷ lệ user mới đến từ giới thiệu, hướng tới trên 50%. Word of Mouth là kênh số 1 với 63/111 người.  
\- Revenue, conversion Free sang Paid: ít nhất 5% (mốc năm 2). Dưới 2% sau khi A/B test giá là dấu hiệu xấu.  
\- Revenue, churn hàng tháng: tối đa 10%.  
\- Revenue, ARPU: khoảng 35.500 đồng/tháng (năm 1).  
\- Unit Economics: LTV/CAC lớn hơn 2 ngay từ năm 1\.

#### **Step 2: Funnel theo dõi hàng tuần**

Funnel gồm 5 bước, đo hàng tuần trong Pilot và giai đoạn tăng trưởng đầu tiên:

1\. Tiếp cận (Reach): số người thấy nội dung/quảng cáo trên Facebook/TikTok/Zalo.  
   \-\> tỷ lệ click vào landing page / link tải app  
2\. Cài đặt (Install): số lượt tải app / đăng ký tài khoản.  
   \-\> % hoàn thành onboarding  
3\. Kích hoạt (Activate): số user thực hiện ít nhất 1 lượt AI Voice/Vision thành công.  
   \-\> % quay lại trong 7 ngày  
4\. Duy trì (Retain): số user còn hoạt động ở tuần 2 và tuần 4\.  
   \-\> % nâng cấp gói trả phí  
5\. Chuyển đổi (Convert): số user trả phí (Premium/Family/Micro-POS) và % user mới đến từ referral.

Cách theo dõi hàng tuần:  
\- Mỗi thứ Hai, nhóm marketing tổng hợp 5 con số trên vào Google Sheet theo tuần (dữ liệu từ Supabase và Facebook/TikTok Ads Manager), rồi tính tỷ lệ chuyển đổi giữa từng bước.  
\- Bước nào có tỷ lệ rớt cao bất thường so với tuần trước sẽ được ưu tiên xử lý trong tuần kế tiếp.  
\- Ví dụ: nếu "Cài đặt \-\> Kích hoạt" thấp thì nghi ngờ AI Voice chưa đủ chính xác; nếu "Kích hoạt \-\> Duy trì" thấp thì xem lại Smart Alert có đủ hấp dẫn để kéo user quay lại không.  
\- Funnel vì vậy là công cụ ra quyết định hàng tuần, theo đúng tinh thần Lean Startup (Build-Measure-Learn).

#### **Step 3: 5 kênh tiếp cận người dùng và lý do**

1\. Word of Mouth (giới thiệu bạn bè/người thân)  
Kênh số 1 theo khảo sát: 63/111 người biết đến app tương tự qua giới thiệu. Chi phí gần bằng 0, độ tin cậy cao nhất vì đến từ người quen.

2\. TikTok  
57/111 người chọn. Video ngắn phù hợp để demo trực quan AI Voice/Vision, vốn khó giải thích bằng chữ. Nhóm người dùng trẻ (18-30) nhạy với công nghệ mới.

3\. Facebook (Group nội trợ, Fanpage, Ads)  
58/111 người chọn. Nhóm tuổi 31-40 (43/111 người, đông nhất khảo sát) và các hội nhóm nội trợ (27 người) tập trung ở đây, đúng target user chính là người quản lý đồ dùng gia đình.

4\. Cửa hàng ứng dụng (App Store / Google Play, tối ưu ASO)  
22/111 người tìm app qua kho ứng dụng. Đây là kênh "always-on", chỉ tốn công tối ưu từ khoá, mô tả, ảnh chụp màn hình.

5\. Zalo (nhóm chat, Zalo OA)  
Kênh giao tiếp phổ biến nhất với người Việt trên 30 tuổi (nhóm nội trợ, cha mẹ có con nhỏ). Dùng để tuyển tester Pilot, chăm sóc khách hàng, và tiếp cận chủ tạp hóa (B2B) cho workshop.

#### **Step 4: Kế hoạch test kênh (có / không ngân sách)**

Mỗi kênh test trong khung 2 tuần, đo bằng 2 chỉ số:  
\- CAC theo kênh (chi phí / số user activate được)  
\- Chất lượng user (retention tuần 2 của nhóm đến từ kênh đó so với trung bình)  
Kênh có CAC thấp và retention không thua trung bình sẽ được tăng ngân sách ở giai đoạn tăng trưởng; kênh có CAC cao hoặc retention kém sẽ bị cắt giảm. Cách này phù hợp ngân sách marketing 2 triệu đồng (Pilot) tăng lên 16 triệu đồng (năm 1).

1\. Word of Mouth  
\- Không ngân sách: chương trình giới thiệu bạn bè thủ công (voucher/ưu đãi đổi lấy feedback) trong nhóm Pilot 50 người.  
\- Có ngân sách: Referral Program có thưởng chính thức (quý 2 năm 1, 4 triệu đồng).

2\. TikTok  
\- Không ngân sách: tự quay video hướng dẫn tính năng bằng tài khoản của team, đăng đều 2-3 video/tuần, đo view/CTR.  
\- Có ngân sách: hợp tác KOC/KOL micro-influencer trả phí (quý 2 năm 1, 4 triệu đồng).

3\. Facebook  
\- Không ngân sách: đăng trong các hội nhóm nội trợ có sẵn (miễn phí), chia sẻ cá nhân của 6 thành viên team.  
\- Có ngân sách: Facebook Ads nhắm nhóm nội trợ/văn phòng 25-40 tuổi (Pilot: 2 triệu đồng; quý 1 năm 1: 4 triệu đồng).

4\. App Store / Google Play  
\- Không ngân sách: tối ưu ASO thủ công (từ khoá, mô tả, ảnh chụp màn hình).  
\- Có ngân sách: chưa ưu tiên chi tiền ở giai đoạn đầu vì ASO đã đủ hiệu quả với ngân sách thấp.

5\. Zalo  
\- Không ngân sách: tự lập nhóm chat tester, nhắn tin cá nhân mời dùng thử qua Zalo OA miễn phí.  
\- Có ngân sách: nâng cấp Zalo OA (broadcast, chatbot CSKH) khi có ngân sách quý 3 năm 1 (workshop tạp hóa, 4 triệu đồng).

#### **Step 5: Nguồn lực cần thiết**

\- Nhân sự: 4 Developer (2 Mobile \+ 2 Backend) và 2 Marketing/Content.  
\- Vốn vận hành 12 tháng đầu: khoảng 50 triệu đồng (token stipend, chi phí vận hành, marketing, dự phòng).  
\- Hạ tầng kỹ thuật: cloud hosting (Supabase/VPS), Gemini API (Vision \+ NLP), STT/TTS (Whisper/ElevenLabs).  
\- Dữ liệu: database barcode sản phẩm Việt Nam (cần xây dựng, mua hoặc crowdsource).  
\- Công cụ: Figma (design), GitHub (code), Supabase (DB \+ Auth), Google Form (khảo sát).  
\- Đối tác: Shopee/TikTok Shop Affiliate, Google Cloud, KOC/KOL nội trợ.  
\- Pháp lý/tuân thủ: tài khoản Google Play Developer, cơ chế xin đồng ý dữ liệu cá nhân theo Nghị định 13/2023.

#### **Step 6: Cách thu hút nguồn lực**

\- Nhân sự: giữ chân 6 founder bằng mô hình lương 3 lớp: Token Stipend (250.000 đồng/người/tháng, trả ngay) \+ lương treo ghi sổ (2-3 triệu/người/tháng, trả khi có lãi) \+ cổ phần sáng lập (16,67%/người, vesting 4 năm, cliff 1 năm). Mô hình này tiết kiệm khoảng 150 triệu đồng tiền mặt trong năm 1 mà vẫn giữ động lực dài hạn.

\- Vốn: 50 triệu từ FPTU.

\- Hạ tầng và AI API: tận dụng gói miễn phí/giảm giá cho startup và sinh viên (Google Cloud for Startups, Supabase free tier) trong Pilot để giữ chi phí cố định ở mức 5-6 triệu đồng. Kiểm soát chi phí AI bằng Freemium giới hạn 30 sản phẩm và dùng Gemini Flash-Lite cho tác vụ đơn giản.

\- Dữ liệu barcode: xây dần qua chính người dùng Pilot. Mỗi lần AI không nhận diện được, user nhập tay 1 lần và dữ liệu tự động lưu vào database dùng chung. Cách này tiết kiệm chi phí và tăng độ chính xác theo thời gian.

\- Đối tác Affiliate và Cloud: đăng ký Shopee Affiliate / TikTok Shop Affiliate (miễn phí tham gia, chỉ chia hoa hồng khi có đơn, không tốn vốn trước) và liên hệ chương trình cloud credit dành cho startup của Google Cloud.

\- KOC/KOL và cộng đồng: giai đoạn đầu ưu tiên hợp tác đổi sản phẩm/ưu đãi thay vì trả tiền mặt (barter). Chỉ chuyển sang trả phí khi ngân sách marketing quý 2 năm 1 (4 triệu đồng) được giải ngân, để giảm rủi ro nếu kênh không hiệu quả.

# Hạ tầng công nghệ

### **Hạ tầng:** 

Frontend :   
Web: vercel \+ custom domain   
Mobile: đóng gói và tải lên store  
Backend : vps (cloud hosting) \- remote control  
Database: vps (cloud hosting) \- RDBMS control \- Docker container deployment

### **Tech stack:** 

Web portal (dashboard quản trị): ReactJS   
Mobile: Flutter Backend: NestJS \+ PostgreSQL   
Push Notification: Firebase Cloud Messaging (FCM)   
Scheduler: Cron Job (node-cron / Cloud Scheduler)   
DevOps: Docker container 

# TimeLineDev

#### **Giai đoạn 1: Chuyển đổi sang Mobile App & Launch MVP lên Stores (Tuần 1 \- Tuần 4\)**

**TUẦN 1** (Bắt đầu từ Ngày 7): Khởi tạo Mobile Project & Core Backend Supabase

Mobile Dev: Khởi tạo dự án Flutter (Android & iOS), dựng cấu trúc thư mục (Clean Architecture / Feature-first), cài đặt Design System (Theme, Colors, Typography từ Web Prototype).

Backend Dev: Khởi tạo Supabase Project, chạy SQL Schema (Auth, Workspaces, Profiles, Products, Inventory\_Lots, Assistant\_Turns). Thiết lập Row Level Security (RLS).

Store Setup: Đăng ký tài khoản Apple Developer Program (\$99/năm) & Google Play Console (\$25).

**TUẦN 2**: Tích hợp AI Middleware & Màn hình AI Voice/Vision Core

Backend Dev: Xây dựng Edge Function / Node.js Middleware kết nối Gemini 1.5 Flash (NLP) \+ Whisper API (Speech-to-Text). Cấu hình prompt trích xuất Tiếng Việt.

Mobile Dev: Triển khai tính năng thu âm 🎤, gửi file audio/transcript lên Backend, nhận JSON draft. Dựng màn hình AI Confirmation (cho người dùng sửa/xác nhận trước khi lưu).

Deliverable: App chạy nội bộ trên Android/iOS nhập được sản phẩm bằng giọng nói và lưu vào Supabase DB.

**TUẦN 3**: Đóng gói Tính năng MVP & Test Tương thích Màn hình

Mobile Dev: Hoàn thiện Màn hình Trang chủ (Home Dashboard), danh sách tủ đồ (categorized list), gạt gạt toggle "Còn/Hết", và Shopping List cơ bản.

Mobile & QA Dev: Test độ phân giải trên các dòng máy Android (Samsung, Xiaomi...) và iOS (iPhone 11 đến 15). Cấu hình App Icon, Splash Screen, Permissions (Camera, Microphone).

Store Prep: Chuẩn bị metadata (App Name, Short Description, Screenshots, Privacy Policy URL, Support Email).

**TUẦN 4**: SUBMIT & DEPLOY MVP 1.0 LÊN GOOGLE PLAY & APP STORE 🚀

DevOps / Dev Lead: Build file .aab (Android) và .ipa (iOS) qua TestFlight / Internal Testing.

Store Release: Submit bản build đầu tiên (v1.0.0) lên Google Play Console và Apple App Store Connect.

Backend Dev: Cấu hình Production DB & Monitor server status.

👉 Cột mốc: App chính thức xuất hiện trên App Store / CH Play (hoặc chuyển sang dạng Public Beta / Internal Release để người dùng tải về).

#### **Giai đoạn 2: Post-Launch, Tối ưu AI, Feature Expansion & Admin (Tuần 5 \- Tuần 10\)**

**TUẦN 5**: Vận hành Sau Release, Sửa Lỗi & Tích hợp Analytics Tracking

Dev Team: Theo dõi crash log qua Firebase Crashlytics / Sentry, xử lý các lỗi phát sinh từ người dùng thực tế trên Store.

Analytics Integration: Tích hợp Firebase Analytics / PostHog để track hành vi người dùng (số lần bấm mic/ngày, tỷ lệ hoàn tất AI confirm, drop-off rate).

AI Performance: Tối ưu prompt Gemini giảm Latency từ 3s xuống \< 1.5s và giảm tỷ lệ trích xuất sai tên/HSD.

**TUẦN 6**: Phát triển Chế độ Offline & Đồng bộ Dữ liệu (Local Storage & Sync)

Mobile Dev: Tích hợp Hive / SQLite để lưu dữ liệu sản phẩm local. Cho phép người dùng mở app xem tủ đồ ngay cả khi mất mạng (Offline mode).

Backend Sync Engine: Viết cơ chế Background Sync — tự động đẩy dữ liệu thay đổi khi thiết bị có mạng trở lại mà không gây xung đột data.

**TUẦN 7**: Tích hợp Push Notification System (Cảnh báo HSD Thông minh)

Backend Dev: Viết Cron Job (Cloud Worker) quét database vào 8:00 sáng mỗi ngày để lọc các sản phẩm sắp hết hạn.

Mobile & Cloud Dev: Tích hợp Firebase Cloud Messaging (FCM) và Apple Push Notification service (APNs). Đẩy thông báo tự động (Nhắc đồ tươi trước 3 ngày, đồ khô trước 30 ngày).

**TUẦN 8**: Xây dựng Web Admin Dashboard (Hệ thống Quản trị Vận hành)

Web Dev: Phát triển Web Admin Portal (bằng React/Vite hoặc Supabase Admin) cho phép Admin:

Quản lý danh sách User, cước gói (**free, premium, family**).

Cập nhật kho mã vạch toàn cục (Global Barcode Catalog).

Monitor số lượng token AI sử dụng & chi phí API hàng ngày.

**TUẦN 9**: Tích hợp In-App Purchase (IAP) & Affiliate Commerce Deep Links

Mobile Dev (Billing): Tích hợp SDK Thanh toán (RevenueCat / StoreKit 2 / Google Play Billing) cho gói Paywall Freemium (Quá 30 sản phẩm \-\> Popup nâng cấp Premium 29K).

Affiliate Integration: Thêm nút "Mua lại trên Shopee / TikTok Shop" trong Shopping List, tự động tạo Deep Link chèn mã giới thiệu Affiliate của team.

**TUẦN 10**: Freeze Code, Stress Test & Release Bản Cập Nhật v1.1 (Final MVP)

Dev Team: Đóng băng code (Code Freeze), tiến hành Load Testing (test chịu tải server Supabase khi có nhiều request đồng thời).

Bảo mật: Rà soát lỗ hổng bảo mật, che ẩn toàn bộ API Key, kiểm tra lại Supabase Row Level Security.

Final Store Release: Build & Submit bản cập nhật nâng cấp v1.1 (Stable Version) lên App Store & CH Play. Chuẩn bị môi trường sẵn sàng cho ngày Demo / Final Pitching môn học.

# Truyền thông

### **TUẦN 1–3: TẠO NHẬN BIẾT & ĐẶT VẤN ĐỀ**

**Mục tiêu:**  
Giúp khách hàng nhận ra những bất tiện trong việc quản lý đồ đạc và bắt đầu biết đến HomeMind.

**Việc thực hiện:**

* Đăng nội dung về các pain point: mất đồ, quên đồ, mua trùng, quên hạn sử dụng.  
* Nội dung dạng TikTok, Facebook Post, Story/Meme.

**Kỳ vọng:**  
Tăng nhận diện HomeMind và tạo sự quan tâm ban đầu từ khách hàng mục tiêu.

### **TUẦN 4: TĂNG TƯƠNG TÁC**

**Mục tiêu:**  
Tạo sự chú ý và tăng tương tác trước khi App ra mắt.

**Việc thực hiện:**

* Tổ chức 1 Minigame/Quiz trên Facebook.  
* Thực hiện 1 TikTok Challenge liên quan đến việc tìm kiếm/quản lý đồ đạc.

**Kỳ vọng:**  
Tăng Reach, Engagement và tạo sự mong đợi trước Launch.

### **TUẦN 5: RA MẮT HOMEmIND**

**Mục tiêu:**  
Thông báo chính thức HomeMind ra mắt và giới thiệu sản phẩm đến người dùng.

**Việc thực hiện:**

* Đăng Video Demo App và giới thiệu các tính năng chính.  
* Điều hướng người dùng đến Link tải App.

**Kỳ vọng:**  
Tạo độ phủ cao trong thời điểm Launch và thúc đẩy người dùng tìm hiểu/tải App.

### **TUẦN 6–8: XÂY DỰNG NIỀM TIN**

**Mục tiêu:**  
Giúp người dùng hiểu cách sử dụng và tăng mức độ tin tưởng vào HomeMind.

**Việc thực hiện:**

* Đăng feedback/trải nghiệm từ người dùng thật.  
* Xây dựng nội dung hướng dẫn và “Mẹo quản lý đồ đạc cùng HomeMind”.

**Kỳ vọng:**  
Tăng mức độ tin tưởng và khuyến khích người dùng tiếp tục sử dụng App.

### **TUẦN 9–10: LAN TỎA & KHUYẾN KHÍCH GIỚI THIỆU**

**Mục tiêu:**  
Biến người dùng hiện tại thành nguồn lan tỏa tự nhiên cho HomeMind.

**Việc thực hiện:**

* Triển khai nội dung “Mời bạn cùng dùng HomeMind”.  
* Khuyến khích UGC và chia sẻ trải nghiệm.

**Kỳ vọng:**  
Tăng lượt giới thiệu tự nhiên và mở rộng cộng đồng người dùng.

* 

# MKT

### 

### **TUẦN 1–3: XÂY DỰNG NỀN TẢNG & THU THẬP DATA**

**Mục tiêu:**  
Xây dựng hệ thống Marketing và thu thập nhóm khách hàng tiềm năng trước Launch.

**Việc thực hiện:**

* Hoàn thiện Landing Page và thiết lập Tracking.  
* Triển khai Pre-registration để thu thập data.

**Kỳ vọng:**  
Có hệ thống đo lường và hình thành nhóm khách hàng tiềm năng.

### **TUẦN 4: CHUẨN BỊ LAUNCH**

**Mục tiêu:**  
Hoàn thiện các kênh và công cụ cần thiết để chuyển đổi người dùng khi App ra mắt.

**Việc thực hiện:**

* Chuẩn bị App Store/Google Play và tối ưu ASO.  
* Hoàn thiện Smart Link/QR Code và hệ thống tracking.

**Kỳ vọng:**  
Sẵn sàng toàn bộ hệ thống để triển khai Launch và hạn chế lỗi trong quá trình chuyển đổi.

### **TUẦN 5: ACQUISITION – THU HÚT NGƯỜI DÙNG**

**Mục tiêu:**  
Tạo lượng người dùng đầu tiên cho HomeMind.

**Việc thực hiện:**

* Điều hướng traffic từ các kênh truyền thông đến App Store/Google Play.  
* Theo dõi nguồn và tỷ lệ chuyển đổi lượt tải.

**Kỳ vọng:**  
Tăng lượt tải và xác định được những kênh mang lại người dùng hiệu quả.

### **TUẦN 6–8: ACTIVATION & RETENTION**

**Mục tiêu:**  
Đảm bảo người dùng không chỉ tải App mà còn bắt đầu sử dụng và quay lại.

**Việc thực hiện:**

* Tối ưu onboarding và Push Notification.  
* Theo dõi hành vi người dùng sau khi tải App.

**Kỳ vọng:**  
Tăng tỷ lệ người dùng bắt đầu sử dụng App và cải thiện khả năng giữ chân.

### **TUẦN 9–10: REFERRAL & SCALE**

**Mục tiêu:**  
Tận dụng người dùng hiện tại để tạo thêm người dùng mới và chuẩn bị cho giai đoạn tăng trưởng tiếp theo.

**Việc thực hiện:**

* Triển khai Referral Program.  
* Tổng hợp và đánh giá hiệu quả các kênh Marketing.

**Kỳ vọng:**  
Tăng lượng người dùng đến từ giới thiệu và xác định các kênh có tiềm năng để tiếp tục đầu tư.

