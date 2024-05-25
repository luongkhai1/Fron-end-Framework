myapp.controller("listproduct", function ($scope, $window) {
  $scope.listproducts = [
    {
      image: "../img/ADAV.jpg",
      tiitle: "Lập trình Lập Trình Androi-21 ngày thành thạo lập ",
      studying: "(158)",
      learned: "1726 người đã học",
      detail1:
        "1.Để hiểu rõ hơn về cách hoạt động của Android, bạn nên tìm hiểu về kiến trúc của nó. Điều này sẽ giúp bạn hiểu rõ hơn về cách các thành phần khác nhau của hệ thống tương tác với nhau.",
      detail2:
        "2.Java là ngôn ngữ lập trình chính được sử dụng trong lập trình Android. Nếu bạn chưa biết Java, hãy bắt đầu học ngay bây giờ.",
      detail3:
        "3.Android Studio là môi trường phát triển tích hợp (IDE) được sử dụng để phát triển ứng dụng Android. Bạn nên tìm hiểu cách sử dụng Android Studio để có thể phát triển ứng dụng Android.",
      detail4:
        "4.Một ứng dụng Android bao gồm nhiều thành phần khác nhau, bao gồm các hoạt động, dịch vụ, nhiệm vụ lên lịch, và nhiều hơn nữa. Bạn nên tìm hiểu về các thành phần này để có thể phát triển ứng dụng Android.",
      detail5:
        "5.Google cung cấp nhiều tài liệu khác nhau để giúp bạn học lập trình Android. Bạn nên tìm hiểu về các tài liệu này để có thể học lập trình Android một cách hiệu quả.",
      detail6:
        "6.Thực hành là cách tốt nhất để học lập trình Android. Bạn nên thực hành nhiều để có thể trở thành một lập trình viên Android giỏi.",
      detail7:
        "7.Tham gia cộng đồng lập trình viên Android sẽ giúp bạn học hỏi được nhiều kinh nghiệm từ những người khác.",
      detail8:
        "8.Material Design là một hướng thiết kế được Google đưa ra cho các ứng dụng Android. Bạn nên tìm hiểu về Material Design để có thể thiết kế các ứng dụng Android đẹp và dễ sử dụng.",
    },
    {
      image: "../img/JSPR.png",
      tiitle: "JS-Học JavaScript nền tảng cho người mới bắt đầu ",
      studying: "(77)",
      learned: "142 người đang học",
      detail1:
        "1.Cung cấp kiến thức quan trọng ngôn ngữ lập trình javascript cho công việc lập trình web",
      detail2: "2.Làm chủ được cú pháp và cách hoạt động của javascript",
      detail3:
        "3.Giúp bạn có bước đệm vững chắc để học thư viện jquery hoặc reactjs, nodejs",
      detail4:
        "4.Những nội dung trong chương trình từ cơ bản đến chuyên sâu phù hợp ngay cả khi bạn là người mới bắt đầu",
      detail5: "5.Có bài tập thực tế giúp bạn nắm chắc nội dung đã học",
      detail6:
        "6.Bạn có người đồng hành hỗ trợ trong suốt quá trình học cho đến khi hoàn thành chương trình. ",
      detail7:
        "7.Tham gia cộng đồng lập trình viên JS sẽ giúp bạn học hỏi được nhiều kinh nghiệm từ những người khác.",
      detail8:
        "8.Material Design là một hướng thiết kế được Google đưa ra cho các ứng dụng JS. Bạn nên tìm hiểu về Material Design để có thể thiết kế các ứng dụng JS đẹp và dễ sử dụng.",
    },
    {
      image: "../img/img-js.png",
      tiitle: "Làm Chủ Jqery Siêu Tốc và Hiệu Quả ",
      studying: "(59)",
      learned: "23 ngườiđang học ",
      detail1:
        "1.Bạn sẽ được học đầy đủ các nội dung lý thuyết của jquery như Selector, Hiệu ứng, sự kiện.... từ cơ bản đến nâng cao",
      detail2:
        "2.Bạn cũng được hướng dẫn cách áp dụng jquery vào các bài toán thực tế",
      detail3:
        "3.Những kiến thức bạn được học giúp bạn có lợi thế rất lớn trong tuyển dụng và phát triển sự nghiệp đột phá",
    },
    {
      image: "../img/MOWE.png",
      tiitle: "Học SEO cơ bản cho người mới bắt đầu ",
      studying: "(56)",
      learned: "2354 người đang học ",
      detail1:
        "1.Bạn làm chủ được quy trình chuyển website chạy PC sang chạy trên đa thiết bị như tablet, iphone, ipad, TV",
      detail2: "2.Bạn nắm được cách dàn khung website phù hợp trên đa thiết bị",
      detail3:
        "3Bạn có được thuật toán tạo mọi loại menu website chạy trên nhiều thiết bị khác nhau",
      detail4:
        "4.Bạn sở hữu một công cụ không thể thiếu trong front-end web -> giúp bạn có lương cao",
    },
  ];

  $scope.listproducts1 = [
    {
      image: "../img/PHPP.png",
      tiitle: "PHPMaster- Khóa Học PHP từ cơ bản đến nâng cao ",
      studying: "(20)",
      learned: "76 người đang học ",
      detail1:
        "1.Làm chủ những kiến thức từ nền tảng cơ bản đến nâng cao của PHP",
      detail2:
        "2.Thực hành và phân tích trên các chức năng đáp ứng nhu cầu thực tế như Sendo.vn, lazada.vn...",
      detail3: "3.Nắm được cách hoạt động và xây dựng hệ thống điều hướng MVC",
      detail4: "4.Thành thạo làm việc với Ajax xử lý ngầm trong website",
      detail5:
        "5.Nắm được bản chất xây dựng hệ thống Cơ sở dữ liệu lưu trữ hệ thống",
      detail6:
        "6.Biết lên kế hoạch để lên bất kỳ dự án web và phần mềm trên nền web hoàn chỉnh",
      detail7: "7.Có đồ án chất lượng cuối khóa để xin việc",
      detail8: "8.Được hướng dẫn làm CV xin việc cuốn hút",
    },
    {
      image: "../img/HTCS.jpg",
      tiitle: "HTml css21 ngày-Thành thạo xây dựng web thực chiến ",
      studying: "(1000)",
      learned: "200 người đang học ",
      detail1:
        "1.Nắm được lý thuyết gốc Html, Css trong xây dựng giao diện web",
      detail2:
        "2.Bài học từng bước từ cơ bản đến nâng cao xen kẽ Lý thuyết và thực hành thực tế",
      detail3: "3.Bạn được chia sẻ những kinh nghiệm code html, css nhanh và chuyên nghiệp",
      detail4: "4.Bạn được kèm cặp qua nhóm chat hỏi đáp thắc mắc trong quá trình học và nhóm kín reviews bài tập/đồ án",
      detail5:
        "5.Bạn được reviews bài tập, bài đồ án để nhận ra những điểm yếu của mình và tối ưu",
      detail6:
        "6.Bài học bạn có thể xem đi xem lại nhiều lần, xem đến khi nào hiểu thì thôi",
      detail7: "7.Cuối khóa bạn có đồ án chất lượng để tham gia tuyển dụng",
      detail8: "8.Còn rất nhiều chia sẻ cách học tập, kinh nghiệp kiếm việc làm...",
    },
    {
      image: "../img/GAME.png",
      tiitle: "Lập trình game Androi từ cơ bản đến nâng cao ",
      studying: "(76)",
      learned: "1102 người đang học ",
      detail1:
        "1.Để hiểu rõ hơn về cách hoạt động của Android, bạn nên tìm hiểu về kiến trúc của nó. Điều này sẽ giúp bạn hiểu rõ hơn về cách các thành phần khác nhau của hệ thống tương tác với nhau.",
      detail2:
        "2.Java là ngôn ngữ lập trình chính được sử dụng trong lập trình Android. Nếu bạn chưa biết Java, hãy bắt đầu học ngay bây giờ.",
      detail3:
        "3.Android Studio là môi trường phát triển tích hợp (IDE) được sử dụng để phát triển ứng dụng Android. Bạn nên tìm hiểu cách sử dụng Android Studio để có thể phát triển ứng dụng Android.",
      detail4:
        "4.Một ứng dụng Android bao gồm nhiều thành phần khác nhau, bao gồm các hoạt động, dịch vụ, nhiệm vụ lên lịch, và nhiều hơn nữa. Bạn nên tìm hiểu về các thành phần này để có thể phát triển ứng dụng Android.",
      detail5:
        "5.Google cung cấp nhiều tài liệu khác nhau để giúp bạn học lập trình Android. Bạn nên tìm hiểu về các tài liệu này để có thể học lập trình Android một cách hiệu quả.",
      detail6:
        "6.Thực hành là cách tốt nhất để học lập trình Android. Bạn nên thực hành nhiều để có thể trở thành một lập trình viên Android giỏi.",
      detail7:
        "7.Tham gia cộng đồng lập trình viên Android sẽ giúp bạn học hỏi được nhiều kinh nghiệm từ những người khác.",
      detail8:
        "8.Material Design là một hướng thiết kế được Google đưa ra cho các ứng dụng Android. Bạn nên tìm hiểu về Material Design để có thể thiết kế các ứng dụng Android đẹp và dễ sử dụng.",
    },
    {
      image: "../img/PMAG.jpg",
      tiitle: "Thành thạo quản lý dự án với Agile",
      studying: "(90)",
      learned: "26 người đang học ",
      detail1:
        "1.Agile khuyến khích sự linh hoạt trong việc thích ứng với thay đổi và đưa ra các giải pháp mới",
      detail2:
        "2.Agile khuyến khích các nhóm phát triển phần mềm làm việc nhanh chóng và hiệu quả.",
      detail3:
        "3.Agile khuyến khích các nhóm phát triển phần mềm thử nghiệm các giải pháp mới để tìm ra giải pháp tốt nhất.",
      detail4:
        "4.Agile khuyến khích các nhóm phát triển phần mềm chấp nhận rủi ro để tìm ra giải pháp tốt nhất.",
      detail5:
        "5.Agile khuyến khích các nhóm phát triển phần mềm chấp nhận rủi ro giữa các cá nhân để tìm ra giải pháp tốt nhất.",
      detail6:
        "6.Agile khuyến khích sự hợp tác giữa các nhóm phát triển phần mềm để tìm ra giải pháp tốt nhất.",
      detail7:
        "7.Agile khuyến khích các nhóm phát triển phần mềm lập kế hoạch ngắn hạn để tối ưu hóa quá trình phát triển.",
    },
  ];

  $scope.goToDetails = function (product) {
    $window.localStorage.setItem("selectProduct", JSON.stringify(product));
  };
});
