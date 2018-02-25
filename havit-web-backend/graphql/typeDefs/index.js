const typeDefs = `
  type Query {
    Users(user_id_email: String) : [User],
    Reservations(user_id_email:String, hospitalCode: String, status: String) : [Reservation],
    Products (type: String, subType: String, limit: Int, page: Int, productId: String) : [Product],
    Notices (id: Int) : [Notice],
    Banners (type: String): [Banner],
    Reviews: [Review],
    Hospitals(adminAccount: String!) : [Hospital],
    HospitalAdmin(code:String!) : [HospitalAdmin],
    LikeProducts(user_id_email:String) : [Product],
    getDashboardCount(code : String) : [Product],
  }
  type User {
    specId: Float,
    name: String,
    user_id_email: String!,
    password: String,
    auth: String,
    phone: String,
    birthday: String,
    gender: String,
    likeArea: [String],
    likePoint: [String],
    hospitalCode: String,
    reservation: [Reservation],
    likeProduct: [Product],
    reviews: [Review]
  }
  type Reservation {
    _id: ID,
    reserveNum: Float,
    user_id_email: String,
    hospitalCode: String,
    userName: String,
    phone: String,
    productName: String,
    reserveDate: String,
    careDate: String,
    status: String,
    product: [Product]
  }
  type Product {
    _id: ID,
    type: String,
    productId: Int,
    subType: String,
    img: String,
    hospitalCode: String,
    hospitalLoc: String,
    hospitalName: String,
    productName: String,
    description: String,
    price: Int,
    purchased: Int,
    productDetail: String,
    reviews: [Review]
  }
  type Notice {
    _id: ID,
    title: String,
    body: String,
    author: String,
    views: Int
  }
  type Banner {
    _id: ID,
    totalBanners : [Product],
    skinBanners: [Product],
    beautyBanners: [Product]
  }
  type Review {
    _id: ID,
    user_id_email : String,
    stars : Float,
    comment: String,
    product: Product
  }
  type Hospital {
    code : String,
    adminAccount : String,
    reservations: [Reservation],
    products: [Product]
  }
  type HospitalAdmin {
    code : String,
    name: String,
    loc: String
  }

  type Mutation {

    addProduct(
      type: String,
      subType: String,
      img: String,
      hospitalCode: String,
      hospitalLoc: String,
      hospitalName: String,
      productName: String,
      description: String,
      price: Int,
      productDetail: String,
    ) : Product,

    addReservation(
      user_id_email: String,
      hospitalCode: String,
      userName: String,
      phone: String,
      productName: String,
      reserveDate: String
    ) : Reservation,

    addReview(
      user_id_email: String,
      stars: Float,
      comment: String,
      product: String
    ) : Review,

    addUser(
      specId: Float,
      name: String,
      user_id_email: String,
    ) : User,

    addUserInfo(
      user_id_email: String,
      name: String,
      phone: String,
      birthday: String,
      gender: String,
      likeArea: [String],
      likePoint: [String],
      hospitalCode : String
    ) : User,

    addLikeProducts(
      user_id_email: String,
      productId : String,
    ) : User,

    modifyReservation(
      reserveNum : String
      userName : String
      phone : String
      reserveDate: String
    ) : Reservation,

    fixReservation(
      reserveNum : String
      careDate : String
    ) : Reservation,

    confirmPurchase(
      reserveNum : String
    ) : Reservation,

    editUserInfo(
      name: String,
      user_id_email: String,
      phone: String,
      birthday: String,
      gender: String,
      likeArea: [String],
      likePoint: [String],
      hospitalCode: String
    ) : User,

    addHospitalAdmin(
      code : String,
      name: String,
      loc: String
    ) : HospitalAdmin,

    delHospitalAdmin(
      code : String
    ) : HospitalAdmin,

    addNotice(
      title: String,
      body: String,
      author: String,
    ) : Notice,

    delNotice(
      id : Int
    ) : Notice
  }
`;

export default [ typeDefs ];
