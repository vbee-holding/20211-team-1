# I.Cấu trúc của project

## 1. Public folder
### 1.1. Static folder
- Có chứa folder statics chứa các file mà compiler sẽ không sử dụng khi biên dịch 

## 2. Src folder
- Chứa các file mã nguồn của chương 
### 2.1. Assets folder
- Chứa các hình ảnh, các icons (nếu cần thiết) được sử dụng ở bên trong các component
### 2.2. Modules folder
- Chứa các component sử dụng cho các role khác nhau trong chương trình. Ví dụ như ở project này thì mình có 2 role đó là user và admin nên mình sẽ chia ra thành 2 phần là user và admin
- Giả sử ở phía người dùng chúng ta sẽ có trang Home và trang chi tiết của chủ đề thể thao thì mình sẽ tạo ra 2 thư mục là Home và Sport tương ứng với 2 trang đó. 
- Ở bên trong mỗi thư mục nó chứa file index.js nó chính là container chứa tất cả các component để hợp thành trang đó.
### 2.3. Routes category
- Chứa các đường dẫn được sử dụng ở bên trong ứng dụng
### 2.4. Pages
- Chứa các trang hoặc màn hình ứng với các route ở trong ứng dụng web
### 2.5. Apis
- Mock-api folder:

  + Chứa dữ liệu và api do client tự viết để có thể kiểm tra hiển thị khi chưa có api từ server

- server-api:
 
  + Dùng để tương tác với server. Ở đây nó chỉ có nhiệm vụ là thực hiện post hoặc get, v.v chứ ko có xử lý logic ở đây

### 2.6. Services
- Chứa các xử lý nghiệp vụ đối với các component

### 2.7. Shares
- Components folder

    + Chưa các component cơ bản (button, input) được chúng ta chỉnh sửa lại cho phù hợp với mục đích (ví dụ như một input validate)

- Hooks:

    + Chứa các hook được chúng ta tự định nghĩa

- Layout:
    + Chứa các thành phần tạo nên layout và layout của trang web

- utils:
    + Chứa các function có thể được sử dụng ở nhiều nơi khác nhau trong 


## II. Các công nghệ sử dụng
### 1. React router v6
- https://reactrouter.com/docs/en/v6
### 2. Tailwind v3
- https://tailwindcss.com/docs/installation
