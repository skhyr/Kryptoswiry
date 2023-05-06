pub fn encrypt(input: &str, num_rails: usize) -> String {
    let input_chars: Vec<char> = input.chars().collect();
    let mut rails = vec![String::new(); num_rails];
    let mut rail_index = 0;
    let mut direction = 1;

    input_chars.iter().for_each(|&ch| {
        rails[rail_index].push(ch);
        rail_index = (rail_index as isize + direction) as usize;

        // Change direction when we hit the ends of the rails
        if rail_index == 0 || rail_index == num_rails - 1 {
            direction *= -1;
        }
    });

    // Combine the rails into a single string
    rails.join("")
}

pub fn decrypt(input: &str, num_rails: usize) -> String {
    let input_chars: Vec<char> = input.chars().collect();
    let mut rails = vec![Vec::new(); num_rails];
    let mut rail_index = 0;
    let mut direction = 1;

    // Calculate the number of elements in each rail
    let mut num_elements_per_rail = vec![0; num_rails];
    for _ in 0..input_chars.len() {
        num_elements_per_rail[rail_index] += 1;
        rail_index = (rail_index as isize + direction) as usize;
        if rail_index == 0 || rail_index == num_rails - 1 {
            direction *= -1;
        }
    }

    // Split the input characters into rails
    let mut input_index = 0;
    for i in 0..num_rails {
        let num_elements = num_elements_per_rail[i];
        rails[i] = input_chars[input_index..input_index + num_elements].to_vec();
        input_index += num_elements;
    }

    // Read the characters from the rails in the correct order
    let mut decrypted_chars = vec![None; input_chars.len()];
    rail_index = 0;
    direction = 1;
    for i in 0..input_chars.len() {
        decrypted_chars[i] = Some(rails[rail_index].remove(0));
        rail_index = (rail_index as isize + direction) as usize;
        if rail_index == 0 || rail_index == num_rails - 1 {
            direction *= -1;
        }
    }

    // Combine the decrypted characters into a single string
    decrypted_chars.iter().map(|ch| ch.unwrap()).collect()
}
