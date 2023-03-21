pub fn encrypt(message: String, a: i32, b: i32) -> String {
    message
        .chars()
        .into_iter()
        .map(|ch| encrypt_letter(ch, a, b))
        .collect()
}

fn encrypt_letter(letter: char, a: i32, b: i32) -> char {
    letter
}
