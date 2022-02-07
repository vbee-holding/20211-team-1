# Cách cài đặt chương trình
## Bước 1: Clone code từ repository về máy bằng lệnh:
```
git clone https://github.com/vbee-holding/20211-team-1.git
```
![image](https://user-images.githubusercontent.com/58870427/152806210-c98cdaab-4ad2-43ce-93e3-e84fc928736f.png)
## Bước 2: Sử dụng vscode hoặc một editor nào khác để mở project
![image](https://user-images.githubusercontent.com/58870427/152806649-69df538d-e234-4bab-8d35-5db19c4950e2.png)

## Bước 3: Cài đặt các thư viện cần thiết bằng cách vào từng folder client, server và crawl và sử dụng lệnh
```
npm install
```
- Client

![image](https://user-images.githubusercontent.com/58870427/152807369-64e291be-156a-4b2f-a999-f20f37d28ca0.png)

- Crawl

![image](https://user-images.githubusercontent.com/58870427/152807765-95c643e0-320d-4724-88fd-c91afaabc32c.png)

- Server

![image](https://user-images.githubusercontent.com/58870427/152807817-60a70990-a47c-4496-b3fb-118971a0add5.png)

## Bước 4: Sau khi cài đặt thành công thư viện, chúng ta có thể thay đổi tài khoản của cơ sở dữ liệu hoặc có thể dùng luôn tài khoản đang có sẵn ở trong file .env

![image](https://user-images.githubusercontent.com/58870427/152808310-e19207ae-f97d-4681-8c1b-0a07f6eff45b.png)

## Bước 5: Ở phía server và crawl (riêng phần crawl thì chúng ta cần thay đổi đường dẫn đến thư mục src) , chúng ta sử dụng lệnh nodemon index.js để chạy chương trình, phía client chúng ta sử dụng lệnh npm start để thực thi chương trình
- Server
```
nodemon index.js
```

![image](https://user-images.githubusercontent.com/58870427/152808947-98788499-c525-4325-8665-7cc22a607277.png)

- Crawl
```
cd src
nodemon index.js
```
![image](https://user-images.githubusercontent.com/58870427/152809224-3a940b6a-1b03-45bf-b197-4e08f50e8da6.png)

- Client
```
npm start
```
![image](https://user-images.githubusercontent.com/58870427/152809525-559a30c7-c935-40bf-af15-84d115fe1165.png)

## Bước 5: Mở trình duyệt và truy cập vào đường dẫn localhost cổng 3000 sẽ có kết quả
```
http://localhost:3000/
```
![image](https://user-images.githubusercontent.com/58870427/152809788-35e85a63-17cd-4c1b-b7b0-3c9006063e4a.png)


