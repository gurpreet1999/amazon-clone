const { getAllProduct, getProductDetail, getProductReviews, deleteReview, getAdminProduct, createProduct, updateProduct, deleteProduct, createPRoductReview } = require("../controllers/productController")
const { isAuthenticatedUser, authorizeRole } = require("../middleware/auth")
const singleUpload = require("../middleware/multer")

const productRouter=require("express").Router()



productRouter.route("/products").get(getAllProduct)
productRouter.route("/product/:id").get(isAuthenticatedUser,getProductDetail)
productRouter.route("/reviews").get(isAuthenticatedUser,getProductReviews).delete(isAuthenticatedUser,deleteReview)
productRouter.route("/review").put(isAuthenticatedUser,createPRoductReview)

//<--admin routes --> //

 productRouter.route("/admin/products").get(isAuthenticatedUser,authorizeRole("user"),getAdminProduct)
 productRouter.route("/admin/product/new").post(isAuthenticatedUser,authorizeRole("admin"),singleUpload.array("images"),createProduct)
 productRouter.route("/admin/product/:id").put(isAuthenticatedUser,authorizeRole("admin"),singleUpload.array("images"),updateProduct).delete(isAuthenticatedUser,authorizeRole("admin"),deleteProduct)





module.exports=productRouter