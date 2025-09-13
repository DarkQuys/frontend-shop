import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-slate-200'>
      <div class="max-w-7xl mx-auto pt-5 px-6 grid grid-cols-1 md:grid-cols-4 gap-14">
    
    
    <div>
      <h2 class="text-4xl font-extrabold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent tracking-wide">
        DarkQuys Tech
      </h2>
      <p class="mt-6 text-base leading-relaxed text-gray-400">
        Nơi bán điện thoại, tai nghe và phụ kiện công nghệ chính hãng.  
        Chất lượng - Uy tín - Giá tốt.
      </p>
    </div>

 
    <div>
      <h3 class="text-xl font-semibold text-white mb-6">Liên kết</h3>
      <ul class="space-y-3 text-base">
        <li><a href="#" class="hover:text-green-400 transition-colors">Trang chủ</a></li>
        <li><a href="#" class="hover:text-green-400 transition-colors">Sản phẩm</a></li>
        <li><a href="#" class="hover:text-green-400 transition-colors">Khuyến mãi</a></li>
        <li><a href="#" class="hover:text-green-400 transition-colors">Liên hệ</a></li>
      </ul>
    </div>


    <div>
      <h3 class="text-xl font-semibold text-white mb-6">Hỗ trợ</h3>
      <ul class="space-y-3 text-base">
        <li><a href="#" class="hover:text-green-400 transition-colors">Chính sách bảo hành</a></li>
        <li><a href="#" class="hover:text-green-400 transition-colors">Chính sách đổi trả</a></li>
        <li><a href="#" class="hover:text-green-400 transition-colors">Hướng dẫn mua hàng</a></li>
        <li><a href="#" class="hover:text-green-400 transition-colors">Câu hỏi thường gặp</a></li>
      </ul>
    </div>

    
    <div>
      <h3 class="text-xl font-semibold text-white mb-6">Liên hệ</h3>
      <div class="space-y-3 text-base">
        <p>📍 Hà Nội, Việt Nam</p>
        <p>📞 0123 456 789</p>
        <p>✉️ support@darkquys.tech</p>
      </div>

      <div class="flex space-x-6 mt-6 text-2xl">
        <a href="#" class="hover:text-green-400 transition-colors"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="hover:text-green-400 transition-colors"><i class="fab fa-instagram"></i></a>
        <a href="#" class="hover:text-green-400 transition-colors"><i class="fab fa-twitter"></i></a>
      </div>
    </div>
  </div>

 
  <div class="border-t border-gray-800 mt-14 pt-8 text-center text-sm text-gray-500 tracking-wide">
    © 2025 DarkQuys Tech. All rights reserved.
  </div>
    </footer>
  )
}

export default Footer