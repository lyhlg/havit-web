const typeDefs = `
  type Query {
    Users : [User],
    Reservations : [Reservation],
    Products (type: String, subType: String) : [Product],
    Reviews: [Review],
    EditInfo(user_id_email:String) : [User],
    LikeProducts(user_id_email:String) : [Product],
    ReservationLists(user_id_email:String) : [Reservation],
    Hospitals(adminAccount: String) : [Hospital]
  }
  type User {
    specId: Float,
    name: String,
    user_id_email: String,
    password: String,
    auth: String,
    phone: String,
    birthday: String,
    gender: String,
    likeArea: [String],
    likePoint: [String],
    reservation: [Reservation],
    likeProduct: [Product],
    reviews: [Review]
  }
  type Reservation {
    _id: String,
    user_id_email: String!,
    hospitalCode: String!,
    userName: String!,
    phone: String!,
    productName: String!,
    reserveDate: String!,
    careDate: String,
    status: String
  }
  type Product {
    _id: ID,
    type: String,
    subType: String,
    img: String,
    hospitalCode: String,
    hospitalLoc: String,
    hospitalName: String,
    title: String,
    description: String,
    price: Int,
    purchased: Int,
    productDetail: String,
    reviews: [Review]
  }
  type Review {
    user_id_email : String,
    stars : Float,
    comment: String,
    product: Product
  }
  type Hospital {
    code : String!,
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

    addUserInfo(
      user_id_email: String!,
      name: String!,
      phone: String!,
      birthday: String!,
      gender: String!,
      likeArea: [String!],
      likePoint: [String!],
      code : String
    ) : User
  }
`;

export default [ typeDefs ];
