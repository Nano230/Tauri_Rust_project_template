// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// #[tauri::command]
// fn exit_app(window: tauri::Window) {
//     println!("exit button pushed.");
//     window.close().unwrap(); // Close current window
//     std::process::exit(0); // Fully terminate the app (force kill all windows)
// }

fn main() {
    template_lib::run();

    // tauri::Builder::default()
    //     .invoke_handler(tauri::generate_handler![exit_app])
    //     .run(tauri::generate_context!())
    //     .expect("error while running tauri application");
}
