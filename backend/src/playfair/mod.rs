pub fn encrypt(input: &str, key: &str) -> String {
    // Generate the Playfair cipher table from the key
    let table = generate_playfair_table(key);

    // Remove any non-alphabetic characters from the input and convert to uppercase
    let input = input
        .chars()
        .filter(|ch| ch.is_ascii_alphabetic())
        .map(|ch| ch.to_ascii_uppercase())
        .collect::<String>();

    // Split the input into pairs of letters and encode each pair
    let encoded_pairs: Vec<String> = input
        .chars()
        .enumerate()
        .map(|(i, ch)| {
            if i % 2 == 0 {
                let next_ch = input.chars().nth(i + 1).unwrap_or('X');
                encode_pair(ch, next_ch, &table)
            } else {
                "".to_string()
            }
        })
        .filter(|pair| !pair.is_empty())
        .collect();

    // Combine the encoded pairs into a single string
    encoded_pairs.join("")
}

fn generate_playfair_table(key: &str) -> [[char; 5]; 5] {
    let mut table = [[' '; 5]; 5];
    let mut used_chars = vec![];

    // Add the key to the table
    let key_chars: Vec<char> = key.chars().filter(|ch| ch.is_ascii_alphabetic()).collect();
    let alphabet_chars: Vec<char> = "ABCDEFGHIKLMNOPQRSTUVWXYZ".chars().collect();
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
    // Find the positions of the two characters in the table
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

    // Encode the pair based on their positions in the table
    if row1 == row2 {
        // If the letters are in the same row, take the letter to the right of each
        let col1_enc = if col1 == 4 { 0 } else { col1 + 1 };
        let col2_enc = if col2 == 4 { 0 } else { col2 + 1 };
        format!("{}{}", table[row1][col1_enc], table[row2][col2_enc])
    } else if col1 == col2 {
        // If the letters are in the same column, take the letter below each
        let row1_enc = if row1 == 4 { 0 } else { row1 + 1 };
        let row2_enc = if row2 == 4 { 0 } else { row2 + 1 };
        format!("{}{}", table[row1_enc][col1], table[row2_enc][col2])
    } else {
        // If the letters are in different rows and columns, form a rectangle and take the opposite corners
        format!("{}{}", table[row1][col2], table[row2][col1])
    }
}

pub fn decrypt(input: &str, key: &str) -> String {
    // Generate the Playfair cipher table from the key
    let table = generate_playfair_table(key);

    // Remove any non-alphabetic characters from the input and convert to uppercase
    let input = input
        .chars()
        .filter(|ch| ch.is_ascii_alphabetic())
        .map(|ch| ch.to_ascii_uppercase())
        .collect::<String>();

    // Split the input into pairs of letters and decode each pair
    let decoded_pairs: Vec<String> = input
        .chars()
        .enumerate()
        .map(|(i, ch)| {
            if i % 2 == 0 {
                let next_ch = input.chars().nth(i + 1).unwrap_or('X');
                decode_pair(ch, next_ch, &table)
            } else {
                "".to_string()
            }
        })
        .filter(|pair| !pair.is_empty())
        .collect();

    // Combine the decoded pairs into a single string
    decoded_pairs.join("")
}

fn decode_pair(ch1: char, ch2: char, table: &[[char; 5]; 5]) -> String {
    // Find the positions of the two characters in the table
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

    // Decode the pair based on their positions in the table
    if row1 == row2 {
        // If the letters are in the same row, take the letter to the left of each
        let col1_dec = if col1 == 0 { 4 } else { col1 - 1 };
        let col2_dec = if col2 == 0 { 4 } else { col2 - 1 };
        format!("{}{}", table[row1][col1_dec], table[row2][col2_dec])
    } else if col1 == col2 {
        // If the letters are in the same column, take the letter above each
        let row1_dec = if row1 == 0 { 4 } else { row1 - 1 };
        let row2_dec = if row2 == 0 { 4 } else { row2 - 1 };
        format!("{}{}", table[row1_dec][col1], table[row2_dec][col2])
    } else {
        // If the letters are in different rows and columns, form a rectangle and take the opposite corners
        format!("{}{}", table[row1][col2], table[row2][col1])
    }
}
