const typeDefs = `
  input Upload {
    name : String
    type : String
    size : Int
    path : String
  }
  type Query {
    Users(user_id_email: String, password: String) : [User]
    Reservations(user_id_email:String status: String page: Int) : [Reservation]
    Hospitals(adminAccount: String) : [Hospital]
    OpenedNumbers(user_id_email: String, page: Int) : [Reservation]
    Products (type: String subType: String limit: Int page: Int productId: Int) : [Product]
    Events(user_id_email: String, productId: Int, limit: Int, page: Int) : [Event]
    Notices(id: Int) : [Notice]
    Banners(status: String): [Banner]
    Reviews: [Review]
    HospitalAdmin(page:Int) : [HospitalAdmin]
    LikeProducts(user_id_email:String) : [Product]
    Dashboard(user_id_email: String) : [SalesCount]
    Payments(user_id_email: String) : Payment
    Options : [Option]
  }
  type User {
    specId: Float
    name: String
    user_id_email: String!
    password: String
    auth: String
    phone: Int
    birthday: Int
    gender: String
    level: Int
    hospitalCode: String
    likeAreas: [String]
    likePoints: [String]
    reservations: [Reservation]
    likeProducts: [Product]
    reviews: [Review]
  }
  type Reservation {
    _id: ID
    reserveNum: Float
    user_id_email: String
    hospitalCode: String
    userName: String
    phone: Int
    openPhoneNum: Int
    productId: Int
    productName: String
    reserveDate: Float
    careDate: Float
    status: String
    maxPage: Int
    product: [Product]
  }
  type Hospital {
    code : String
    adminAccount : String
    reservations: [Reservation],
    products: [Product]
  }
  type Event {
    _id: ID
    productId : Int
    hospitalCode: String
    hospitalLoc: String
    hospitalName: String
    productName: String
    description: String
    price: Int
    status: String
    priority: Int
    purchased: Int
    productImage: String
    reviews: [Review]
    options: Option
  }
  type Product {
    _id: ID
    type: String
    productId: Int
    subType: String
    img: String
    hospitalCode: String
    hospitalLoc: String
    hospitalName: String
    productName: String
    description: String
    price: Int
    purchased: Int
    productDetail: String
    options: Option
    reviews: [Review]
  }
  type Notice {
    _id: ID
    title: String
    body: String
    author: String
    views: Int
    createdOn: String
  }
  type Banner {
    _id: ID
    title: String
    img: String
    url: String
    priority: Int
    status: String
  }
  type Review {
    _id: ID
    user_id_email : String
    stars : Float
    comment: String
    product: Product
  }
  type HospitalAdmin {
    code : String,
    name: String,
    loc: String,
    adminAccount: String
  }
  type Payment {
    code: String,
    count: Int,
    price: Int
  }
  type Option {
    type : [String],
    subType : [String],
    productId: Int
  }
  type SalesCount {
    _id: ID
    total: Int
    purchased: Int
    canceled: Int
    fix: String
    stars: Float
  }

  type Mutation {
    uploadFile(file: Upload): Boolean,

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
      options: [String]
    ) : Product,

    editProduct(
      id: Int,
      type: String,
      subType: String,
      img: String,
      hospitalLoc: String,
      hospitalName: String,
      productName: String,
      description: String,
      price: Int,
      productDetail: String,
      options: [String]
    ) : Product,

    addReservation(
      user_id_email: String
      hospitalCode: String
      userName: String
      phone: Int
      productId: Int
      reserveDate: Float
    ) : Reservation

    delReservation(
      user_id_email : String
      productId: Int
      reserveNum : Float
    ) : Reservation

    modifyReservation(
      reserveNum : Float
      userName : String
      phone : Int
      reserveDate: Float
      openPhoneNum: Int
    ) : Reservation

    fixReservation(
      reserveNum : Float
      careDate : Float
    ) : Reservation

    confirmPurchase(
      reserveNum : Float
    ) : Reservation

    addReview(
      user_id_email: String
      stars: Float
      comment: String
      productId: Int
    ) : Review

    addUser(
      specId: Float
      name: String
      user_id_email: String
    ) : User

    addUserInfo(
      user_id_email: String
      password: String
      auth: String
      name: String
      phone: Int
      birthday: Int
      gender: String
      likeAreas: [String]
      likePoints: [String]
      hospitalCode : String
    ) : User

    editUserInfo(
      name: String
      user_id_email: String
      phone: Int
      birthday: Int
      gender: String
      likeArea: [String]
      likePoint: [String]
      hospitalCode: String
    ) : User

    addLikeProducts(
      user_id_email: String
      productId :Int
    ) : User

    delLikeProducts(
      user_id_email: String
      productId :Int
    ) : User

    addHospitalAdmin(
      code : String
      name: String
      loc: String
    ) : HospitalAdmin

    delHospitalAdmin(
      code : String
    ) : HospitalAdmin

    addNotice(
      title: String
      body: String
      author: String
      file: Upload
    ) : Notice

    delNotice(
      id : Int
    ) : Notice

    addBanner(
      img: String
      title: String
      url: String
      priority: Int
      status: String
    ) : Banner

    modifyBanner(
      img: String
      title: String
      url: String
      priority: Int
      status: String
    ) : Banner

    delBanner(
      url: String
    ) : Banner

    addEvent(
      hospitalCode: String
      productName: String
      description: String
      price: Int
      status: String
      priority: Int
      productImage: String
    ) : Event

    delEvent(
      hospitalCode: String
      productId: Int
    ) : Event
  }
`;

export default [typeDefs];
