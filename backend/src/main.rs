use lib::alphabet::create_letter_vec;
use lib::{alphabet, matrix, playfair, zigzag};

pub fn main() {
    let alphabet26 = alphabet::Alphabet::default();
    let alphabet29 = alphabet::Alphabet::new("ABCDEFGHIJKLMNOPQRSTUVWXYZ-?!");

    let message = "CZLOWIEKZCHARAKTEREM".into();

    println!("Zigzag: {}", zigzag::encrypt(message, 3));
    println!("Playfair: {}", playfair::encrypt(message, "SZLABAN"));

    let encrypted_matrix = matrix::encrypt(
        create_letter_vec("WINO", &alphabet26),
        nalgebra::Matrix2::new(3, 3, 2, 5),
    );
    println!("Matrix: {}", encrypted_matrix);
}
