pub const ALPHABET: [char; 26] = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
];

pub fn get_letter_index(letter: char) -> i32 {
    ALPHABET
        .into_iter()
        .enumerate()
        .find(|(_, el)| *el == letter)
        .map(|(i, _)| i)
        .unwrap()
        .try_into()
        .unwrap()
}

pub fn get_letter(index: i32) -> char {
    *ALPHABET.get(index as usize).unwrap()
}
