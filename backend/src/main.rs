use lib::alphabet::create_letter_vec;
use lib::{alphabet, matrix, playfair};

pub fn main() {
    let message = "CZLOWIEKZCHARAKTEREM".into();

    let a = alphabet::Alphabet::default();
    let l = alphabet::Letter::new('C', &a) * 9;
    dbg!(l.char);

    let res = playfair::encrypt(message, "SZLABAN");
    println!("{:?}", res);

    let res2 = playfair::decrypt(&res, "SZLABAN");
    println!("{:?}", res2);

    let res3 = matrix::encrypt(
        create_letter_vec("WINO", &a),
        nalgebra::Matrix2::new(3, 3, 2, 5),
    );
    println!("{:?}", res3);
}
