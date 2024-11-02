class Popular {
  final int productId;
  final String name;
  final String description;
  final double price; // Sử dụng double cho giá
  final int quantity;
  final String categoryId;
  final String imageUrl;
  final DateTime createdAt;
  final DateTime updatedAt;

  Popular({
    required this.productId,
    required this.name,
    required this.description,
    required this.price,
    required this.quantity,
    required this.categoryId,
    required this.imageUrl,
    required this.createdAt,
    required this.updatedAt,
  });

  factory Popular.fromJson(Map<String, dynamic> json) {
    return Popular(
      productId: json['productId'], // Đảm bảo nó được xử lý dưới dạng chuỗi nếu cần
      name: json['name'],
      description: json['description'],
      price: json['price'].toDouble(), // Đảm bảo giá được chuyển thành double
      quantity: json['quantity'],
      categoryId: json['categoryId'],
      imageUrl: json['imageUrl'],
      createdAt: DateTime.parse(json['createdAt']),
      updatedAt: DateTime.parse(json['updatedAt']),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'productId': productId,
      'name': name,
      'description': description,
      'price': price,
      'quantity': quantity,
      'categoryId': categoryId,
      'imageUrl': imageUrl,
      'createdAt': createdAt.toIso8601String(),
      'updatedAt': updatedAt.toIso8601String(),
    };
  }
}
