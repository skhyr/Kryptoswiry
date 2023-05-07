use crate::alphabet::{create_letter_vec, Alphabet};

pub fn encrypt(input: &str, key: &str) -> String {
    let table = generate_playfair_table(key);
    create_letter_vec(input, &Alphabet::default())
        .chunks(2)
        .map(|pair| encode_pair(pair[0].char, pair[1].char, &table))
        .collect::<Vec<String>>()
        .join("")
}

pub fn decrypt(input: &str, key: &str) -> String {
    let table = generate_playfair_table(key);
    create_letter_vec(input, &Alphabet::default())
        .chunks(2)
        .map(|pair| decode_pair(pair[0].char, pair[1].char, &table))
        .collect::<Vec<String>>()
        .join("")
}

fn generate_playfair_table(key: &str) -> [[char; 5]; 5] {
    let mut table = [[' '; 5]; 5];
    let mut used_chars = vec!['I'];

    let key_chars: Vec<char> = key.chars().filter(|ch| ch.is_ascii_alphabetic()).collect();
    let alphabet_chars = Alphabet::default().letters;
    let mut i = 0;
    let mut j = 0;
    for ch in key_chars.iter().chain(alphabet_chars.iter()) {
        if !used_chars.contains(ch) {
            table[i][j] = *ch;
            used_chars.push(*ch);
            j += 1;
            if j == 5 {
                i += 1;
                j = 0;
            }
        }
    }

    table
}

fn encode_pair(ch1: char, ch2: char, table: &[[char; 5]; 5]) -> String {
    let (mut row1, mut col1, mut row2, mut col2) = (0, 0, 0, 0);
    for i in 0..5 {
        for j in 0..5 {
            if table[i][j] == ch1 {
                row1 = i;
                col1 = j;
            } else if table[i][j] == ch2 {
                row2 = i;
                col2 = j;
            }
        }
    }

    if row1 == row2 {
        let col1_enc = (col1 + 1) % 5;
        let col2_enc = (col2 + 1) % 5;
        format!("{}{}", table[row1][col1_enc], table[row2][col2_enc])
    } else if col1 == col2 {
        let row1_enc = (row1 + 1) % 5;
        let row2_enc = (row2 + 1) % 5;
        format!("{}{}", table[row1_enc][col1], table[row2_enc][col2])
    } else {
        format!("{}{}", table[row1][col2], table[row2][col1])
    }
}

fn decode_pair(ch1: char, ch2: char, table: &[[char; 5]; 5]) -> String {
    let (mut row1, mut col1, mut row2, mut col2) = (0, 0, 0, 0);
    for i in 0..5 {
        for j in 0..5 {
            if table[i][j] == ch1 {
                row1 = i;
                col1 = j;
            } else if table[i][j] == ch2 {
                row2 = i;
                col2 = j;
            }
        }
    }

    if row1 == row2 {
        let col1_dec = if col1 == 0 { 4 } else { col1 - 1 };
        let col2_dec = if col2 == 0 { 4 } else { col2 - 1 };
        format!("{}{}", table[row1][col1_dec], table[row2][col2_dec])
    } else if col1 == col2 {
        let row1_dec = if row1 == 0 { 4 } else { row1 - 1 };
        let row2_dec = if row2 == 0 { 4 } else { row2 - 1 };
        format!("{}{}", table[row1_dec][col1], table[row2_dec][col2])
    } else {
        format!("{}{}", table[row1][col2], table[row2][col1])
    }
}
