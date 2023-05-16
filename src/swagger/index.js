/**
 * @swagger
 * /api/user/login:
 *  post:
 *      description: Đăng Nhập User
 * 
 *      tags: [User]
 * 
 *      parameters:
 *      - in: header
 *        name: token
 *        description: Nhập token
 *        required: true
 *        type: string
 * 
 *      - in: body
 *        name: User Login
 *        schema:
 *           type: object
 *           properties:
 *             email:
 *              type: string
 *             mat_khau: 
 *              type: string
 *      responses:
 *          200: 
 *              description: success   
 */ 

/**
 * @swagger
 * /api/user/register:
 *  post:
 *      description: Đăng Ký User
 * 
 *      tags: [User]
 * 
 *      parameters:
 *      - in: header
 *        name: token
 *        description: Nhập token
 *        required: true
 *        type: string
 * 
 *      - in: body
 *        name: User Register
 *        schema:
 *           type: object
 *           properties:
 *             email:
 *              type: string
 *             mat_khau: 
 *              type: string
 *             ho_ten:
 *              type: string
 *             tuoi: 
 *              type: integer
 *      responses:
 *          200: 
 *              description: success   
 */ 

/**
 * @swagger
 * /api/user/getCreateIMG/{id}:
 *  get:
 *      tags: [User]
 *      description: Ảnh người đùng đã tạo
 *      parameters:
 *      - in: header
 *        name: token
 *        description: Nhập token
 *        required: true
 *        type: string
 * 
 *      - in: path
 *        description: Nhập ID người dùng
 *        name: id
 *        type: number
 *        required: true
 * 
 *      responses:
 *       200: 
 *              description: success   
 */

/**
 * @swagger
 * /api/user/getSaveIMG/{id}:
 *  get:
 *      tags: [User]
 *      description: Ảnh người đùng đã lưu
 *      parameters:
 *      - in: header
 *        name: token
 *        description: Nhập token
 *        required: true
 *        type: string
 * 
 *      - in: path
 *        description: Nhập ID người dùng
 *        name: id
 *        type: number
 *        required: true
 *      responses:
 *       200: 
 *              description: success   
 */

/**
 * @swagger
 * /api/user/getUser:
 *  get:
 *      description: Lấy thông tin người dùng
 *      parameters:
 *      - in: header
 *        name: token
 *        description: Nhập token
 *        required: true
 *        type: string
 *     
 *      tags: [User]
 * 
 *      responses:
 *       200: 
 *              description: success   
 */

/**
 * @swagger
 * /api/user/updateUser/{id}:
 *  put:
 *      tags: [User]
 *      description: Cập nhật thông tin người dùng
 *      consumes:
 *      - multipart/form-data
 *      parameters:
 *      - in: header
 *        name: token
 *        description: Nhập token
 *        required: true
 *        type: string
 *     
 *      - in: path
 *        description: Nhập ID người dùng
 *        name: id
 *        type: number
 *        required: true
 *        
 *      - in: fromData
 *        name: file
 *        type: file
 *        description: The file to upload.
 *     
 *      - in: body
 *        name: User Update
 *        schema:
 *           type: object
 *           properties:
 *             ho_ten:
 *              type: string
 *             tuoi: 
 *              type: integer
 * 
 *      responses:
 *       200: 
 *              description: success   
 */

/**
 * @swagger
 * /api/img/get:
 *  get:
 *      tags: [Images]
 *      description: Lấy tất cả ảnh
 *      parameters:
 *      - in: header
 *        name: token
 *        description: Nhập token
 *        required: true
 *        type: string
 * 
 *      responses:
 *        200: 
 *          description: success   
 */

/**
 * @swagger
 * /api/img/detailIMG/{id}:
 *  get:
 *      tags: [Images]
 *      description: Lấy thông tin chi tiết ảnh
 *      parameters:
 *      - in: header
 *        name: token
 *        description: Nhập token
 *        required: true
 *        type: string
 * 
 *      - in: path
 *        description: Nhập ID ảnh
 *        name: id
 *        type: number
 *        required: true
 * 
 *      responses:
 *        200: 
 *          description: success   
 */

