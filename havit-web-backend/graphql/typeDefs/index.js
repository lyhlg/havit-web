const typeDefs = `
  type Query {

    Users(
      user_id_email: String
      password: String
    ) : [User]

    Products (
      type: String
      subType: String
      productId: Int
      page: Int
    ) : [Product]

    Reservations(
      user_id_email:String
      status: String
      page: Int
    ) : [Reservation]

    Hospitals(
      adminAccount: String
    ) : [Hospital]

    HospitalAdmin(
      page:Int
    ) : [HospitalAdmin]

    Events(
      user_id_email: String
      productId: Int
      status: String,
      page: Int
    ) : [Event]

    Notices(
      id: Int
      page: Int
    ) : [Notice]

    Banners(
      id: Int
    ): [Banner]

    Dashboard(
      user_id_email: String
    ) : [SalesCount]

    Payments(
      user_id_email: String
    ) : Payment

    LikeProducts(
      user_id_email: String
    ) : [Product]

    OpenedNumbers(
      user_id_email: String
      page: Int
    ) : [Reservation]

    Reviews: [Review]

    Options : [Option]
  }

  type User {
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
    hospitalLoc: String
    hospitalName: String
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
    img: String
    hospitalCode: String
    hospitalLoc: String
    hospitalName: String
    productName: String
    description: String
    price: Int
    status: String
    priority: Int
    purchased: Int
    productDetail: String
    options: Option
    reviews: [Review]
  }
  type Product {
    _id: ID
    productId: Int
    type: String
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
    maxPage: Int
    reviews: [Review]
  }
  type Notice {
    _id: Int
    title: String
    body: String
    author: String
    views: Int
    createdOn: String
  }
  type Banner {
    _id: Int
    title: String
    img: String
    url: String
    priority: Int
  }
  type Review {
    _id: ID
    user_id_email : String
    stars : Int
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
    productId: Int
    type : [String]
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

    addProduct(
      type: String,
      subType: String,
      img: String,
      hospitalCode: String,
      productName: String,
      description: String,
      price: Int,
      productDetail: String,
      options: [String]
    ) : Product,

    editProduct(
      productId: Int
      type: String,
      subType: String,
      img: String,
      productName: String,
      description: String,
      price: Int,
      productDetail: String,
      options: [String]
    ) : Product,

    addLikeProducts(
      user_id_email: String
      productId :Int
    ) : User

    delLikeProducts(
      user_id_email: String
      productId :Int
    ) : User

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
    ) : Notice

    delNotice(
      id : Int
    ) : Notice

    addBanner(
      img: String
      title: String
      url: String
      priority: Int
    ) : Banner

    modifyBanner(
      id: Int,
      img: String
      title: String
      url: String
      priority: Int
    ) : Banner

    delBanner(
      id: Int
    ) : Banner

    addEvent(
      hospitalCode: String
      productName: String
      description: String
      img: String
      price: Int
      status: String
      priority: Int
      productDetails: String
    ) : Event

    delEvent(
      hospitalCode: String
      productId: Int
    ) : Event
  }
`;

export default [typeDefs];
