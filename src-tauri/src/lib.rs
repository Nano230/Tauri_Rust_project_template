// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/

// You can't place #[tauri::command] function in this file since this file is defined as library crate and 
// this file is placeholder for android application project

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    // tauri::Builder::default()
    //     .plugin(tauri_plugin_opener::init())
    //     .invoke_handler(tauri::generate_handler![app])
    //     .run(tauri::generate_context!())
    //     .expect("error while running tauri application");
}