/**
 * @swagger
 * /api/img/commentIMG/{id}:
 *  get:
 *      tags: [Images]
 *      description: Lấy các bình luận của ảnh
 *      parameters:
 *      - in: header
 *        name: token
 *        description: Nhập token
 *        required: true
 *        type: string
 * 
 *      - in: path
 *        description: Nhập ID ảnh
 *        name: id
 *        type: number
 *        required: true
 * 
 *      responses:
 *        200: 
 *          description: success   
 */

/**
 * @swagger
 * /api/img/find:
 *  post:
 *      tags: [Images]
 *      description: Tìm kiếm hình ảnh
 *      parameters:
 *      - in: header
 *        name: token
 *        description: Nhập token
 *        required: true
 *        type: string
 * 
 *      - in: body
 *        name: Key Word
 *        schema:
 *           type: object
 *           properties:
 *              keyword:
 *                type: string
 * 
 *      responses:
 *        200: 
 *          description: success   
 */

/**
 * @swagger
 * /api/img/saveIMG/{id}:
 *  post:
 *      tags: [Images]
 *      description: Kiểm tra ảnh đã được lưu chưa
 *      parameters:
 *      - in: header
 *        name: token
 *        description: Nhập token
 *        required: true
 *        type: string
 * 
 *      - in: path
 *        description: Nhập ID ảnh
 *        name: id
 *        type: number
 *        required: true
 * 
 *      - in: body
 *        required: true
 *        name: Người đùng ID
 *        schema:
 *           type: object
 *           properties:
 *              nguoi_dung_id:
 *                type: integer
 * 
 *      responses:
 *        200: 
 *          description: success   
 */

/**
 * @swagger
 * /api/img/upload:
 *  post:
 *      tags: [Images]
 *      description: Đăng tải ảnh
 *      consumes:
 *      - multipart/form-data
 *      parameters:
 *      - in: header
 *        name: token
 *        description: Nhập token
 *        required: true
 *        type: string
 *        
 *      - in: fromData
 *        name: file
 *        type: file
 *        required: true
 *        description: The file to upload.
 *        properties:
 *          file:
 *              type: file
 * 
 *      - in: body
 *        name: User Đăng Tải
 *        required: true
 *        schema:
 *           type: object
 *           properties:
 *             nguoi_dung_id:
 *              type: integer
 *             mo_ta:
 *              type: string
 *             ten_hinh: 
 *              type: string
 * 
 *      responses:
 *       200: 
 *         description: success   
 */

/**
 * @swagger
 * /api/img/postCommentIMG/{id}:
 *  post:
 *      tags: [Images]
 *      description: Đăng tải nội dung bình luận
 *      parameters:
 *      - in: header
 *        name: token
 *        description: Nhập token
 *        required: true
 *        type: string
 * 
 *      - in: path
 *        description: Nhập ID ảnh
 *        name: id
 *        type: number
 *        required: true
 * 
 *      - in: body
 *        required: true
 *        schema:
 *           type: object
 *           properties:
 *              nguoi_dung_id:
 *                type: integer
 *              noi_dung:
 *                type: string
 * 
 *      responses:
 *        200: 
 *          description: success   
 */

/**
 * @swagger
 * /api/img/deleteIMG/{id}:
 *  delete:
 *      tags: [Images]
 *      description: Xóa ảnh đã đăng
 *      parameters:
 *      - in: header
 *        name: token
 *        description: Nhập token
 *        required: true
 *        type: string
 * 
 *      - in: path
 *        description: Nhập ID ảnh
 *        name: id
 *        type: number
 *        required: true
 * 
 *      responses:
 *        200: 
 *          description: success   
 */

/**
 * @swagger
 * /admin/login:
 *  post:
 *      description: Đăng Nhập Admin
 * 
 *      tags: [Admin]
 * 
 *      parameters:
 *      - in: body
 *        name: Admin Login
 *        schema:
 *           type: object
 *           properties:
 *             user:
 *              type: string
 *             password: 
 *              type: string
 *      responses:
 *          200: 
 *            description: success   
 */ 