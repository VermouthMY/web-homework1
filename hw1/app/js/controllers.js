var myPalaceCtrls = angular.module('myPalaceCtrls', []);

myPalaceCtrls.controller('HelloCtrl', ['$scope',
    function($scope) {
        $scope.greeting = {
            text: '作业1欢迎界面'
        };
        $scope.pageClass="hello";
    }
]);

myPalaceCtrls.controller('BookListCtrl', ['$scope',
    function($scope) {
        $scope.books = [{
            title: "《Sherlock Holmes》",
            author: "Arthur Conan Doyle"
        }, {
            title: "《嫌疑人X的献身》",
            author: "东野圭吾"
        }, {
            title: "《东方快车谋杀案》",
            author: "阿加莎·克里斯蒂"
        }];
        $scope.pageClass="bookList";
    }
]);

myPalaceCtrls.controller('CafeListCtrl', ['$scope',
    function($scope) {
        $scope.teas = [{
            name: "卡布奇诺 Cappuccino",
            description: "在意大利，卡布奇诺通常被视作早餐饮品，而浓缩咖啡则被认为适合在一天中任何时候饮用。"
        }, {
            name: "焦糖玛奇朵 Caramel Macchiato",
            description: "“Macchiato”一词源于意大利，意为“印记”。浓缩咖啡倾倒入热奶时将穿过奶泡层，在牛奶中留下只属这款饮料的独特印记。"
        }, {
            name: "美式咖啡 Caffè Americano",
            description: "尽管名为美式咖啡，但此款饮料却是一种地道的欧式咖啡制作方法：即将热水和浓缩咖啡的巧妙调和。"
        }, {
            name: "拿铁 Caffè Latte",
            description: "这是一种传统的经典饮料——浓缩咖啡调入热牛奶，其上覆盖一层轻盈的奶沫。品尝此款咖啡时，您可以选择特别加入某种口味（如香草，焦糖或杏仁口味）的糖浆。"
        }];
        $scope.pageClass="cafeList";
    }
]);