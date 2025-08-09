// Binary crate file for define tauri commands

#[tauri::command]
pub fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
pub fn exit_app(window: tauri::Window) {
    println!("exit button pushed.");
    window.close().unwrap(); // Close current window
    std::process::exit(0); // Fully terminate the app (force kill all windows)
}