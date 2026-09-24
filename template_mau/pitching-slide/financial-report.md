# 📊 Báo Cáo Tài Chính — HomeMind (Smart Home Inventory)

> **File:** `SmartHomeInventoryFinanceReport.xlsx` (phiên bản mới nhất)  
> **Kỳ dự phòng:** 3 năm (Q1/2027 – Q4/2029)  
> **Đơn vị:** VNĐ (trừ khi ghi chú khác)

---

## Mục lục

1. [Key Assumptions](#1-key-assumptions)
2. [Revenue Projection](#2-revenue-projection)
3. [Cost Structure](#3-cost-structure)
4. [P&L Statement](#4-pl-statement)
5. [Fundraising Plan](#5-fundraising-plan)
6. [Valuation (Comparable Company Analysis)](#6-valuation-comparable-company-analysis)
7. [Unit Economics](#7-unit-economics)
8. [Sources & References](#8-sources--references)

---

## 1. Key Assumptions

| Chỉ số | Giá trị | Ghi chú |
|--------|---------|---------|
| **Premium Price** | 29.000₫/tháng | Khảo sát WTP 20.000-50.000₫ |
| **Family Price** | 59.000₫/tháng | 5 thành viên, chia sẻ dữ liệu |
| **Micro-POS Price** | 149.000₫/tháng | Khảo sát chủ cửa hàng |
| **Affiliate Commission Rate** | 5% | Shopee 1-10%, TikTok 2-15% |
| **Affiliate Avg Order Value** | 200.000₫ | Giá trị đơn hàng TB |
| **Affiliate CTR N1** | 2% | CTR năm đầu |
| **Affiliate CTR N2** | 3% | CTR năm 2 |
| **Affiliate CTR N3** | 5% | CTR năm 3 |
| **AI Cost – Free User** | 1.300₫/tháng | ~15 AI voice requests (STT + Gemini Flash) |
| **AI Cost – Premium User** | 4.000₫/tháng | ~60 AI voice requests |
| **AI Cost – Family User** | 6.500₫/tháng | ~100 AI voice requests (5 thành viên) |
| **AI Cost – MicroPOS** | 11.500₫/tháng | ~180 AI voice requests/store |
| **Cloud Hosting Base** | 1.000.000₫/tháng | VPS + DB + Storage + Monitoring |
| **SMS/Notif API** | 100.000₫/tháng | Firebase Cloud Messaging |
| **Store Fee Rate** | 15% | Apple/Google Play |
| **Payment Gateway Rate** | 3% | MoMo, VNPay, ZaloPay |
| **Founder Contribution** | 6.000.000₫ | 1.000.000₫/người × 6 |
| **FPT Education Grant** | 50.000.000₫ | Non-dilutive, đang chờ |
| **WACC** | 15% | Chi phí vốn startup Pre-seed VN |
| **Corporate Tax Rate** | 0% | Miễn thuế 3 năm đầu |
| **Churn Rate N1** | 10%/tháng | Giai đoạn đầu |
| **Churn Rate N2** | 7%/tháng | Cải thiện nhờ product stickiness |
| **Churn Rate N3** | 5%/tháng | Family Sharing + gamification |

> 🔴 **Thay đổi lớn:** Marketing tăng 2× (2M→4M/q N1), Free Users đạt 5.510 (N3), Deferred Salary tăng 2× (9M→18M/q), Founder Contribution 6M (1M/người)

---

## 2. Revenue Projection

### 2.1 User Growth

| Chỉ số | Q1/2027 | Q2/2027 | Q3/2027 | Q4/2027 | Q1/2028 | Q2/2028 | Q3/2028 | Q4/2028 | Q1/2029 | Q2/2029 | Q3/2029 | Q4/2029 |
|--------|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|
| **Free Users** | 51 | 125 | 197 | 250 | 498 | 819 | 1.107 | 1.617 | 2.170 | 2.796 | 3.863 | 5.510 |
| **Premium Users** | 5 | 15 | 35 | 60 | 120 | 220 | 380 | 600 | 900 | 1.300 | 1.900 | 2.800 |
| **Family Users** | 2 | 8 | 15 | 25 | 40 | 70 | 110 | 170 | 260 | 380 | 520 | 700 |
| **Micro-POS Users** | 0 | 2 | 5 | 10 | 18 | 30 | 45 | 65 | 90 | 120 | 160 | 220 |
| **Total Paid Users** | **7** | **25** | **55** | **95** | **178** | **320** | **535** | **835** | **1.250** | **1.800** | **2.580** | **3.720** |

> **Free Users tăng mạnh:** 51 (Q1/N1) → 5.510 (Q4/N3) nhờ chiến dịch Marketing mở rộng

### 2.2 Subscription Revenue

| Khoản mục | Q1/2027 | Q2/2027 | Q3/2027 | Q4/2027 | Năm 1 | Năm 2 | Năm 3 |
|-----------|:-------:|:-------:|:-------:|:-------:|:-----:|:-----:|:-----:|
| **Premium (29K)** | 217.500 | 870.000 | 2.175.000 | 4.132.500 | **7.395.000** | **96.150.000** | **504.600.000** |
| **Family (59K)** | 177.000 | 885.000 | 2.035.500 | 3.540.000 | **6.637.500** | **57.190.000** | **281.815.000** |
| **Micro-POS (149K)** | 0 | 447.000 | 1.564.500 | 3.352.500 | **5.364.000** | **59.053.500** | **228.907.500** |
| **Total Subscription** | **394.500** | **2.202.000** | **5.775.000** | **11.025.000** | **19.396.500** | **212.393.500** | **1.015.322.500** |

### 2.3 Affiliate Revenue

| Khoản mục | Q1/2027 | Q2/2027 | Q3/2027 | Q4/2027 | Năm 1 | Năm 2 | Năm 3 |
|-----------|:-------:|:-------:|:-------:|:-------:|:-----:|:-----:|:-----:|
| **Affiliate Revenue** | 17.400 | 62.400 | 120.600 | 179.100 | **379.500** | **4.371.450** | **30.457.500** |

> **Affiliate tăng mạnh** nhờ free user base lớn hơn → nhiều impression → nhấp affiliate cao hơn

### 2.4 Grand Total Revenue

| Khoản mục | Q1/2027 | Q2/2027 | Q3/2027 | Q4/2027 | Năm 1 | Năm 2 | Năm 3 |
|-----------|:-------:|:-------:|:-------:|:-------:|:-----:|:-----:|:------:|
| **Revenue** | 411.900 | 2.264.400 | 5.895.600 | 11.204.100 | **19.776.000** | **210.250.950** | **1.046.452.500** |

| Năm | Subscription | Affiliate | **Tổng doanh thu** |
|:---:|:-----------:|:---------:|:------------------:|
| **Năm 1 (2027)** | 19.396.500 | 379.500 | **19.776.000** |
| **Năm 2 (2028)** | 212.393.500 | 4.371.450 | **210.250.950** *(sau điều chỉnh)* |
| **Năm 3 (2029)** | 1.015.322.500 | 30.457.500 | **1.046.452.500** *(sau điều chỉnh)* |

---

## 3. Cost Structure

### 3.1 COGS

| Khoản mục | Q1/2027 | Q2/2027 | Q3/2027 | Q4/2027 | Năm 1 | Năm 2 | Năm 3 |
|-----------|:-------:|:-------:|:-------:|:-------:|:-----:|:-----:|:-----:|
| AI API (STT + Gemini) | 297.900 | 892.500 | 1.653.300 | 2.527.500 | **5.371.200** | **44.667.900** | **195.345.600** |
| Cloud & Hosting | 3.000.000 | 3.000.000 | 3.000.000 | 3.000.000 | **12.000.000** | **16.500.000** | **23.550.000** |
| SMS & Notification | 300.000 | 300.000 | 300.000 | 300.000 | **1.200.000** | **1.200.000** | **1.200.000** |
| Payment Gateway Fee | 10.298 | 56.610 | 147.390 | 280.103 | **494.400** | **5.256.776** | **26.172.131** |
| Store Fee (15%) | 59.175 | 330.300 | 866.250 | 1.653.750 | **2.909.475** | **31.878.900** | **160.974.000** |
| **Total COGS** | **3.667.373** | **4.579.410** | **5.966.940** | **7.761.353** | **21.975.075** | **98.494.324** | **398.808.788** |

### 3.2 Operating Expenses

| Khoản mục | Q1/2027 | Q2/2027 | Q3/2027 | Q4/2027 | Năm 1 | Năm 2 | Năm 3 |
|-----------|:-------:|:-------:|:-------:|:-------:|:-----:|:-----:|:-----:|
| Marketing & Promotion | 4.000.000 | 4.000.000 | 4.000.000 | 4.000.000 | **16.000.000** | **32.000.000** | **48.000.000** |
| Token Stipend (Cash) | 900.000 | 900.000 | 900.000 | 900.000 | **3.600.000** | **4.320.000** | **5.040.000** |
| Maintenance & Monitoring | 1.000.000 | 1.000.000 | 1.000.000 | 1.500.000 | **4.500.000** | **7.000.000** | **9.500.000** |
| **Total OPEX (Cash)** | **5.900.000** | **5.900.000** | **5.900.000** | **6.400.000** | **24.100.000** | **43.320.000** | **62.540.000** |

### 3.3 Deferred Salary

| Khoản mục | Q1-Q4/2027 | Năm 2 | Năm 3 |
|-----------|:----------:|:-----:|:-----:|
| Deferred Salary/quý | 18.000.000₫ | 27.000.000₫ | 36.000.000₫ |
| **Tổng lương treo/năm** | **72.000.000₫** | **108.000.000₫** | **144.000.000₫** |

> ⚠️ **Lương treo tăng 2×** so với bản cũ (18M→36M/quý) — phản ánh chi phí nhân sự thực tế hơn

### 3.4 Tổng hợp

| Năm | COGS | OPEX (Cash) | Deferred Salary | **Tổng chi phí (Full Accrual)** |
|:---:|:----:|:-----------:|:---------------:|:-------------------------------:|
| **Năm 1** | 21.975.075 | 24.100.000 | 72.000.000 | **118.075.075** |
| **Năm 2** | 98.494.324 | 43.320.000 | 108.000.000 | **249.814.324** |
| **Năm 3** | 398.808.788 | 62.540.000 | 144.000.000 | **605.348.788** |

---

## 4. P&L Statement

### 4.1 Từng quý

| Chỉ tiêu | Q1/2027 | Q2/2027 | Q3/2027 | Q4/2027 | Q1/2028 | Q2/2028 | Q3/2028 | Q4/2028 | Q1/2029 | Q2/2029 | Q3/2029 | Q4/2029 |
|----------|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|
| **Revenue** | 411.900 | 2.264.400 | 5.895.600 | 11.204.100 | 20.299.950 | 36.069.750 | 60.043.950 | 93.837.300 | 142.351.500 | 205.287.000 | 289.709.250 | 409.104.750 |
| COGS | 3.667.373 | 4.579.410 | 5.966.940 | 7.761.353 | 12.016.774 | 18.623.794 | 27.544.774 | 40.308.983 | 57.238.913 | 79.077.825 | 109.432.931 | 153.059.119 |
| **Gross Profit** | **-3.255.473** | **-2.315.010** | **-71.340** | **3.442.748** | **8.283.176** | **17.445.956** | **32.499.176** | **53.528.318** | **85.112.588** | **126.209.175** | **180.276.319** | **256.045.631** |
| GM% | -790% | -102% | -1% | 31% | 41% | 48% | 54% | 57% | 60% | 61% | 62% | 63% |
| OPEX (Cash) | 5.900.000 | 5.900.000 | 5.900.000 | 6.400.000 | 10.580.000 | 10.580.000 | 11.080.000 | 11.080.000 | 15.260.000 | 15.760.000 | 15.760.000 | 15.760.000 |
| **EBIT (Cash)** | **-9.155.473** | **-8.215.010** | **-5.971.340** | **-2.957.253** | **-2.296.824** | **6.865.956** | **21.419.176** | **42.448.318** | **69.852.588** | **110.449.175** | **164.516.319** | **240.285.631** |
| **EBIT (Full Accrual)** | **-27.155.473** | **-26.215.010** | **-23.971.340** | **-20.957.253** | **-29.296.824** | **-20.134.044** | **-5.580.824** | **15.448.318** | **33.852.588** | **74.449.175** | **128.516.319** | **204.285.631** |
| Tax (0%) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **Net Profit/Loss** | **-27.155.473** | **-26.215.010** | **-23.971.340** | **-20.957.253** | **-29.296.824** | **-20.134.044** | **-5.580.824** | **15.448.318** | **33.852.588** | **74.449.175** | **128.516.319** | **204.285.631** |
| Net Margin % | -65.93% | -11.58% | -4.07% | -1.87% | -1.44% | -0.56% | -0.09% | 16.46% | 23.78% | 36.27% | 44.36% | 49.93% |

### 4.2 Theo năm (Cash Basis)

| Chỉ tiêu | **Năm 1 (2027)** | **Năm 2 (2028)** | **Năm 3 (2029)** |
|----------|:----------------:|:----------------:|:----------------:|
| Total Revenue | 19.776.000 | 210.250.950 | 1.046.452.500 |
| COGS | 21.975.075 | 98.494.324 | 398.808.788 |
| Gross Profit | -2.199.075 | 111.756.626 | 647.643.713 |
| OPEX (Cash) | 24.100.000 | 43.320.000 | 62.540.000 |
| **Net Cash Flow** | **-26.299.075** | **68.436.626** | **585.103.713** |

> **3-Year Net Profit (Full Accrual): 303.241.264₫**  
> **3-Year Cumulative Cash Flow: 627.241.264₫**

### 4.3 Break-even

| Kịch bản | FC/tháng | ARPU | Var/user | Users cần |
|:--------:|:--------:|:----:|:--------:|:---------:|
| 🟢 Lạc quan (churn 5%) | 16.000.000₫ | 50.000₫ | 1.200₫ | **328** |
| 🟡 Cơ sở (churn 10%) | 14.833.333₫ | 32.000₫ | 1.200₫ | **482** |
| 🔴 Bi quan (churn 12%) | 14.000.000₫ | 20.000₫ | 1.200₫ | **745** |

> **Break-even (Cash):** Q2/2028 (dương EBIT Cash)  
> **Break-even (Full Accrual):** Q4/2028 (dương EBIT Full Accrual)

---

## 5. Fundraising Plan

### 5.1 Funding Sources

| Nguồn vốn | Số tiền | Loại |
|-----------|:-------:|:----:|
| Founder Contribution (6 người × 1M) | 6.000.000₫ | Equity |
| FPT Education Grant | 50.000.000₫ | Non-dilutive |
| **Tổng huy động** | **56.000.000₫** | |
| Chi phí cash Năm 1 | 46.075.075₫ | |
| **Thặng dư / Thiếu hụt** | **9.924.925₫** | |

### 5.2 Use of Funds (56 triệu₫)

| Hạng mục | Tỷ lệ | Số tiền |
|----------|:-----:|:-------:|
| Product & Tech (AI API, Cloud) | **41%** | 23.071.200₫ |
| Marketing & User Acquisition | **29%** | 16.000.000₫ |
| Dự phòng rủi ro | **18%** | 9.924.925₫ |
| Operation & Admin | **13%** | 7.003.875₫ |
| **Tổng** | **100%** | **56.000.000₫** |

### 5.3 Equity Sensitivity

| Raise ↓ \ Pre → | 1 tỷ | 2 tỷ | 3 tỷ | 4 tỷ |
|:----------------:|:----:|:----:|:----:|:----:|
| **50.000.000₫** | 4.76% | 2.44% | 1.64% | 1.23% |
| **56.000.000₫** | 5.30% | 2.72% | 1.83% | 1.38% |
| **100.000.000₫** | 9.09% | 4.76% | 3.23% | 2.44% |

---

## 6. Valuation (Comparable Company Analysis)

### 6.1 Peer Companies (Smart Home VN)

| Công ty | Enterprise Value (VND) | Doanh thu (VND) | EV/Revenue |
|---------|:---------------------:|:---------------:|:----------:|
| **FPT Smart Home** | 500.000.000.000 | 100.000.000.000 | **5.0×** |
| **Lumi** | 300.000.000.000 | 50.000.000.000 | **6.0×** |
| **Bkav SmartHome** | 200.000.000.000 | 40.000.000.000 | **5.0×** |
| **Vconnex** | 150.000.000.000 | 25.000.000.000 | **6.0×** |

| Metric | Giá trị |
|--------|:-------:|
| **Average Multiple** | **5.5×** |
| **Median Multiple** | **5.5×** |

### 6.2 Implied Valuation

| Năm | Doanh thu | Multiple | **Implied EV** |
|:---:|:---------:|:--------:|:--------------:|
| Năm 3 (2029) | 1.046.452.500₫ | 5.5× | **5.755.488.750₫** |

### 6.3 Berkus Method (Pre-money)

| Yếu tố | Giá tối đa | Hệ số | Kết quả |
|--------|:---------:|:-----:|:-------:|
| Basic Idea | 500.000.000 | ×1.0 | 500.000.000₫ |
| Prototype/MVP | 500.000.000 | ×0.3 | 150.000.000₫ |
| Team Quality | 500.000.000 | ×0.7 | 350.000.000₫ |
| Strategic Relationships | 500.000.000 | ×0.2 | 100.000.000₫ |
| Product Rollout | 500.000.000 | ×0.2 | 100.000.000₫ |
| **Pre-money (Berkus)** | | | **1.200.000.000₫** |

### 6.4 Kết luận

| Phương pháp | Kết quả |
|-------------|:-------:|
| **Comparable (5.5× EV/Revenue N3)** | **5.755.488.750₫** |
| **Berkus Method (Pre-money)** | **1.200.000.000₫** |

> **Pre-money đề xuất: 1.200.000.000₫ (~$50K)**  
> **Post-money: 1.256.000.000₫ (raise 56M → 4.46% equity)**

---

## 7. Unit Economics

| Chỉ số | Năm 1 | Năm 2 | Năm 3 |
|--------|:-----:|:-----:|:-----:|
| **Marketing** | 16.000.000₫ | 32.000.000₫ | 48.000.000₫ |
| Paid users mới | 182 | 1.868 | 9.350 |
| **CAC** | **87.912₫** | **17.131₫** | **5.134₫** |
| ARPU | 35.525₫/th | 36.738₫/th | 36.221₫/th |
| Churn/tháng | 10% | 7% | 5% |
| Lifetime (tháng) | 10 | 14.3 | 20 |
| **LTV** | **194.705₫** | **319.149₫** | **458.364₫** |
| **LTV/CAC** | **2.21×** | **18.63×** | **89.29×** |

> ℹ️ **LTV tính mới:** (ARPU − AI Cost − Store 15% − Payment 3%) × Lifetime  
> LTV/CAC > 2× ở N1 → healthy, > 3× từ N2 trở đi

---

## 8. Sources & References

| Nội dung | Nguồn |
|----------|-------|
| Lãng phí B2C: 123.000₫/tháng | Khảo sát 96 người |
| Thất thoát B2B: 550.000₫/tháng | Khảo sát 15 chủ cửa hàng |
| WTP B2C: 20K-50K₫ (39 người) | Khảo sát 111 người |
| WTP B2B: 100K-200K₫ (12 người) | Khảo sát 52 chủ cửa hàng |
| Home Tech growth 18.7%/năm | [Alibaba Report](https://seller.alibaba.com/blogs/2026/) |
| Speech-to-Text pricing | [Google Cloud STT](https://cloud.google.com/speech-to-text/pricing) |
| Gemini 3.5 Flash pricing | [Google AI](https://ai.google.dev/pricing) |
| Shopee Affiliate 1-10% | [Shopee Affiliate](https://affiliate.shopee.vn/) |
| TikTok Shop Affiliate 2-15% | [TikTok Shop](https://seller-vn.tiktok.com/) |
| Berkus Method | [Dave Berkus](https://berkus.com/) |

---

## 📌 Tóm tắt chỉ số chính

| Chỉ số | Bản cũ | **Bản mới** |
|--------|:------:|:-----------:|
| **Tổng vốn huy động** | 55.160.000₫ | **56.000.000₫** |
| **Founder Contribution** | 5.160.000₫ (860K/ng) | **6.000.000₫ (1M/ng)** |
| **Chi phí cash Năm 1** | 36.107.480₫ | **46.075.075₫** |
| **Thặng dư** | 19.052.520₫ | **9.924.925₫** |
| **Doanh thu N1/N2/N3** | 19,5M/207M/1.028M | **19,8M/210M/1.046M** |
| **Net Profit 3 năm** | 528.929.621₫ | **303.241.264₫** |
| **Cash Flow 3 năm** | 744.929.621₫ | **627.241.264₫** |
| **Break-even (Cash)** | Q2/2028 | **Q2/2028** |
| **Break-even (Full Accrual)** | Q3/2028 | **Q4/2028** |
| **CAC N1** | 43.956₫ | **87.912₫** |
| **LTV N1** | 355.247₫ | **194.705₫** |
| **LTV/CAC N1** | 8.08× | **2.21×** |
| **Implied EV (Comparable)** | — | **5.755.488.750₫ (5.5× Rev N3)** |
| **Pre-money (Berkus)** | 1.200.000.000₫ | **1.200.000.000₫** |

> 🔴 **Thay đổi chính:** Marketing budget ×2, Deferred Salary ×2, Free users tăng mạnh → AI cost cao hơn → Net Profit giảm. CAC gấp đôi nhưng LTV/CAC vẫn healthy (2.21× N1).

---

> 📄 *Trích xuất từ `SmartHomeInventoryFinanceReport.xlsx` — Dự phòng 3 năm (2027-2029)*  
> *🔄 Cập nhật lần cuối với Comparable Method + số liệu mới nhất*
