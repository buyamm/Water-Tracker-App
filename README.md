# 🚰 Water Tracker - Ứng dụng Theo dõi Nước uống

<div align="center">

**Ứng dụng đa nền tảng giúp bạn theo dõi lượng nước uống hàng ngày**

[![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![Capacitor](https://img.shields.io/badge/Capacitor-5.0+-119EFF?style=flat&logo=capacitor&logoColor=white)](https://capacitorjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 👨‍🎓 Thông tin Sinh viên

| Thông tin        | Chi tiết                            |
| ---------------- | ----------------------------------- |
| **Họ và tên**    | TRƯƠNG CÔNG LÝ                      |
| **Mã sinh viên** | 22IT169                             |
| **Lớp**          | 22SE2                               |
| **Môn học**      | Phát triển ứng dụng đa nền tảng (2) |
| **Giảng viên**   | TS. Nguyễn Thanh Tuấn               |
| **Đề**           | **_6_**                             |

---

## 📋 Mục lục

- [Giới thiệu](#-giới-thiệu)
- [Tính năng](#-tính-năng)
- [Công nghệ sử dụng](#-công-nghệ-sử-dụng)
- [Yêu cầu hệ thống](#-yêu-cầu-hệ-thống)
- [Hướng dẫn cài đặt](#-hướng-dẫn-cài-đặt)
- [Hướng dẫn chạy ứng dụng](#-hướng-dẫn-chạy-ứng-dụng)
- [Cấu trúc thư mục](#-cấu-trúc-thư-mục)
- [Screenshots](#-screenshots)

---

## 📖 Giới thiệu

**Water Tracker** là ứng dụng đa nền tảng (Web, Android, iOS) được phát triển bằng React và Capacitor, giúp người dùng:

- 💧 Theo dõi lượng nước uống hàng ngày
- 📊 Xem thống kê và tiến độ đạt mục tiêu
- 📜 Lưu lịch sử chi tiết từng lần uống nước
- 🔄 Tự động reset dữ liệu mỗi ngày mới

Ứng dụng được thiết kế với giao diện thân thiện, màu sắc tươi sáng và tích hợp các tính năng native như rung haptic feedback.

---

## ✨ Tính năng

### 🏠 Màn hình chính

- ✅ Hiển thị tổng lượng nước đã uống (ml)
- ✅ Thanh tiến độ phần trăm so với mục tiêu (2000ml)
- ✅ 3 nút thêm nhanh: **+100ml**, **+200ml**, **+300ml**
- ✅ Rung nhẹ khi bấm nút (Haptic Feedback)
- ✅ Animation mượt mà khi cập nhật

### 📜 Màn hình lịch sử

- ✅ Danh sách chi tiết thời gian + lượng nước
- ✅ Sắp xếp theo thứ tự mới nhất
- ✅ Nút xóa toàn bộ lịch sử
- ✅ Hiển thị trạng thái rỗng khi chưa có dữ liệu

### 🔧 Tính năng kỹ thuật

- ✅ **Persistent Storage**: Lưu dữ liệu offline bằng Capacitor Storage
- ✅ **Auto Reset**: Tự động reset dữ liệu vào đầu ngày mới
- ✅ **Haptic Feedback**: Rung thiết bị khi tương tác
- ✅ **Responsive Design**: Tương thích mọi kích thước màn hình
- ✅ **Native Performance**: Chạy như app native trên Android/iOS

---

## 🛠️ Công nghệ sử dụng

### Frontend Framework

- **React 18** - Thư viện UI components
- **React Hooks** - State management (useState, useEffect)
- **Lucide React** - Icon library

### Mobile Framework

- **Capacitor 5** - Framework đa nền tảng
- **Capacitor Storage** - Plugin lưu trữ dữ liệu
- **Capacitor Haptics** - Plugin rung thiết bị

### Styling

- **Tailwind CSS 3** - Utility-first CSS framework
- **Custom CSS** - Animations và styles tùy chỉnh

### Build Tools

- **Create React App** - React toolchain
- **Capacitor CLI** - Build native apps
- **Node.js & npm** - Package management

---

## 💻 Yêu cầu hệ thống

### Phát triển Web

- **Node.js**: >= 16.0.0
- **npm**: >= 8.0.0 hoặc **yarn**: >= 1.22.0
- **Git**: >= 2.0.0

### Phát triển Android

- **Android Studio**: Arctic Fox trở lên
- **Android SDK**: API Level 22+ (Android 5.1+)
- **JDK**: 11 hoặc 17
- **Gradle**: 7.0+

### Phát triển iOS (chỉ trên macOS)

- **Xcode**: 13.0+
- **CocoaPods**: 1.10+
- **iOS Deployment Target**: 13.0+
- **macOS**: Big Sur (11.0) trở lên

---

## 📦 Hướng dẫn cài đặt

### Bước 1: Clone repository

```bash
git clone https://github.com/your-username/water-tracker.git
cd water-tracker
```

### Bước 2: Cài đặt dependencies

```bash
# Sử dụng npm
npm install

# Hoặc sử dụng yarn
yarn install
```

### Bước 3: Cài đặt Capacitor và Plugins

```bash
# Cài đặt Capacitor CLI
npm install @capacitor/cli @capacitor/core

# Cài đặt plugins
npm install @capacitor/storage @capacitor/haptics

# Cài đặt platforms (nếu cần)
npm install @capacitor/android @capacitor/ios
```

### Bước 4: Khởi tạo Capacitor (nếu chưa có)

```bash
npx cap init
# App name: Water Tracker
# Package ID: com.yourname.watertracker
```

### Bước 5: Setup Tailwind CSS

```bash
# Cài đặt Tailwind
npm install -D tailwindcss postcss autoprefixer

# Khởi tạo config
npx tailwindcss init -p
```

Cấu hình `tailwind.config.js`:

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

## 🚀 Hướng dẫn chạy ứng dụng

### 1. Chạy trên Web (Development)

```bash
# Khởi động development server
npm start

# Ứng dụng sẽ mở tại: http://localhost:3000
```

### 2. Build Production

```bash
# Build web app
npm run build

# Output sẽ nằm trong thư mục: build/
```

### 3. Chạy trên Android

#### 3.1. Thêm Android platform (lần đầu)

```bash
# Build web trước
npm run build

# Thêm Android platform
npx cap add android

# Sync code
npx cap sync android
```

#### 3.2. Mở Android Studio

```bash
npx cap open android
```

#### 3.3. Chạy ứng dụng

1. Trong Android Studio, chọn device/emulator
2. Click nút **Run** ▶️ (hoặc Shift + F10)
3. Ứng dụng sẽ được cài đặt và chạy trên thiết bị

#### 3.4. Workflow phát triển Android

Sau mỗi lần thay đổi code:

```bash
npm run build
npx cap sync android
# Sau đó click Run trong Android Studio
```

### 4. Chạy trên iOS (chỉ trên macOS)

#### 4.1. Thêm iOS platform (lần đầu)

```bash
# Build web trước
npm run build

# Thêm iOS platform
npx cap add ios

# Sync code
npx cap sync ios

# Cài đặt pods
cd ios/App
pod install
cd ../..
```

#### 4.2. Mở Xcode

```bash
npx cap open ios
```

#### 4.3. Chạy ứng dụng

1. Trong Xcode, chọn simulator hoặc thiết bị
2. Click nút **Run** ▶️ (hoặc Cmd + R)
3. Ứng dụng sẽ được cài đặt và chạy

#### 4.4. Workflow phát triển iOS

Sau mỗi lần thay đổi code:

```bash
npm run build
npx cap sync ios
# Sau đó click Run trong Xcode
```

### 5. Scripts hữu ích

Thêm vào `package.json`:

```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "cap:sync": "npm run build && cap sync",
    "cap:android": "npm run cap:sync && cap open android",
    "cap:ios": "npm run cap:sync && cap open ios",
    "android": "npm run cap:android",
    "ios": "npm run cap:ios"
  }
}
```

Sử dụng:

```bash
# Build và mở Android Studio
npm run android

# Build và mở Xcode
npm run ios

# Chỉ sync code
npm run cap:sync
```

---

## 📁 Cấu trúc thư mục

```
water-tracker/
│
├── android/                    # Android native project
├── ios/                        # iOS native project
│
├── public/                     # Static files
│   ├── index.html
│   └── manifest.json
│
├── src/                        # Source code
│   │
│   ├── components/             # React Components
│   │   ├── WaterStats.jsx      # Component hiển thị thống kê
│   │   ├── QuickAddButtons.jsx # Component nút thêm nhanh
│   │   ├── HistoryItem.jsx     # Component item lịch sử
│   │   └── HistoryList.jsx     # Component danh sách lịch sử
│   │
│   ├── services/               # Business Logic
│   │   ├── StorageService.js   # Service xử lý lưu trữ
│   │   └── HapticsService.js   # Service xử lý rung
│   │
│   ├── App.jsx                 # Main App component
│   ├── App.css                 # Global styles
│   └── index.js                # Entry point
│
├── .gitignore
├── capacitor.config.ts         # Capacitor configuration
├── package.json                # Dependencies
├── tailwind.config.js          # Tailwind configuration
└── README.md                   # Documentation
```

---

## 📸 Screenshots

### Màn hình chính

![Main Screen](./screenshots/1.%20Màn%20hình%20chính%20khi%20chưa%20uống%20nước.png.png)
_Hiển thị tổng lượng nước và nút thêm nhanh_

### Màn hình lịch sử

![History Screen](./screenshots/2.%20Lịch%20sử%20rỗng.png.png)
_Danh sách chi tiết lịch sử uống nước_

---

## 🐛 Troubleshooting

### Lỗi thường gặp

#### 1. Storage không hoạt động

```bash
# Giải pháp: Sync lại capacitor
npx cap sync
```

#### 2. Haptics không rung trên Android

```bash
# Kiểm tra quyền trong android/app/src/main/AndroidManifest.xml
# Đảm bảo có dòng:
<uses-permission android:name="android.permission.VIBRATE" />
```

#### 3. Build Android bị lỗi

```bash
# Clear gradle cache
cd android
./gradlew clean
cd ..
npx cap sync android
```

#### 4. iOS pods install lỗi

```bash
cd ios/App
pod deintegrate
pod install
cd ../..
```

---

## 🔐 License

Dự án này được phát triển cho mục đích học tập.

---

## 📞 Liên hệ

- **Email:** nguyenvana@example.com
- **GitHub:** [@your-username](https://github.com/your-username)
- **Facebook:** [Your Name](https://facebook.com/yourname)
