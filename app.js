document.addEventListener('DOMContentLoaded', () => {
    const themes = [
        // Level 1-15
        { id: 'rabbit', level: 1, name: "Vườn Thỏ Ngọc", playerIcon: '🥕', character: '🐰', winTitle: "GIẢI CỨU THÀNH CÔNG!", winSubtitle: "Bé đã giải cứu Thỏ Ngọc!", gameMode: 'normal', colors: { '--bg-color': '#ffe5ec', '--primary-color': '#ff75a0', '--secondary-color': '#ffb3c6', '--text-color': '#c94b73', '--secondary-color-translucent': 'rgba(255, 117, 160, 0.85)', '--primary-color-dark': '#c94b73' } },
        { id: 'otter', level: 2, name: "Vịnh Rái Cá Vui Vẻ", playerIcon: '🐚', character: '🦦', winTitle: "KHÁM PHÁ THÀNH CÔNG!", winSubtitle: "Bé đã giúp Rái Cá tìm thấy kho báu!", gameMode: 'normal', colors: { '--bg-color': '#e0f7fa', '--primary-color': '#00796b', '--secondary-color': '#004d40', '--text-color': '#004d40', '--secondary-color-translucent': 'rgba(0, 121, 107, 0.8)', '--primary-color-dark': '#004d40' } },
        { id: 'sprout', level: 3, name: "Khu Rừng Mầm Cây", playerIcon: '💧', character: '🌱', winCharacter: '🌳', winTitle: "TUYỆT VỜI!", winSubtitle: "Nhờ bé, Mầm Cây đã thành cây đại thụ!", gameMode: 'normal', colors: { '--bg-color': '#e8f5e9', '--primary-color': '#4CAF50', '--secondary-color': '#81c784', '--text-color': '#2e7d32', '--secondary-color-translucent': 'rgba(76, 175, 80, 0.85)', '--primary-color-dark': '#2e7d32' } },
        { id: 'duck', level: 4, name: "Giải Cứu Vịt Con", playerIcon: '☂️', character: '🐥', winCharacter: '🦆', winTitle: "GIẢI CỨU THÀNH CÔNG!", winSubtitle: "Bé đã đưa Vịt Con về nhà an toàn!", gameMode: 'timed', colors: { '--bg-color': '#e3f2fd', '--primary-color': '#ffc107', '--secondary-color': '#42a5f5', '--text-color': '#0d47a1', '--secondary-color-translucent': 'rgba(66, 165, 245, 0.85)', '--primary-color-dark': '#c79100' } },
        { id: 'monkey', level: 5, name: "Giải mã Chú Khỉ Buồn", playerIcon: '❓', character: '🐒', winCharacter: '🐵', winTitle: "GIẢI MÃ THÀNH CÔNG!", winSubtitle: "Bé đã làm Chú Khỉ vui trở lại rồi!", gameMode: 'survival', colors: { '--bg-color': '#333', '--container-bg': '#1a1a1a', '--primary-color': '#f5f5f5', '--secondary-color': '#777', '--text-color': '#ccc', '--correct-color': '#a5d6a7', '--incorrect-color': '#ef9a9a', '--secondary-color-translucent': 'rgba(200, 200, 200, 0.5)', '--primary-color-dark': '#ccc' } },
        { id: 'astronaut', level: 6, name: "Phi hành gia lạc lối", playerIcon: '🚀', character: '🧑‍🚀', winTitle: "VỀ NHÀ THÀNH CÔNG!", winSubtitle: "Bé đã giúp phi hành gia tìm đường về Trái Đất!", gameMode: 'normal', colors: { '--bg-color': '#1a237e', '--primary-color': '#fbc02d', '--secondary-color': '#5c6bc0', '--text-color': '#e8eaf6', '--secondary-color-translucent': 'rgba(92, 107, 192, 0.8)', '--primary-color-dark': '#f9a825' } },
        { id: 'detective', level: 7, name: "Thám tử Nhí tìm đồ", playerIcon: '🔦', character: '🕵️', winTitle: "PHÁ ÁN THÀNH CÔNG!", winSubtitle: "Bé đã tìm ra tất cả các đồ vật bị mất!", gameMode: 'survival', colors: { '--bg-color': '#d7ccc8', '--primary-color': '#5d4037', '--secondary-color': '#a1887f', '--text-color': '#3e2723', '--secondary-color-translucent': 'rgba(161, 136, 127, 0.8)', '--primary-color-dark': '#3e2723' } },
        { id: 'dragon', level: 8, name: "Kho báu Rồng Lửa", playerIcon: '💎', character: '🐲', winTitle: "CHINH PHỤC THÀNH CÔNG!", winSubtitle: "Bé đã vượt qua thử thách của Rồng Lửa!", gameMode: 'hardcore', colors: { '--bg-color': '#bf360c', '--primary-color': '#ffab00', '--secondary-color': '#dd2c00', '--text-color': '#ffeb3b', '--secondary-color-translucent': 'rgba(221, 44, 0, 0.8)', '--primary-color-dark': '#ff8f00' } },
        { id: 'fox', level: 9, name: "Tay Đua Cáo Con", playerIcon: '🏁', character: '🦊', winTitle: "VỀ ĐÍCH!", winSubtitle: "Một tay đua cừ khôi!", gameMode: 'timed', timePerQuestion: 150, colors: { '--bg-color': '#fbe9e7', '--primary-color': '#ff5722', '--secondary-color': '#ff8a65', '--text-color': '#bf360c', '--secondary-color-translucent': 'rgba(255, 138, 101, 0.85)', '--primary-color-dark': '#e64a19' } },
        { id: 'lion', level: 10, name: "Mê Cung Sư Tử", playerIcon: '🧭', character: '🦁', winTitle: "THOÁT KHỎI MÊ CUNG!", winSubtitle: "Trí tuệ của bé thật đáng nể!", gameMode: 'survival', colors: { '--bg-color': '#fff3e0', '--primary-color': '#ffa000', '--secondary-color': '#ffb74d', '--text-color': '#e65100', '--secondary-color-translucent': 'rgba(255, 183, 77, 0.85)', '--primary-color-dark': '#f57c00' } },
        { id: 'panda', level: 11, name: "Xưởng Vẽ Gấu Trúc", playerIcon: '🎨', character: '🐼', winTitle: "HOÀN THÀNH BỨC TRANH!", winSubtitle: "Bé là một họa sĩ tài năng!", gameMode: 'normal', colors: { '--bg-color': '#eceff1', '--primary-color': '#607d8b', '--secondary-color': '#90a4ae', '--text-color': '#37474f', '--secondary-color-translucent': 'rgba(144, 164, 174, 0.85)', '--primary-color-dark': '#455a64' } },
        { id: 'cat', level: 12, name: "Buổi Hòa Nhạc của Mèo", playerIcon: '🎵', character: '🐱', winCharacter: '🎸', winTitle: "BUỔI DIỄN THÀNH CÔNG!", winSubtitle: "Những giai điệu tuyệt vời!", gameMode: 'normal', colors: { '--bg-color': '#f3e5f5', '--primary-color': '#8e24aa', '--secondary-color': '#ba68c8', '--text-color': '#4a148c', '--secondary-color-translucent': 'rgba(186, 104, 200, 0.85)', '--primary-color-dark': '#6a1b9a' } },
        { id: 'dolphin', level: 13, name: "Cá Heo Tìm Ngọc Trai", playerIcon: '🫧', character: '🐬', winTitle: "TÌM THẤY KHO BÁU!", winSubtitle: "Nhanh như một chú cá heo!", gameMode: 'timed', timePerQuestion: 180, colors: { '--bg-color': '#e1f5fe', '--primary-color': '#039be5', '--secondary-color': '#4fc3f7', '--text-color': '#01579b', '--secondary-color-translucent': 'rgba(79, 195, 247, 0.85)', '--primary-color-dark': '#0277bd' } },
        { id: 'unicorn', level: 14, name: "Kỳ Lân Canh Giữ Sao", playerIcon: '⭐', character: '🦄', winTitle: "BẢO VỆ THÀNH CÔNG!", winSubtitle: "Bé đã giúp Kỳ Lân giữ gìn các vì sao!", gameMode: 'survival', colors: { '--bg-color': '#ede7f6', '--primary-color': '#651fff', '--secondary-color': '#7c4dff', '--text-color': '#311b92', '--secondary-color-translucent': 'rgba(124, 77, 255, 0.85)', '--primary-color-dark': '#4527a0' } },
        { id: 'phoenix', level: 15, name: "Đối mặt Phượng Hoàng", playerIcon: '🔥', character: '🐦', winCharacter: '🔥', winTitle: "THỬ THÁCH CUỐI CÙNG!", winSubtitle: "Bé đã chinh phục Thế Giới Diệu Kỳ!", gameMode: 'hardcore', timePerQuestion: 150, colors: { '--bg-color': '#ffccbc', '--primary-color': '#d84315', '--secondary-color': '#ff7043', '--text-color': '#bf360c', '--secondary-color-translucent': 'rgba(255, 112, 67, 0.85)', '--primary-color-dark': '#bf360c' } },
        { id: 'dino', level: 16, name: "Công Viên Khủng Long", playerIcon: '🥚', character: '🦖', winTitle: "KHÁM PHÁ HÓA THẠCH!", winSubtitle: "Bé đã tìm thấy khủng long bạo chúa!", gameMode: 'survival', colors: { '--bg-color': '#dcedc8', '--primary-color': '#558b2f', '--secondary-color': '#9ccc65', '--text-color': '#33691e', '--secondary-color-translucent': 'rgba(156, 204, 101, 0.85)', '--primary-color-dark': '#33691e' } },
        { id: 'pirate', level: 17, name: "Đảo Hải Tặc", playerIcon: '🗺️', character: '🏴‍☠️', winTitle: "TÌM THẤY KHO BÁU!", winSubtitle: "Yo-ho-ho! Bé là một cướp biển tài ba!", gameMode: 'normal', colors: { '--bg-color': '#cfd8dc', '--primary-color': '#455a64', '--secondary-color': '#78909c', '--text-color': '#263238', '--secondary-color-translucent': 'rgba(120, 144, 156, 0.85)', '--primary-color-dark': '#263238' } },
        { id: 'wizard', level: 18, name: "Tháp Phù Thủy", playerIcon: '🧪', character: '🧙', winTitle: "CHẾ THUỐC THÀNH CÔNG!", winSubtitle: "Bé là một pháp sư quyền năng!", gameMode: 'timed', colors: { '--bg-color': '#ede7f6', '--primary-color': '#5e35b1', '--secondary-color': '#9575cd', '--text-color': '#311b92', '--secondary-color-translucent': 'rgba(149, 117, 205, 0.85)', '--primary-color-dark': '#4527a0' } },
        { id: 'farm', level: 19, name: "Nông Trại Vui Vẻ", playerIcon: '🌾', character: '🧑‍🌾', winTitle: "MÙA MÀNG BỘI THU!", winSubtitle: "Bé là một nông dân chăm chỉ!", gameMode: 'normal', colors: { '--bg-color': '#f0f4c3', '--primary-color': '#afb42b', '--secondary-color': '#dce775', '--text-color': '#827717', '--secondary-color-translucent': 'rgba(220, 231, 117, 0.85)', '--primary-color-dark': '#9e9d24' } },
        { id: 'candy', level: 20, name: "Xứ Sở Kẹo Ngọt", playerIcon: '🍭', character: '🍬', winTitle: "BỮA TIỆC KẸO NGỌT!", winSubtitle: "Thật là một thế giới ngọt ngào!", gameMode: 'survival', colors: { '--bg-color': '#fce4ec', '--primary-color': '#ec407a', '--secondary-color': '#f06292', '--text-color': '#880e4f', '--secondary-color-translucent': 'rgba(240, 98, 146, 0.85)', '--primary-color-dark': '#c2185b' } },
        { id: 'robot', level: 21, name: "Thành Phố Robot", playerIcon: '⚙️', character: '🤖', winTitle: "NÂNG CẤP HOÀN TẤT!", winSubtitle: "Bé đã lắp ráp thành công robot tối thượng!", gameMode: 'hardcore', colors: { '--bg-color': '#b0bec5', '--primary-color': '#546e7a', '--secondary-color': '#90a4ae', '--text-color': '#263238', '--secondary-color-translucent': 'rgba(144, 164, 174, 0.85)', '--primary-color-dark': '#37474f' } },
        { id: 'alien', level: 22, name: "Hành Tinh Người Ngoài Hành Tinh", playerIcon: '🛸', character: '👽', winTitle: "LIÊN LẠC THÀNH CÔNG!", winSubtitle: "Bé đã kết bạn với người ngoài hành tinh!", gameMode: 'timed', colors: { '--bg-color': '#d1c4e9', '--primary-color': '#7e57c2', '--secondary-color': '#b39ddb', '--text-color': '#4527a0', '--secondary-color-translucent': 'rgba(179, 157, 219, 0.85)', '--primary-color-dark': '#5e35b1' } },
        { id: 'vampire', level: 23, name: "Lâu Đài Ma Cà Rồng", playerIcon: '🦇', character: '🧛', winTitle: "TRỐN THOÁT!", winSubtitle: "Bé đã dũng cảm vượt qua đêm tối!", gameMode: 'survival', colors: { '--bg-color': '#424242', '--primary-color': '#f44336', '--secondary-color': '#e57373', '--text-color': '#fafafa', '--secondary-color-translucent': 'rgba(229, 115, 115, 0.85)', '--primary-color-dark': '#c62828' } },
        { id: 'ninja', level: 24, name: "Làng Ninja", playerIcon: '🥷', character: '🥷', winTitle: "HOÀN THÀNH SỨ MỆNH!", winSubtitle: "Bé là một nhẫn giả siêu hạng!", gameMode: 'normal', colors: { '--bg-color': '#212121', '--primary-color': '#fdd835', '--secondary-color': '#fff176', '--text-color': '#ffffff', '--secondary-color-translucent': 'rgba(255, 241, 118, 0.85)', '--primary-color-dark': '#f9a825' } },
        { id: 'fairy', level: 25, name: "Khu Vườn Tiên Nữ", playerIcon: '🍄', character: '🧚', winTitle: "ĐIỀU ƯỚC THÀNH SỰ THẬT!", winSubtitle: "Các tiên nữ rất yêu quý bé!", gameMode: 'normal', colors: { '--bg-color': '#e0f2f1', '--primary-color': '#26a69a', '--secondary-color': '#80cbc4', '--text-color': '#004d40', '--secondary-color-translucent': 'rgba(128, 203, 196, 0.85)', '--primary-color-dark': '#00796b' } },
        { id: 'superhero', level: 26, name: "Thành Phố Siêu Anh Hùng", playerIcon: '💥', character: '🦸', winTitle: "BẢO VỆ THÀNH PHỐ!", winSubtitle: "Bé là một siêu anh hùng thực thụ!", gameMode: 'timed', colors: { '--bg-color': '#bbdefb', '--primary-color': '#1e88e5', '--secondary-color': '#64b5f6', '--text-color': '#0d47a1', '--secondary-color-translucent': 'rgba(100, 181, 246, 0.85)', '--primary-color-dark': '#1565c0' } },
        { id: 'clown', level: 27, name: "Rạp Xiếc Chú Hề", playerIcon: '🎪', character: '🤡', winTitle: "MÀN TRÌNH DIỄN KẾT THÚC!", winSubtitle: "Tiếng cười của bé làm rạp xiếc bừng sáng!", gameMode: 'survival', colors: { '--bg-color': '#fff9c4', '--primary-color': '#ef5350', '--secondary-color': '#ff8a80', '--text-color': '#c62828', '--secondary-color-translucent': 'rgba(255, 138, 128, 0.85)', '--primary-color-dark': '#d32f2f' } },
        { id: 'mummy', level: 28, name: "Kim Tự Tháp Ai Cập", playerIcon: '📜', character: '🗿', winCharacter: '⚱️', winTitle: "KHÁM PHÁ BÍ ẨN!", winSubtitle: "Bé đã giải được lời nguyền của Pharaoh!", gameMode: 'hardcore', colors: { '--bg-color': '#fffde7', '--primary-color': '#ffc107', '--secondary-color': '#ffd54f', '--text-color': '#ff6f00', '--secondary-color-translucent': 'rgba(255, 213, 79, 0.85)', '--primary-color-dark': '#ffa000' } },
        { id: 'zombie', level: 29, name: "Thị Trấn Thây Ma", playerIcon: '🧠', character: '🧟', winTitle: "SỐNG SÓT THÀNH CÔNG!", winSubtitle: "Bé đã tìm ra nơi trú ẩn an toàn!", gameMode: 'survival', colors: { '--bg-color': '#dcedc8', '--primary-color': '#7cb342', '--secondary-color': '#aed581', '--text-color': '#33691e', '--secondary-color-translucent': 'rgba(174, 213, 129, 0.85)', '--primary-color-dark': '#558b2f' } },
        { id: 'elf', level: 30, name: "Vương Quốc Yêu Tinh", playerIcon: '🏹', character: '🧝', winTitle: "BẢO VỆ VIÊN NGỌC!", winSubtitle: "Khu rừng mãi biết ơn bé!", gameMode: 'normal', colors: { '--bg-color': '#c8e6c9', '--primary-color': '#43a047', '--secondary-color': '#81c784', '--text-color': '#1b5e20', '--secondary-color-translucent': 'rgba(129, 199, 132, 0.85)', '--primary-color-dark': '#2e7d32' } },
        { id: 'gnome', level: 31, name: "Hầm Mỏ Chú Lùn", playerIcon: '⛏️', character: '🧔', winTitle: "TÌM THẤY VÀNG!", winSubtitle: "Một mẻ đào đầy ắp châu báu!", gameMode: 'timed', colors: { '--bg-color': '#efebe9', '--primary-color': '#795548', '--secondary-color': '#a1887f', '--text-color': '#3e2723', '--secondary-color-translucent': 'rgba(161, 136, 127, 0.85)', '--primary-color-dark': '#4e342e' } },
        { id: 'yeti', level: 32, name: "Đỉnh Núi Người Tuyết", playerIcon: '🏔️', character: 'Yeti', winTitle: "KẾT BẠN THÀNH CÔNG!", winSubtitle: "Bé đã chứng minh Người Tuyết là có thật!", gameMode: 'survival', colors: { '--bg-color': '#e3f2fd', '--primary-color': '#90caf9', '--secondary-color': '#e3f2fd', '--text-color': '#0d47a1', '--secondary-color-translucent': 'rgba(227, 242, 253, 0.85)', '--primary-color-dark': '#42a5f5' } },
        { id: 'mermaid', level: 33, name: "Thành Phố Nàng Tiên Cá", playerIcon: '🌊', character: '🧜‍♀️', winTitle: "BÀI CA CỦA BIỂN!", winSubtitle: "Bé đã cùng các nàng tiên cá ca hát!", gameMode: 'normal', colors: { '--bg-color': '#e0f7fa', '--primary-color': '#00bcd4', '--secondary-color': '#4dd0e1', '--text-color': '#006064', '--secondary-color-translucent': 'rgba(77, 208, 225, 0.85)', '--primary-color-dark': '#00838f' } },
        { id: 'genie', level: 34, name: "Cây Đèn Thần", playerIcon: '🧞', character: '🧞', winTitle: "ĐIỀU ƯỚC THỨ BA!", winSubtitle: "Bé đã giải thoát cho Thần Đèn!", gameMode: 'hardcore', colors: { '--bg-color': '#fff8e1', '--primary-color': '#fdd835', '--secondary-color': '#fff176', '--text-color': '#f57f17', '--secondary-color-translucent': 'rgba(255, 241, 118, 0.85)', '--primary-color-dark': '#f9a825' } },
        { id: 'leprechaun', level: 35, name: "Cỏ Bốn Lá", playerIcon: '🍀', character: '🤠', winTitle: "TÌM THẤY VÀNG!", winSubtitle: "Bé đã tìm thấy hũ vàng ở cuối cầu vồng!", gameMode: 'timed', colors: { '--bg-color': '#dcedc8', '--primary-color': '#689f38', '--secondary-color': '#9ccc65', '--text-color': '#33691e', '--secondary-color-translucent': 'rgba(156, 204, 101, 0.85)', '--primary-color-dark': '#33691e' } },
        { id: 'pegasus', level: 36, name: "Vùng đất Pegasus", playerIcon: '🕊️', character: '🐎', winTitle: "BAY LÊN BẦU TRỜI!", winSubtitle: "Một chuyến bay tuyệt vời cùng ngựa thần!", gameMode: 'normal', colors: { '--bg-color': '#f3e5f5', '--primary-color': '#ab47bc', '--secondary-color': '#ce93d8', '--text-color': '#4a148c', '--secondary-color-translucent': 'rgba(206, 147, 216, 0.85)', '--primary-color-dark': '#7b1fa2' } },
        { id: 'cyborg', level: 37, name: "Cuộc chiến Cyborg", playerIcon: '🦾', character: '🤖', winTitle: "VÔ HIỆU HÓA!", winSubtitle: "Bé đã ngăn chặn được đội quân Cyborg!", gameMode: 'survival', colors: { '--bg-color': '#37474f', '--primary-color': '#b0bec5', '--secondary-color': '#78909c', '--text-color': '#eceff1', '--secondary-color-translucent': 'rgba(120, 144, 156, 0.85)', '--primary-color-dark': '#455a64' } },
        { id: 'ghost', level: 38, name: "Ngôi Nhà Ma Ám", playerIcon: '👻', character: '👻', winTitle: "KHÔNG SỢ HÃI!", winSubtitle: "Những con ma thân thiện rất quý bé!", gameMode: 'normal', colors: { '--bg-color': '#e8eaf6', '--primary-color': '#7986cb', '--secondary-color': '#9fa8da', '--text-color': '#1a237e', '--secondary-color-translucent': 'rgba(159, 168, 218, 0.85)', '--primary-color-dark': '#303f9f' } },
        { id: 'kraken', level: 39, name: "Vực Sâu Quái Vật Kraken", playerIcon: '⚓', character: '🐙', winTitle: "TRỐN THOÁT!", winSubtitle: "Bé đã lèo lái con tàu vượt qua hiểm nguy!", gameMode: 'hardcore', colors: { '--bg-color': '#0d47a1', '--primary-color': '#42a5f5', '--secondary-color': '#90caf9', '--text-color': '#e3f2fd', '--secondary-color-translucent': 'rgba(144, 202, 249, 0.85)', '--primary-color-dark': '#1976d2' } },
        { id: 'werewolf', level: 40, name: "Đêm Trăng Tròn", playerIcon: '🌕', character: '🐺', winTitle: "BÌNH MINH ĐÃ LÊN!", winSubtitle: "Bé đã an toàn qua đêm trăng tròn!", gameMode: 'survival', colors: { '--bg-color': '#263238', '--primary-color': '#f5f5f5', '--secondary-color': '#bdbdbd', '--text-color': '#fafafa', '--secondary-color-translucent': 'rgba(189, 189, 189, 0.85)', '--primary-color-dark': '#9e9e9e' } },
        { id: 'golem', level: 41, name: "Người Đá Khổng Lồ", playerIcon: '🪨', character: '🗿', winTitle: "ĐÁNH THỨC NGƯỜI BẢO VỆ!", winSubtitle: "Người Đá sẽ bảo vệ khu rừng nhờ bé!", gameMode: 'normal', colors: { '--bg-color': '#bcaaa4', '--primary-color': '#6d4c41', '--secondary-color': '#8d6e63', '--text-color': '#3e2723', '--secondary-color-translucent': 'rgba(141, 110, 99, 0.85)', '--primary-color-dark': '#4e342e' } },
        { id: 'angel', level: 42, name: "Cung Điện Thiên Thần", playerIcon: '😇', character: '😇', winTitle: "ĐƯỢC BAN PHƯỚC!", winSubtitle: "Các thiên thần rất vui với lòng tốt của bé!", gameMode: 'normal', colors: { '--bg-color': '#fffde7', '--primary-color': '#fbc02d', '--secondary-color': '#fff59d', '--text-color': '#f57f17', '--secondary-color-translucent': 'rgba(255, 245, 157, 0.85)', '--primary-color-dark': '#f9a825' } },
        { id: 'hydra', level: 43, name: "Hang Rắn Hydra", playerIcon: '🐍', character: '🐍', winTitle: "CHIẾN THẮNG!", winSubtitle: "Bé đã thể hiện trí thông minh phi thường!", gameMode: 'survival', colors: { '--bg-color': '#388e3c', '--primary-color': '#a5d6a7', '--secondary-color': '#66bb6a', '--text-color': '#e8f5e9', '--secondary-color-translucent': 'rgba(102, 187, 106, 0.85)', '--primary-color-dark': '#2e7d32' } },
        { id: 'cyclops', level: 44, name: "Đảo Người Khổng Lồ 1 Mắt", playerIcon: '👁️', character: '👹', winTitle: "TRỐN THOÁT NGOẠN MỤC!", winSubtitle: "Sự khôn khéo đã cứu bé!", gameMode: 'timed', colors: { '--bg-color': '#fbe9e7', '--primary-color': '#bf360c', '--secondary-color': '#ff7043', '--text-color': '#3e2723', '--secondary-color-translucent': 'rgba(255, 112, 67, 0.85)', '--primary-color-dark': '#d84315' } },
        { id: 'cerberus', level: 45, name: "Canh Cổng Địa Ngục", playerIcon: '🐾', character: '🐶', winCharacter: '🐕‍🦺', winTitle: "THUẦN HÓA THÀNH CÔNG!", winSubtitle: "Ngay cả Cerberus cũng mến sự dũng cảm của bé!", gameMode: 'hardcore', colors: { '--bg-color': '#212121', '--primary-color': '#ff3d00', '--secondary-color': '#ff6e40', '--text-color': '#fbe9e7', '--secondary-color-translucent': 'rgba(255, 110, 64, 0.85)', '--primary-color-dark': '#dd2c00' } },
        { id: 'koala', level: 46, name: "Đồi Bạch Đàn", playerIcon: '🌿', character: '🐨', winTitle: "GIẤC NGỦ NGON!", winSubtitle: "Bé đã giúp bạn Koala tìm được chiếc lá ngon nhất!", gameMode: 'normal', colors: { '--bg-color': '#e8f5e9', '--primary-color': '#7cb342', '--secondary-color': '#aed581', '--text-color': '#33691e', '--secondary-color-translucent': 'rgba(174, 213, 129, 0.85)', '--primary-color-dark': '#558b2f' } },
{ id: 'viking', level: 47, name: "Thuyền chiến Viking", playerIcon: '🛶', character: '🧔‍♂️', winTitle: "RA KHƠI!", winSubtitle: "Một chuyến phiêu lưu vĩ đại bắt đầu!", gameMode: 'survival', colors: { '--bg-color': '#eceff1', '--primary-color': '#607d8b', '--secondary-color': '#9e9e9e', '--text-color': '#263238', '--secondary-color-translucent': 'rgba(158, 158, 158, 0.85)', '--primary-color-dark': '#455a64' } },
{ id: 'chef', level: 48, name: "Bếp Trưởng Tài Ba", playerIcon: '🍳', character: '🧑‍🍳', winTitle: "MÓN ĂN HOÀN HẢO!", winSubtitle: "Bé đã nấu một bữa ăn 5 sao!", gameMode: 'timed', timePerQuestion: 180, colors: { '--bg-color': '#fbe9e7', '--primary-color': '#ff7043', '--secondary-color': '#ffab91', '--text-color': '#d84315', '--secondary-color-translucent': 'rgba(255, 171, 145, 0.85)', '--primary-color-dark': '#e64a19' } },
{ id: 'bee', level: 49, name: "Tổ Ong Mật", playerIcon: '🍯', character: '🐝', winTitle: "THU HOẠCH MẬT NGỌT!", winSubtitle: "Những chú ong cảm ơn sự giúp đỡ của bé!", gameMode: 'normal', colors: { '--bg-color': '#fffde7', '--primary-color': '#ffc107', '--secondary-color': '#ffd54f', '--text-color': '#ff8f00', '--secondary-color-translucent': 'rgba(255, 213, 79, 0.85)', '--primary-color-dark': '#ffa000' } },
{ id: 'knight', level: 50, name: "Hiệp Sĩ Bàn Tròn", playerIcon: '⚔️', character: '🛡️', winTitle: "BẢO VỆ LÂU ĐÀI!", winSubtitle: "Lòng dũng cảm của bé được đức vua khen ngợi!", gameMode: 'survival', colors: { '--bg-color': '#e0e0e0', '--primary-color': '#9e9e9e', '--secondary-color': '#bdbdbd', '--text-color': '#212121', '--secondary-color-translucent': 'rgba(189, 189, 189, 0.85)', '--primary-color-dark': '#616161' } },
{ id: 'mole', level: 51, name: "Hang Chuột Chũi", playerIcon: '💎', character: '鼹', winTitle: "ĐÀO TRÚNG KIM CƯƠNG!", winSubtitle: "Một phát hiện chấn động!", gameMode: 'timed', colors: { '--bg-color': '#efebe9', '--primary-color': '#5d4037', '--secondary-color': '#8d6e63', '--text-color': '#3e2723', '--secondary-color-translucent': 'rgba(141, 110, 99, 0.85)', '--primary-color-dark': '#3e2723' } },
{ id: 'frog', level: 52, name: "Đầm Lầy Ếch Xanh", playerIcon: '🐸', character: '🐸', winTitle: "BÀI CA Ồ ỘP!", winSubtitle: "Dàn đồng ca ếch chào đón bé!", gameMode: 'normal', colors: { '--bg-color': '#dcedc8', '--primary-color': '#689f38', '--secondary-color': '#9ccc65', '--text-color': '#33691e', '--secondary-color-translucent': 'rgba(156, 204, 101, 0.85)', '--primary-color-dark': '#558b2f' } },
{ id: 'sloth', level: 53, name: "Bạn Lười Thảnh Thơi", playerIcon: '🦥', character: '🦥', winTitle: "THƯ GIÃN TUYỆT ĐỐI!", winSubtitle: "Bé đã học được cách sống chậm lại!", gameMode: 'normal', colors: { '--bg-color': '#f5f5f5', '--primary-color': '#a1887f', '--secondary-color': '#bcaaa4', '--text-color': '#5d4037', '--secondary-color-translucent': 'rgba(188, 170, 164, 0.85)', '--primary-color-dark': '#5d4037' } },
{ id: 'crab', level: 54, name: "Bãi Biển Cua Càng", playerIcon: '🦀', character: '🦀', winTitle: "XÂY LÂU ĐÀI CÁT!", winSubtitle: "Những chú cua rất thích ngôi nhà mới!", gameMode: 'timed', colors: { '--bg-color': '#fff3e0', '--primary-color': '#ff9800', '--secondary-color': '#ffb74d', '--text-color': '#e65100', '--secondary-color-translucent': 'rgba(255, 183, 77, 0.85)', '--primary-color-dark': '#f57c00' } },
{ id: 'hedgehog', level: 55, name: "Nhím Con Xù Lông", playerIcon: '🍎', character: '🦔', winTitle: "TÌM THẤY THỨC ĂN!", winSubtitle: "Bé đã giúp bạn nhím chuẩn bị cho mùa đông!", gameMode: 'survival', colors: { '--bg-color': '#d7ccc8', '--primary-color': '#8d6e63', '--secondary-color': '#bcaaa4', '--text-color': '#4e342e', '--secondary-color-translucent': 'rgba(188, 170, 164, 0.85)', '--primary-color-dark': '#5d4037' } },
{ id: 'owl', level: 56, name: "Rừng Cú Vọ Ban Đêm", playerIcon: '🦉', character: '🦉', winTitle: "BÍ MẬT CỦA MÀN ĐÊM!", winSubtitle: "Cú vọ thông thái đã chia sẻ kiến thức cho bé!", gameMode: 'normal', colors: { '--bg-color': '#263238', '--primary-color': '#ffca28', '--secondary-color': '#fff59d', '--text-color': '#ffffff', '--secondary-color-translucent': 'rgba(255, 245, 157, 0.85)', '--primary-color-dark': '#ffb300' } },
{ id: 'toucan', level: 57, name: "Rừng Nhiệt Đới Toucan", playerIcon: '🦜', character: '🦜', winTitle: "BẢN GIAO HƯỞNG RỪNG XANH!", winSubtitle: "Muôn loài chim cùng ca hát!", gameMode: 'normal', colors: { '--bg-color': '#c8e6c9', '--primary-color': '#009688', '--secondary-color': '#4db6ac', '--text-color': '#004d40', '--secondary-color-translucent': 'rgba(77, 182, 172, 0.85)', '--primary-color-dark': '#00796b' } },
{ id: 'camel', level: 58, name: "Sa Mạc Lạc Đà", playerIcon: '🌵', character: '🐪', winTitle: "TÌM THẤY ỐC ĐẢO!", winSubtitle: "Một hành trình gian nan nhưng xứng đáng!", gameMode: 'survival', colors: { '--bg-color': '#fff8e1', '--primary-color': '#f9a825', '--secondary-color': '#fdd835', '--text-color': '#c62828', '--secondary-color-translucent': 'rgba(253, 216, 53, 0.85)', '--primary-color-dark': '#f57f17' } },
{ id: 'gorilla', level: 59, name: "Vương Quốc Gorilla", playerIcon: '🍌', character: '🦍', winTitle: "VỊ VUA CỦA RỪNG RẬM!", winSubtitle: "Bé đã chứng tỏ được sức mạnh và trí tuệ!", gameMode: 'timed', timePerQuestion: 150, colors: { '--bg-color': '#3e2723', '--primary-color': '#a1887f', '--secondary-color': '#d7ccc8', '--text-color': '#efebe9', '--secondary-color-translucent': 'rgba(215, 204, 200, 0.85)', '--primary-color-dark': '#6d4c41' } },
{ id: 'godzilla', level: 60, name: "Thành Phố Trỗi Dậy", playerIcon: '🏙️', character: '🦎', winCharacter: '🦖', winTitle: "SIÊU THỬ THÁCH!", winSubtitle: "Bé đã chinh phục được thử thách khó nhất!", gameMode: 'hardcore', timePerQuestion: 120, colors: { '--bg-color': '#212121', '--primary-color': '#4caf50', '--secondary-color': '#a5d6a7', '--text-color': '#c8e6c9', '--secondary-color-translucent': 'rgba(165, 214, 167, 0.85)', '--primary-color-dark': '#2e7d32' } },
{ id: 'beaver', level: 61, name: "Đập Hải Ly", playerIcon: '🪵', character: '🦫', winTitle: "XÂY ĐẬP THÀNH CÔNG!", winSubtitle: "Một công trình vĩ đại!", gameMode: 'normal', colors: { '--bg-color': '#efebe9', '--primary-color': '#8d6e63', '--secondary-color': '#bcaaa4', '--text-color': '#4e342e', '--secondary-color-translucent': 'rgba(188, 170, 164, 0.85)', '--primary-color-dark': '#5d4037' } },
{ id: 'scorpion', level: 62, name: "Hoang Mạc Bọ Cạp", playerIcon: '🦂', character: '🦂', winTitle: "SỐNG SÓT QUA ĐÊM!", winSubtitle: "Bé đã vượt qua sa mạc khắc nghiệt!", gameMode: 'survival', colors: { '--bg-color': '#fff3e0', '--primary-color': '#ffb300', '--secondary-color': '#ffca28', '--text-color': '#e65100', '--secondary-color-translucent': 'rgba(255, 202, 40, 0.85)', '--primary-color-dark': '#ffa000' } },
{ id: 'cricket', level: 63, name: "Đêm Dế Mèn", playerIcon: '🦗', character: '🦗', winTitle: "BẢN NHẠC ĐÊM!", winSubtitle: "Âm thanh thật yên bình!", gameMode: 'normal', colors: { '--bg-color': '#33691e', '--primary-color': '#aed581', '--secondary-color': '#dcedc8', '--text-color': '#dcedc8', '--secondary-color-translucent': 'rgba(220, 237, 200, 0.85)', '--primary-color-dark': '#7cb342' } },
{ id: 'flamingo', level: 64, name: "Hồ Hồng Hạc", playerIcon: '🦩', character: '🦩', winTitle: "VŨ ĐIỆU DUYÊN DÁNG!", winSubtitle: "Một khung cảnh tuyệt đẹp!", gameMode: 'normal', colors: { '--bg-color': '#fce4ec', '--primary-color': '#f06292', '--secondary-color': '#f48fb1', '--text-color': '#c2185b', '--secondary-color-translucent': 'rgba(244, 143, 177, 0.85)', '--primary-color-dark': '#ad1457' } },
{ id: 'kangaroo', level: 65, name: "Đồng cỏ Kangaroo", playerIcon: '🦘', character: '🦘', winTitle: "NHẢY CAO HƠN!", winSubtitle: "Bé có sức bật thật đáng nể!", gameMode: 'timed', colors: { '--bg-color': '#fbe9e7', '--primary-color': '#d84315', '--secondary-color': '#ff7043', '--text-color': '#bf360c', '--secondary-color-translucent': 'rgba(255, 112, 67, 0.85)', '--primary-color-dark': '#bf360c' } },
{ id: 'peacock', level: 66, name: "Vườn Công Hoàng Gia", playerIcon: '🦚', character: '🦚', winTitle: "MÀN XÒE ĐUÔI LỘNG LẪY!", winSubtitle: "Vẻ đẹp làm say đắm lòng người!", gameMode: 'normal', colors: { '--bg-color': '#e0f2f1', '--primary-color': '#00897b', '--secondary-color': '#4db6ac', '--text-color': '#004d40', '--secondary-color-translucent': 'rgba(77, 182, 172, 0.85)', '--primary-color-dark': '#00695c' } },
{ id: 'bison', level: 67, name: "Thảo nguyên Bò Rừng", playerIcon: '🦬', character: '🦬', winTitle: "SỨC MẠNH VÀ SỰ BỀN BỈ!", winSubtitle: "Bé đã vượt qua thử thách của thảo nguyên!", gameMode: 'survival', colors: { '--bg-color': '#d7ccc8', '--primary-color': '#6d4c41', '--secondary-color': '#a1887f', '--text-color': '#3e2723', '--secondary-color-translucent': 'rgba(161, 136, 127, 0.85)', '--primary-color-dark': '#4e342e' } },
{ id: 'butterfly', level: 68, name: "Thung lũng Bươm Bướm", playerIcon: '🦋', character: '🦋', winTitle: "VŨ ĐIỆU CỦA SẮC MÀU!", winSubtitle: "Một thế giới thật nên thơ!", gameMode: 'normal', colors: { '--bg-color': '#f3e5f5', '--primary-color': '#d500f9', '--secondary-color': '#e040fb', '--text-color': '#6a1b9a', '--secondary-color-translucent': 'rgba(224, 64, 251, 0.85)', '--primary-color-dark': '#aa00ff' } },
{ id: 'chameleon', level: 69, name: "Tắc Kè Biến Hình", playerIcon: '🦎', character: '🦎', winTitle: "BẬC THẦY NGỤY TRANG!", winSubtitle: "Bé đã tìm ra tất cả các bạn tắc kè!", gameMode: 'timed', colors: { '--bg-color': '#f9fbe7', '--primary-color': '#8bc34a', '--secondary-color': '#aed581', '--text-color': '#558b2f', '--secondary-color-translucent': 'rgba(174, 213, 129, 0.85)', '--primary-color-dark': '#689f38' } },
{ id: 'shark', level: 70, name: "Đại Dương Cá Mập", playerIcon: '🦈', character: '🦈', winTitle: "THOÁT HIỂM NGOẠN MỤC!", winSubtitle: "Bé đã dũng cảm đối mặt với vua của biển cả!", gameMode: 'hardcore', colors: { '--bg-color': '#263238', '--primary-color': '#90a4ae', '--secondary-color': '#b0bec5', '--text-color': '#eceff1', '--secondary-color-translucent': 'rgba(176, 190, 197, 0.85)', '--primary-color-dark': '#546e7a' } },
{ id: 'ant', level: 71, name: "Tổ Kiến", playerIcon: '🐜', character: '🐜', winTitle: "XÂY DỰNG VƯƠNG QUỐC!", winSubtitle: "Sự chăm chỉ của bé thật đáng khâm phục!", gameMode: 'normal', colors: { '--bg-color': '#efebe9', '--primary-color': '#a1887f', '--secondary-color': '#bcaaa4', '--text-color': '#5d4037', '--secondary-color-translucent': 'rgba(188, 170, 164, 0.85)', '--primary-color-dark': '#6d4c41' } },
{ id: 'gorilla', level: 72, name: "Đại chiến King Kong", playerIcon: '🦍', character: '🦍', winTitle: "HÒA BÌNH TRỞ LẠI!", winSubtitle: "Bé đã giải quyết được mâu thuẫn!", gameMode: 'survival', colors: { '--bg-color': '#424242', '--primary-color': '#e0e0e0', '--secondary-color': '#9e9e9e', '--text-color': '#fafafa', '--secondary-color-translucent': 'rgba(158, 158, 158, 0.85)', '--primary-color-dark': '#757575' } },
{ id: 'hippopotamus', level: 73, name: "Sông Hà Mã", playerIcon: '🦛', character: '🦛', winTitle: "MỘT NGÀY THƯ GIÃN!", winSubtitle: "Bé đã có một buổi tắm mát vui vẻ!", gameMode: 'normal', colors: { '--bg-color': '#e0f7fa', '--primary-color': '#80deea', '--secondary-color': '#b2ebf2', '--text-color': '#00838f', '--secondary-color-translucent': 'rgba(178, 235, 242, 0.85)', '--primary-color-dark': '#00acc1' } },
{ id: 'zebra', level: 74, name: "Đồng cỏ Ngựa Vằn", playerIcon: '🦓', character: '🦓', winTitle: "CUỘC DI CƯ VĨ ĐẠI!", winSubtitle: "Bé đã dẫn dắt cả đàn đến vùng đất mới!", gameMode: 'timed', colors: { '--bg-color': '#fafafa', '--primary-color': '#212121', '--secondary-color': '#757575', '--text-color': '#212121', '--secondary-color-translucent': 'rgba(117, 117, 117, 0.85)', '--primary-color-dark': '#000000' } },
{ id: 'seal', level: 75, name: "Bắc Cực Hải Cẩu", playerIcon: '🦭', character: '🦭', winTitle: "BẮT CÁ THÀNH CÔNG!", winSubtitle: "Một bữa ăn no nê!", gameMode: 'normal', colors: { '--bg-color': '#e3f2fd', '--primary-color': '#ffffff', '--secondary-color': '#e3f2fd', '--text-color': '#0d47a1', '--secondary-color-translucent': 'rgba(227, 242, 253, 0.85)', '--primary-color-dark': '#bbdefb' } },
{ id: 'ladybug', level: 76, name: "Vườn Bọ Rùa", playerIcon: '🐞', character: '🐞', winTitle: "BAY LÊN CAO!", winSubtitle: "Những chấm đỏ thật đáng yêu!", gameMode: 'normal', colors: { '--bg-color': '#fbe9e7', '--primary-color': '#f44336', '--secondary-color': '#e57373', '--text-color': '#b71c1c', '--secondary-color-translucent': 'rgba(229, 115, 115, 0.85)', '--primary-color-dark': '#c62828' } },
{ id: 'cow', level: 77, name: "Trang trại Bò Sữa", playerIcon: '🐄', character: '🐄', winTitle: "VẮT SỮA THÀNH CÔNG!", winSubtitle: "Những ly sữa thật thơm ngon!", gameMode: 'normal', colors: { '--bg-color': '#fafafa', '--primary-color': '#424242', '--secondary-color': '#9e9e9e', '--text-color': '#212121', '--secondary-color-translucent': 'rgba(158, 158, 158, 0.85)', '--primary-color-dark': '#000000' } },
{ id: 'pig', level: 78, name: "Chuồng Heo Con", playerIcon: '🐖', character: '🐖', winTitle: "MỘT NGÀY VUI VẺ!", winSubtitle: "Ăn no tắm mát thật là thích!", gameMode: 'normal', colors: { '--bg-color': '#fce4ec', '--primary-color': '#f48fb1', '--secondary-color': '#f8bbd0', '--text-color': '#c2185b', '--secondary-color-translucent': 'rgba(248, 187, 208, 0.85)', '--primary-color-dark': '#ec407a' } },
{ id: 'sheep', level: 79, name: "Đồng Cừu", playerIcon: '🐑', character: '🐑', winTitle: "XÉN LÔNG CỪU!", winSubtitle: "Những cuộn len thật mềm mại!", gameMode: 'normal', colors: { '--bg-color': '#f5f5f5', '--primary-color': '#bdbdbd', '--secondary-color': '#e0e0e0', '--text-color': '#424242', '--secondary-color-translucent': 'rgba(224, 224, 224, 0.85)', '--primary-color-dark': '#757575' } },
{ id: 'rhino', level: 80, name: "Tê Giác Lục Địa", playerIcon: '🦏', character: '🦏', winTitle: "SỨC MẠNH VÔ SONG!", winSubtitle: "Bé đã chứng tỏ mình là người mạnh mẽ nhất!", gameMode: 'survival', colors: { '--bg-color': '#b0bec5', '--primary-color': '#78909c', '--secondary-color': '#90a4ae', '--text-color': '#37474f', '--secondary-color-translucent': 'rgba(144, 164, 174, 0.85)', '--primary-color-dark': '#546e7a' } },
{ id: 'shrimp', level: 81, name: "Đầm Tôm", playerIcon: '🦐', character: '🦐', winTitle: "MỘT MẺ TÔM TƯƠI!", winSubtitle: "Một bữa tiệc hải sản thịnh soạn!", gameMode: 'timed', colors: { '--bg-color': '#ffcdd2', '--primary-color': '#e53935', '--secondary-color': '#ef5350', '--text-color': '#b71c1c', '--secondary-color-translucent': 'rgba(239, 83, 80, 0.85)', '--primary-color-dark': '#c62828' } },
{ id: 'squid', level: 82, name: "Mực Khổng Lồ", playerIcon: '🦑', character: '🦑', winTitle: "VƯỢT QUA CƠN BÃO!", winSubtitle: "Bé đã né được những chiếc xúc tu khổng lồ!", gameMode: 'hardcore', colors: { '--bg-color': '#1a237e', '--primary-color': '#9fa8da', '--secondary-color': '#c5cae9', '--text-color': '#e8eaf6', '--secondary-color-translucent': 'rgba(197, 202, 233, 0.85)', '--primary-color-dark': '#5c6bc0' } },
{ id: 'parrot', level: 83, name: "Vẹt Nói Tiếng Người", playerIcon: '🦜', character: '🦜', winTitle: "DẠY VẸT HỌC NÓI!", winSubtitle: "Chú vẹt giờ đã nói được cả câu dài!", gameMode: 'normal', colors: { '--bg-color': '#c8e6c9', '--primary-color': '#f44336', '--secondary-color': '#a5d6a7', '--text-color': '#b71c1c', '--secondary-color-translucent': 'rgba(165, 214, 167, 0.85)', '--primary-color-dark': '#d32f2f' } },
{ id: 'badger', level: 84, name: "Hang Lửng Mật", playerIcon: '🦡', character: '🦡', winTitle: "KHÔNG BIẾT SỢ LÀ GÌ!", winSubtitle: "Sự can đảm của bé thật đáng kinh ngạc!", gameMode: 'survival', colors: { '--bg-color': '#424242', '--primary-color': '#fafafa', '--secondary-color': '#e0e0e0', '--text-color': '#fafafa', '--secondary-color-translucent': 'rgba(224, 224, 224, 0.85)', '--primary-color-dark': '#bdbdbd' } },
{ id: 'mosquito', level: 85, name: "Đội quân Muỗi", playerIcon: '🦟', character: '🦟', winTitle: "MỘT ĐÊM YÊN GIẤC!", winSubtitle: "Bé đã đuổi hết những con muỗi vo ve!", gameMode: 'timed', timePerQuestion: 100, colors: { '--bg-color': '#f5f5f5', '--primary-color': '#757575', '--secondary-color': '#bdbdbd', '--text-color': '#212121', '--secondary-color-translucent': 'rgba(189, 189, 189, 0.85)', '--primary-color-dark': '#424242' } },
{ id: 'cockroach', level: 86, name: "Gián Tinh Ranh", playerIcon: '🪳', character: '🪳', winTitle: "DỌN SẠCH BẾP!", winSubtitle: "Không còn con gián nào nữa!", gameMode: 'hardcore', timePerQuestion: 100, colors: { '--bg-color': '#efebe9', '--primary-color': '#6d4c41', '--secondary-color': '#a1887f', '--text-color': '#3e2723', '--secondary-color-translucent': 'rgba(161, 136, 127, 0.85)', '--primary-color-dark': '#4e342e' } },
{ id: 'fly', level: 87, name: "Đại chiến Ruồi", playerIcon: '🪰', character: '🪰', winTitle: "BỮA ĂN NGON MIỆNG!", winSubtitle: "Không còn con ruồi nào làm phiền nữa!", gameMode: 'timed', colors: { '--bg-color': '#eceff1', '--primary-color': '#78909c', '--secondary-color': '#b0bec5', '--text-color': '#37474f', '--secondary-color-translucent': 'rgba(176, 190, 197, 0.85)', '--primary-color-dark': '#546e7a' } },
{ id: 'worm', level: 88, name: "Thế giới Giun Đất", playerIcon: '🪱', character: '🪱', winTitle: "ĐẤT TƠI XỐP!", winSubtitle: "Bé đã giúp cho đất đai màu mỡ hơn!", gameMode: 'normal', colors: { '--bg-color': '#fbe9e7', '--primary-color': '#a1887f', '--secondary-color': '#d7ccc8', '--text-color': '#5d4037', '--secondary-color-translucent': 'rgba(215, 204, 200, 0.85)', '--primary-color-dark': '#6d4c41' } },
{ id: 'microbe', level: 89, name: "Thế giới Vi Khuẩn", playerIcon: '🦠', character: '🦠', winTitle: "PHÒNG THÍ NGHIỆM SẠCH SẼ!", winSubtitle: "Bé đã tiêu diệt hết vi khuẩn có hại!", gameMode: 'survival', colors: { '--bg-color': '#dcedc8', '--primary-color': '#aed581', '--secondary-color': '#c5e1a5', '--text-color': '#558b2f', '--secondary-color-translucent': 'rgba(197, 225, 165, 0.85)', '--primary-color-dark': '#7cb342' } },
{ id: 'abyss', level: 90, name: "Vực Thẳm Vô Tận", playerIcon: '🌀', character: '🌌', winTitle: "BÍ ẨN CỦA VŨ TRỤ!", winSubtitle: "Hành trình của bé chỉ mới bắt đầu...", gameMode: 'hardcore', colors: { '--bg-color': '#000000', '--primary-color': '#ffffff', '--secondary-color': '#9e9e9e', '--text-color': '#ffffff', '--secondary-color-translucent': 'rgba(158, 158, 158, 0.85)', '--primary-color-dark': '#e0e0e0' } }
    ];

    // === Lấy các phần tử HTML ===
    const authScreen = document.getElementById('auth-screen');
    const homeScreen = document.getElementById('home-screen'); // MỚI
    const startAdventureBtn = document.getElementById('start-adventure-btn'); // MỚI
    const homeSnowContainer = document.getElementById('home-snow-container'); // MỚI
    const loginFormContainer = document.getElementById('login-form-container');
    const registerFormContainer = document.getElementById('register-form-container');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');
    const authErrorEl = document.getElementById('auth-error');
    const userInfo = document.getElementById('user-info');
    const welcomeUserEl = document.getElementById('welcome-user');
    const logoutBtn = document.getElementById('logout-btn');
    const mapSelectionScreen = document.getElementById('map-selection-screen');
    const mapChoicesContainer = document.getElementById('map-choices');
    const prevPageBtn = document.getElementById('prev-page-btn');
    const nextPageBtn = document.getElementById('next-page-btn');
    const pageIndicator = document.getElementById('page-indicator');
    const snowContainer = document.getElementById('snow-container');
    const gameArea = document.getElementById('game-area'), winScreen = document.getElementById('win-screen');
    const heartContainer = document.getElementById('heart-container');
    const timerContainer = document.getElementById('timer-container'), timerBar = document.getElementById('timer-bar');
    const gameOverScreen = document.getElementById('game-over-screen'), retryBtn = document.getElementById('retry-btn');
    const playerIcon = document.getElementById('player-icon'), finalGoal = document.getElementById('final-goal');
    const questionCounter = document.getElementById('question-counter');
    const questionText = document.getElementById('question-text'), answerButtonsContainer = document.getElementById('answer-buttons');
    const feedbackMessage = document.getElementById('feedback-message');
    const playAgainBtn = document.getElementById('play-again-btn');
    const correctOverlay = document.getElementById('correct-overlay'), correctMessage = document.getElementById('correct-message');
    const soundControl = document.getElementById('sound-control');
    const bgMusic = document.getElementById('bg-music'), correctSound = document.getElementById('correct-sound'), wrongSound = document.getElementById('wrong-sound');
    
    bgMusic.volume = 0.2;

    // === Biến trạng thái trò chơi ===
    let currentUser = null, fullQuestionBank = [], questionsForCurrentRound = [], currentQuestionIndex = 0;
    let playerHearts = 3, timerInterval = null;
    let isMuted = false;
    let currentPage = 1;
    const mapsPerPage = 9;

    // --- HÀM QUẢN LÝ TÀI KHOẢN & TIẾN TRÌNH (LOCALSTORAGE) ---
    function getAccounts() { return JSON.parse(localStorage.getItem('gameAccounts_v2')) || []; }
    function saveAccounts(accounts) { localStorage.setItem('gameAccounts_v2', JSON.stringify(accounts)); }
    function handleRegister(e) { e.preventDefault(); const username = document.getElementById('register-username').value.trim(); const password = document.getElementById('register-password').value.trim(); if (!username || !password) { authErrorEl.textContent = 'Vui lòng nhập đủ thông tin.'; return; } let accounts = getAccounts(); if (accounts.find(acc => acc.username.toLowerCase() === username.toLowerCase())) { authErrorEl.textContent = 'Tên tài khoản này đã có người dùng rồi.'; return; } accounts.push({ username, password, highestLevelUnlocked: 1 }); saveAccounts(accounts); alert('Tạo tài khoản thành công! Giờ bé hãy đăng nhập nhé.'); showLoginScreen(); loginForm.reset(); registerForm.reset(); }
    function handleLogin(e) { e.preventDefault(); const username = document.getElementById('login-username').value.trim(); const password = document.getElementById('login-password').value.trim(); let accounts = getAccounts(); if (username.toLowerCase() === 'admin' && password === 'admin') { currentUser = { username: 'Admin', highestLevelUnlocked: 999 }; sessionStorage.setItem('currentUser', JSON.stringify(currentUser)); initializeApp(); return; } const user = accounts.find(acc => acc.username.toLowerCase() === username.toLowerCase() && acc.password === password); if (user) { currentUser = user; sessionStorage.setItem('currentUser', JSON.stringify(currentUser)); initializeApp(); } else { authErrorEl.textContent = 'Tên tài khoản hoặc mật khẩu không đúng.'; } }
    function handleLogout() { currentUser = null; sessionStorage.removeItem('currentUser'); userInfo.classList.add('hidden'); showScreen(authScreen); }
    function saveProgress() { if (!currentUser || currentUser.username === 'Admin') return; let accounts = getAccounts(); const userIndex = accounts.findIndex(acc => acc.username.toLowerCase() === currentUser.username.toLowerCase()); if (userIndex !== -1) { accounts[userIndex].highestLevelUnlocked = currentUser.highestLevelUnlocked; saveAccounts(accounts); } }

    // --- HÀM QUẢN LÝ GIAO DIỆN ---
    function showScreen(screenToShow) {
        // Thêm homeScreen vào danh sách
        [authScreen, homeScreen, mapSelectionScreen, gameArea, winScreen, gameOverScreen].forEach(screen => {
            screen.classList.add('hidden');
        });
        screenToShow.classList.remove('hidden');
    }
    
    function showLoginScreen() {
        showScreen(authScreen);
        applyTheme('rabbit');
        loginFormContainer.classList.remove('hidden');
        registerFormContainer.classList.add('hidden');
        authErrorEl.textContent = '';
        soundControl.classList.add('hidden'); // Ẩn nút âm thanh khi chưa đăng nhập
    }
    function showRegisterScreen() { loginFormContainer.classList.add('hidden'); registerFormContainer.classList.remove('hidden'); authErrorEl.textContent = ''; }
    function updateMapSelectionScreen(page) {
        currentPage = page;
        mapChoicesContainer.innerHTML = '';
        const totalPages = Math.ceil(themes.length / mapsPerPage);
        pageIndicator.textContent = `Trang ${currentPage} / ${totalPages}`;
        const startIndex = (currentPage - 1) * mapsPerPage;
        const endIndex = startIndex + mapsPerPage;
        const mapsToShow = themes.slice(startIndex, endIndex);
        mapsToShow.forEach(theme => {
            const isLocked = theme.level > currentUser.highestLevelUnlocked;
            const button = document.createElement('button'); button.className = 'map-choice-btn'; button.dataset.themeId = theme.id;
            let content = `<div class="map-icon-wrapper"><div class="map-icon">${theme.character}</div></div><div class="map-name">${theme.name}</div>`;
            if (isLocked) { button.classList.add('locked'); content += `<div class="lock-icon">🔒</div>`; }
            button.innerHTML = content;
            mapChoicesContainer.appendChild(button);
        });
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages;
    }
    function applyTheme(themeId) { let themeToApply = themes.find(t => t.id === themeId); if (!themeToApply) themeToApply = themes[0]; currentTheme = themeToApply; document.body.className = `theme-${currentTheme.id}`; const root = document.documentElement; for (const [key, value] of Object.entries(currentTheme.colors)) { root.style.setProperty(key, value); } if (playerIcon) playerIcon.textContent = currentTheme.playerIcon; if (finalGoal) finalGoal.textContent = currentTheme.character; if (document.getElementById('win-title')) document.getElementById('win-title').textContent = currentTheme.winTitle; if (document.getElementById('character-image-win')) document.getElementById('character-image-win').textContent = currentTheme.winCharacter || currentTheme.character; if (document.getElementById('win-subtitle')) document.getElementById('win-subtitle').textContent = currentTheme.winSubtitle; }
    function createSnow(container) { // Hàm tạo tuyết giờ nhận container
        if (!container) return;
        container.innerHTML = '';
        const snowCount = 100;
        for (let i = 0; i < snowCount; i++) {
            const snow = document.createElement('div');
            snow.className = 'snow';
            const size = Math.random() * 5 + 3 + 'px';
            snow.style.width = size;
            snow.style.height = size;
            snow.style.left = Math.random() * 100 + '%';
            const fallDuration = Math.random() * 8 + 7;
            const swayDuration = Math.random() * 4 + 2;
            const delay = Math.random() * 5;
            snow.style.opacity = Math.random() * 0.4 + 0.6;
            snow.style.animation = `snowfall ${fallDuration}s linear ${delay}s infinite, sway ${swayDuration}s ease-in-out ${delay}s infinite alternate`;
            container.appendChild(snow);
        }
    }
    function updateHeartsDisplay() { heartContainer.innerHTML = ''; for (let i = 0; i < (currentTheme.gameMode === 'hardcore' ? 1 : 3); i++) { const heart = document.createElement('div'); heart.textContent = '❤️'; heart.className = 'heart-icon'; if (i >= playerHearts) { heart.classList.add('lost'); } heartContainer.appendChild(heart); } }
    
    function startTimer() {
        clearInterval(timerInterval);
        timerBar.style.transition = 'none';
        timerBar.style.width = '100%';
        void timerBar.offsetWidth;
        
        const timePerQuestionMs = (currentTheme.timePerQuestion || 200) * 100;
        timerBar.style.transition = `width ${timePerQuestionMs / 1000}s linear`;
        timerBar.style.width = '0%';
        
        timerInterval = setTimeout(() => {
             gameOver('Hết giờ rồi!');
        }, timePerQuestionMs);
    }

    // --- CÁC HÀM XỬ LÝ TRÒ CHƠI ---
    async function loadQuestions() { if (fullQuestionBank.length > 0) return; try { const response = await fetch('data.txt'); const textData = await response.text(); fullQuestionBank = textData.trim().split('\n').filter(line => line && !line.startsWith('#')).map(line => { const parts = line.split('|'); return { question: parts[0], options: [parts[1], parts[2], parts[3], parts[4]], correct: parts[5].trim() }; }); } catch (error) { console.error("Lỗi tải file câu hỏi:", error); } }
    function startGame() { currentQuestionIndex = 0; heartContainer.classList.add('hidden'); timerContainer.classList.add('hidden'); clearInterval(timerInterval); if (currentTheme.gameMode === 'survival') { playerHearts = 3; heartContainer.classList.remove('hidden'); updateHeartsDisplay(); } else if (currentTheme.gameMode === 'timed' || currentTheme.gameMode === 'hardcore') { timerContainer.classList.remove('hidden'); } questionsForCurrentRound = fullQuestionBank.sort(() => 0.5 - Math.random()).slice(0, 10); createProgressMap(); updateProgressMap(); displayQuestion(); }
    function displayQuestion() { if (currentQuestionIndex >= questionsForCurrentRound.length) { endGame(); return; } questionCounter.textContent = `Câu ${currentQuestionIndex + 1} / 10`; const currentQuestion = questionsForCurrentRound[currentQuestionIndex]; questionText.textContent = currentQuestion.question; feedbackMessage.textContent = ''; answerButtonsContainer.innerHTML = ''; const options = ['A', 'B', 'C', 'D']; currentQuestion.options.forEach((optionText, index) => { const button = document.createElement('button'); button.classList.add('answer-btn'); button.dataset.option = options[index]; button.textContent = `${options[index]}. ${optionText}`; button.addEventListener('click', handleAnswerSelection); answerButtonsContainer.appendChild(button); }); if (currentTheme.gameMode === 'timed' || currentTheme.gameMode === 'hardcore') { startTimer(); } }
    function handleAnswerSelection(event) {
        const allButtons = answerButtonsContainer.querySelectorAll('.answer-btn'); allButtons.forEach(btn => btn.disabled = true);
        const selectedOption = event.target.dataset.option; const currentQuestion = questionsForCurrentRound[currentQuestionIndex];
        if (currentTheme.gameMode === 'timed' || currentTheme.gameMode === 'hardcore') { clearInterval(timerInterval); }
        if (selectedOption === currentQuestion.correct) {
            if (!isMuted) correctSound.play(); correctMessage.textContent = ["Chuẩn luôn!", "Bé giỏi quá!", "Siêu đấy!", "Đúng rồi nè!", "Tuyệt vời!"][Math.floor(Math.random() * 5)];
            correctOverlay.classList.remove('hidden');
            setTimeout(() => { correctOverlay.classList.add('hidden'); currentQuestionIndex++; updateProgressMap(); displayQuestion(); }, 1800);
        } else {
            if (!isMuted) wrongSound.play();
            if (currentTheme.gameMode === 'hardcore') { setTimeout(() => gameOver('Sai một câu là thua rồi! Cẩn thận hơn nhé!'), 1000); return; }
            if (currentTheme.gameMode === 'survival') { playerHearts--; updateHeartsDisplay(); if (playerHearts <= 0) { setTimeout(() => gameOver('Hết mạng rồi!'), 1000); return; } }
            feedbackMessage.textContent = 'Oops, sai mất rồi! Thử lại nhé!';
            setTimeout(() => { allButtons.forEach(btn => btn.disabled = false); feedbackMessage.textContent = ''; if (currentTheme.gameMode === 'timed') { startTimer(); } }, 1500);
        }
    }
    function endGame() { clearInterval(timerInterval); const nextLevel = currentTheme.level + 1; const unlockMessageEl = document.getElementById('unlock-message'); if (currentUser.username !== 'Admin' && nextLevel > currentUser.highestLevelUnlocked && themes.some(t => t.level === nextLevel)) { currentUser.highestLevelUnlocked = nextLevel; sessionStorage.setItem('currentUser', JSON.stringify(currentUser)); saveProgress(); const newMap = themes.find(t => t.level === nextLevel); unlockMessageEl.textContent = `🎉 Đã mở khóa: ${newMap.name}! 🎉`; unlockMessageEl.classList.remove('hidden'); } else { unlockMessageEl.classList.add('hidden'); } showScreen(winScreen); }
    function gameOver(reason) { clearInterval(timerInterval); document.getElementById('game-over-text').textContent = reason || 'Đừng nản chí, thử lại nhé!'; showScreen(gameOverScreen); }
    function createProgressMap() { const progressMap = document.getElementById('progress-map'); progressMap.innerHTML = ''; for (let i = 0; i < 10; i++) { const step = document.createElement('div'); step.classList.add('map-step'); progressMap.appendChild(step); } }
    function updateProgressMap() { const progressMap = document.getElementById('progress-map'); const steps = progressMap.querySelectorAll('.map-step'); steps.forEach((step, index) => { step.classList.toggle('completed', index < currentQuestionIndex); }); const targetStep = steps[currentQuestionIndex] || steps[steps.length - 1]; if (!targetStep) return; const mapRect = progressMap.getBoundingClientRect(); const stepRect = targetStep.getBoundingClientRect(); const newLeft = (stepRect.left - mapRect.left) + (stepRect.width / 2); document.getElementById('player-icon').style.left = `${newLeft}px`; }

    // --- SỰ KIỆN KHỞI ĐỘNG VÀ ĐIỀU KHIỂN ---
    startAdventureBtn.addEventListener('click', () => {
        showScreen(mapSelectionScreen);
        currentPage = 1; // Luôn bắt đầu từ trang 1 khi vào chọn map
        updateMapSelectionScreen(currentPage);
        const initialThemeId = themes.find(t => t.level === currentUser.highestLevelUnlocked)?.id || themes[0].id;
        applyTheme(initialThemeId);
    });
    playAgainBtn.addEventListener('click', () => {
        showScreen(mapSelectionScreen); // Quay về màn hình chọn map
        createSnow(document.getElementById('snow-container'));
        const pageToOpen = Math.ceil(currentTheme.level / mapsPerPage);
        updateMapSelectionScreen(pageToOpen);
        const initialThemeId = themes.find(t => t.level === currentUser.highestLevelUnlocked)?.id || themes[themes.length - 1].id;
        applyTheme(initialThemeId);
    });

    loginForm.addEventListener('submit', handleLogin);
    registerForm.addEventListener('submit', handleRegister);
    showRegisterLink.addEventListener('click', (e) => { e.preventDefault(); showRegisterScreen(); });
    showLoginLink.addEventListener('click', (e) => { e.preventDefault(); showLoginScreen(); });
    logoutBtn.addEventListener('click', handleLogout);
    mapChoicesContainer.addEventListener('click', async (event) => { const choiceBtn = event.target.closest('.map-choice-btn'); if (!choiceBtn || choiceBtn.classList.contains('locked')) return; const themeId = choiceBtn.dataset.themeId; applyTheme(themeId); showScreen(gameArea); if (!isMuted) bgMusic.play().catch(e => console.log("Trình duyệt chặn phát nhạc.")); await loadQuestions(); startGame(); });
    retryBtn.addEventListener('click', () => { showScreen(gameArea); startGame(); });
    playAgainBtn.addEventListener('click', () => {
        const pageToOpen = Math.ceil(currentTheme.level / mapsPerPage);
        updateMapSelectionScreen(pageToOpen);
        const initialThemeId = themes.find(t => t.level === currentUser.highestLevelUnlocked)?.id || themes[themes.length - 1].id;
        applyTheme(initialThemeId);
        showScreen(mapSelectionScreen); createSnow();
    });
    prevPageBtn.addEventListener('click', () => { if (currentPage > 1) { updateMapSelectionScreen(currentPage - 1); } });
    nextPageBtn.addEventListener('click', () => { const totalPages = Math.ceil(themes.length / mapsPerPage); if (currentPage < totalPages) { updateMapSelectionScreen(currentPage + 1); } });
    soundControl.addEventListener('click', () => { isMuted = !isMuted; soundControl.textContent = isMuted ? '🔇' : '🔊'; bgMusic.muted = isMuted; });

    // --- KHỞI ĐỘNG BAN ĐẦU ---
    function initializeApp() {
        showScreen(homeScreen); // SỬA: Sau khi đăng nhập, vào TRANG CHỦ
        userInfo.classList.remove('hidden');
        soundControl.classList.remove('hidden');
        welcomeUserEl.textContent = `Xin chào, ${currentUser.username}!`;
        createSnow(homeSnowContainer); // SỬA: Tạo tuyết cho TRANG CHỦ
        applyTheme('rabbit'); // Theme mặc định cho trang chủ
    }

    const savedUser = sessionStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        const accounts = getAccounts();
        if (currentUser.username.toLowerCase() !== 'admin') {
            const latestUserData = accounts.find(acc => acc.username.toLowerCase() === currentUser.username.toLowerCase());
            if (latestUserData) { currentUser.highestLevelUnlocked = latestUserData.highestLevelUnlocked; }
        }
        initializeApp();
    } else {
        showLoginScreen();
    }
});
