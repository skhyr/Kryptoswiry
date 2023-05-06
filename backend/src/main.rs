use lib::{matrix, playfair};

pub fn main() {
    let message = "CZLOWIEKZCHARAKTEREM".into();
    let res = playfair::encrypt(message, "SZLABAN");
    println!("{:?}", res);
    let res2 = playfair::decrypt(&res, "SZLABAN");
    println!("{:?}", res2);
    let res3 = matrix::encrypt("WINO", nalgebra::Matrix2::new(3, 3, 2, 5));
    println!("{:?}", res3);
}
