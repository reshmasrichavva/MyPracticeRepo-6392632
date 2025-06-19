import java.util.Arrays;
import java.util.Comparator;

class Product {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public String toString() {
        return productId + " - " + productName + " (" + category + ")";
    }
}

public class SearchDemo {

    public static int linearSearch(Product[] products, int targetId) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].productId == targetId) {
                return i;
            }
        }
        return -1;
    }

    public static int binarySearch(Product[] products, int targetId) {
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (products[mid].productId == targetId) return mid;
            if (products[mid].productId < targetId) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(105, "T-Shirt", "Clothing"),
            new Product(101, "Shoes", "Footwear"),
            new Product(108, "Watch", "Accessories"),
            new Product(103, "Bag", "Travel"),
            new Product(106, "Headphones", "Electronics")
        };

        int targetId = 108;

        // Linear Search
        int linearResult = linearSearch(products, targetId);
        if (linearResult != -1) {
            System.out.println("Linear Search: Found " + products[linearResult]);
        } else {
            System.out.println("Linear Search: Product not found");
        }

        // Sort array before binary search
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        // Binary Search
        int binaryResult = binarySearch(products, targetId);
        if (binaryResult != -1) {
            System.out.println("Binary Search: Found " + products[binaryResult]);
        } else {
            System.out.println("Binary Search: Product not found");
        }
    }
}
